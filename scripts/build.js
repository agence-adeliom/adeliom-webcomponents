import { deleteAsync } from 'del';
import { exec, spawn } from 'child_process';
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import fs from 'fs/promises';
import ora from 'ora';
import util from 'util';

const { serve } = commandLineArgs([{ name: 'serve', type: Boolean }]);
const outdir = 'dist';
const cdndir = 'cdn';
const sitedir = '_site';
const spinner = ora({ hideCursor: false }).start();
const execPromise = util.promisify(exec);
let childProcess;
let buildResults;

//
// Called on SIGINT or SIGTERM to cleanup the build and child processes.
//
function handleCleanup() {
  buildResults.forEach(result => result.dispose());

  if (childProcess) {
    childProcess.kill('SIGINT');
  }

  process.exit();
}

//
// Helper function to draw a spinner while tasks run.
//
async function nextTask(label, action) {
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    console.log(`${chalk.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${chalk.red('✘')} ${err}`);
    if (err.stdout) console.error(chalk.red(err.stdout));
    if (err.stderr) console.error(chalk.red(err.stderr));
    process.exit(1);
  }
}

await nextTask('Cleaning up the previous build', async () => {
  await deleteAsync(outdir);
  await fs.mkdir(outdir, { recursive: true });
});

await nextTask('Generating component metadata', () => {
  return execPromise(`npx cem analyze --litelement --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Wrapping components for React', () => {
  return execPromise(`node scripts/make-react.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Generating themes', () => {
  return execPromise(`node scripts/make-themes.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Packaging up icons', () => {
  return execPromise(`node scripts/make-icons.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Copy Tailwind preset', () => {
  return fs.cp('src/tailwind.cjs', `${outdir}/tailwind.cjs`);
});

await nextTask('Running the TypeScript compiler', () => {
  //return execPromise(`npx tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, { stdio: 'inherit' });
});

// Copy the above steps to the CDN directory directly so we don't need to twice the work for nothing.
await nextTask(`Themes, Icons, and TS Types to "${cdndir}"`, async () => {
  //await deleteAsync(cdndir);
  //await copy(outdir, cdndir);
});

await nextTask('Building source files', async () => {
  buildResults = await execPromise(`npx vite build --config ./vite.config.js`, { stdio: 'inherit' });
});

// Cleanup on exit
process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);
