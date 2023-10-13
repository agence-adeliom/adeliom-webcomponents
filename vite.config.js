/** @type {import('vite').UserConfig} */
import { babel } from '@rollup/plugin-babel';
import { execSync } from 'child_process';
import { globbySync } from 'globby';
import dts from 'vite-plugin-dts';
import path from 'path';
import pkg from './package.json';

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
      // eslint-disable-next-line no-undef
      const outputDir = path.relative(process.cwd(), config.build.outDir);
      execSync(`cem analyze --litelement --outdir "${outputDir}"`, { stdio: 'inherit' });
      execSync(`node scripts/make-icons.js --outdir ${outputDir}`, { stdio: 'inherit' });
      execSync(`node scripts/make-react.js --outdir ${outputDir}`, { stdio: 'inherit' });
      execSync(`node scripts/make-themes.js --outdir ${outputDir}`, { stdio: 'inherit' });
    }
  };
};

export default {
  build: {
    target: 'es2021',
    outDir: 'dist',
    lib: {
      entry: entries,
      formats: ['es']
    },
    rollupOptions: {
      external: externalPackages,
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    }
  },
  define: {
    // Floating UI requires this to be set
    'process.env.NODE_ENV': '"production"'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    dts({
      tsconfigPath: 'tsconfig.prod.json'
    }),
    awcPlugin()
  ]
};
