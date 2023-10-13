//
// This script downloads and generates icons and icon metadata.
//
import commandLineArgs from 'command-line-args';
import fs from 'fs/promises';
import path from 'path';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const iconDir = path.join(outdir, '/assets/icons');

const srcPath = `./node_modules/bootstrap-icons`;

// Copy icons
await fs.rm(iconDir, { recursive: true, force: true });
await fs.mkdir(iconDir, { recursive: true });
await Promise.all([
    fs.cp(`${srcPath}/icons`, iconDir, {recursive: true}),
    fs.cp(`${srcPath}/LICENSE`, path.join(iconDir, 'LICENSE'))
]);
