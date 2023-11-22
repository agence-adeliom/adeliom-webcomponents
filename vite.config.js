/** @type {import('vite').UserConfig} */
import { babel } from '@rollup/plugin-babel';
import { execSync } from 'child_process';
import { globbySync } from 'globby';
import dts from 'vite-plugin-dts';
import path from 'path';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';

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

export default {
  build: {
    target: 'es2021',
    outDir: 'dist',
    emptyOutDir: false,
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
      babelHelpers: 'bundled'
    }),
    dts({
      tsconfigPath: 'tsconfig.prod.json'
    }),
    replace({
      values: {
        __AWC_VERSION__: pkg.version
      },
      preventAssignment: true
    })
  ]
};
