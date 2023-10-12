/** @type {import('vite').UserConfig} */
import { execSync } from 'child_process';
import { globbySync } from 'globby';
import path from 'path';
import pkg from '../package.json';

const externalPackages = [
  //...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
].map(packageName => new RegExp(`^${packageName}(\/.*)?`));

const entries = [
  //
  // NOTE: Entry points must be mapped in package.json > exports, otherwise users won't be able to import them!
  //
  // The whole shebang
  './src/awc.ts',
  // The auto-loader
  './src/awc-autoloader.ts',
  // The tailwind plugin
  './src/tailwind/index.js',
  // Components
  ...globbySync('./src/components/**/!(*.(style|stories|test)).ts'),
  // Translations
  ...globbySync('./src/translations/**/*.ts'),
  // Public utilities
  ...globbySync('./src/utilities/**/!(*.(style|stories|test)).ts'),
  // Theme stylesheets
  ...globbySync('./src/themes/**/!(*.test).ts'),
  // React wrappers
  ...globbySync('./src/react/**/*.ts')
];

const awcPlugin = () => {
  let config;
  return {
    name: 'metadata',
    enforce: 'post',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    closeBundle: () => {
      const outputDir = path.relative(process.cwd(), config.build.outDir);
      console.log(`cem analyze --litelement --outdir "${outputDir}"`);
      execSync(`cem analyze --litelement --outdir "${outputDir}"`, { stdio: 'inherit' });
      execSync(`node scripts/make-icons.js --outdir ${config.build.outDir}`, { stdio: 'inherit' });
      execSync(`node scripts/make-react.js --outdir ${config.build.outDir}`, { stdio: 'inherit' });
      execSync(`node scripts/make-themes.js --outdir ${config.build.outDir}`, { stdio: 'inherit' });
      execSync(`npm run storybook`, { stdio: 'inherit' });
    }
  };
};

export default {};
