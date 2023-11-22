import { exec, spawn } from 'child_process';
import chalk from 'chalk';
import fs from 'fs/promises';
import ora from 'ora';
import util from 'util';
import path from 'path';
import commandLineArgs from 'command-line-args';

const { build } = commandLineArgs([{ name: 'build', type: Boolean }]);
const outdir = 'dist';
const spinner = ora({ hideCursor: false }).start();
const execPromise = util.promisify(exec);

let childProcess;
let buildResults;

//
// Called on SIGINT or SIGTERM to cleanup the build and child processes.
//
function handleCleanup() {
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

await nextTask('Generating component metadata', async () => {
  await execPromise(`npx cem analyze --litelement --outdir "${outdir}"`, { stdio: 'inherit' });
  await fs.cp(`${outdir}/custom-elements.json`, `${path.resolve(process.cwd(), '.storybook')}/custom-elements.json`, {
    recursive: true
  });
});

await nextTask('Wrapping components for React', () => {
  return execPromise(`node scripts/make-react.js --outdir "${outdir}"`, { stdio: 'inherit' });
});

await nextTask('Packaging up icons', () => {
  return execPromise(`node scripts/make-icons.js --outdir "${path.resolve(process.cwd(), '.storybook/static')}"`, {
    stdio: 'inherit'
  });
});

if (build) {
  spawn('npx', ['storybook', 'build'], { stdio: 'inherit' });
} else {
  spawn('npx', ['storybook', 'dev', '-p', '6006'], { stdio: 'inherit' });
}

// Cleanup on exit
process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);
