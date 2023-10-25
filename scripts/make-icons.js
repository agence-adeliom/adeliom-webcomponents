//
// This script downloads and generates icons and icon metadata.
//
import commandLineArgs from 'command-line-args';
import fs from 'fs/promises';
import path from 'path';
import {globby} from "globby";

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const iconDir = path.join(outdir, '/assets/icons');

const srcPath = `./node_modules/bootstrap-icons`;
let icons = await globby(`${srcPath}/icons/*.svg`);
icons = icons.map((icon) => {
  return path.basename(icon, ".svg");
})

// Copy icons
await fs.rm(iconDir, { recursive: true, force: true });
await fs.mkdir(iconDir, { recursive: true });


await Promise.all([
  fs.writeFile(`${srcPath}/icons/icons.json`, JSON.stringify(icons)),
  fs.cp(`${srcPath}/icons`, iconDir, { recursive: true }),
  fs.cp(`${srcPath}/LICENSE`, path.join(iconDir, 'LICENSE'))
]);
