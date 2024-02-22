import commandLineArgs from 'command-line-args';
import { readFileSync } from 'fs';
import fs from 'fs/promises';
import * as path from 'path';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });

let { entries } = JSON.parse(readFileSync(path.join(process.cwd(), 'storybook-static/index.json'), 'utf-8'));

const generateSiteMap = (pages, domain) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(id => {
         return `
       <url>
           <loc>${`https://${domain}/?path=/docs/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
};

const storybookDocs = Object.values(entries).reduce((docs, value) => {
  if (value.type === 'docs') {
    docs.push(value.id);
  }
  return docs;
}, []);

await Promise.all([
  fs.writeFile(
    path.join(process.cwd(), 'storybook-static/sitemap.xml'),
    generateSiteMap(storybookDocs, 'webcomponents.adeliom.io')
  )
]);
