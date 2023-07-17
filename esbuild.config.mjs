#!/usr/bin/env node

import { globby } from 'globby';
import esbuild from 'esbuild';
import commandLineArgs from "command-line-args";
import { EventEmitter } from 'events';
import { exec, spawn } from 'child_process';
const emitter = new EventEmitter()
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";
const alwaysExternal = ['@lit-labs/react', 'react'];

const { watch } = commandLineArgs([{ name: 'watch', type: Boolean }]);

const cdnConfig = {
  format: 'esm',
  target: 'es2017',
  entryPoints: [
    //
    // NOTE: Entry points must be mapped in package.json > exports, otherwise users won't be able to import them!
    //
    // The whole shebang
    './src/awc.ts',
    // The auto-loader
    './src/awc-autoloader.ts',
    // Components
    ...(await globby('./src/components/**/!(*.(style|test)).ts')),
    // Translations
    ...(await globby('./src/translations/**/*.ts')),
    // Public utilities
    ...(await globby('./src/utilities/**/!(*.(style|test)).ts')),
    // Theme stylesheets
    ...(await globby('./src/themes/**/!(*.test).ts')),
    // React wrappers
    ...(await globby('./src/react/**/*.ts')),
    // Themes
    ...(await globby('./src/themes/**/*'))
  ],
  outdir: 'cdn',
  logLevel: 'info',
  color: true,
  chunkNames: 'chunks/[name].[hash]',
  define: {
    // Floating UI requires this to be set
    'process.env.NODE_ENV': '"production"'
  },
  bundle: true,
  //
  // We don't bundle certain dependencies in the unbundled build. This ensures we ship bare module specifiers,
  // allowing end users to better optimize when using a bundler. (Only packages that ship ESM can be external.)
  //
  // We never bundle React or @lit-labs/react though!
  //
  external: alwaysExternal,
  splitting: true
};

Promise.all([
  esbuild.context({
    ...cdnConfig,
    plugins: [
      {
        name: 'cdn-build-finished',
        setup({onEnd}) {
          onEnd((result) => {
            console.log(`[CDN] Build ended with ${result.errors.length} errors`)
            emitter.emit('cdn-build-finished')
          })
        }
      }
    ]
  }),
  esbuild.context({
    ...cdnConfig,
    bundle: false,
    external: undefined,
    outdir: "dist",
    plugins: [
      {
        name: 'npm-build-finished',
        setup({onEnd}) {
          onEnd((result) => {
            console.log(`[NPM] Build ended with ${result.errors.length} errors`)
            emitter.emit('npm-build-finished')
          })
        }
      }
    ]
  }),
]).then(async ([cdnBuild, npmBuild]) => {

  //exec(`npm run doc:watch`, { stdio: 'inherit' })
  //exec(`npm run tailwindcss:watch`, { stdio: 'inherit' })

  console.log('Building...')

  await cdnBuild.rebuild()
  await npmBuild.rebuild()

  emitter.on('cdn-build-finished', () => {
    exec(`npm run make:themes`, { stdio: 'inherit' })
    exec(`npm run make:metadata`, { stdio: 'inherit' })
    exec(`npm run make:web-types`, { stdio: 'inherit' })
    exec(`npm run copy:site`, { stdio: 'inherit' })
  })

  if(watch){
    console.log('Watching...')
    await Promise.all([
      cdnBuild.watch(),
      npmBuild.watch(),
    ])
  } else {
    process.exit(0)
  }

})
.catch(() => process.exit(1));
