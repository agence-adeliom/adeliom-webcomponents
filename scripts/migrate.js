import { globby } from 'globby';
import path from 'path';
import fs from 'fs';

const components = await globby('src/components/**/*!(test|stories|styles|styles).ts');

console.log(components);

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(new RegExp(/\s+(.)(\w*)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3}`)
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

for (const component of components) {
  const componentName = path.dirname(component).split('/').pop();
  const filename = path.basename(component).split('.ts')[0];
  if (componentName === filename) {
    if (fs.existsSync(component)) {
      console.log(`Rename ${component} to ${component.replace('.ts', '.component.ts')}`);
      fs.renameSync(component, component.replace('.ts', '.component.ts'));

      const code = `import AWC${toPascalCase(componentName)} from './${componentName}.component.js';

export * from './${componentName}.component.js';
export default AWC${toPascalCase(componentName)};

AWC${toPascalCase(componentName)}.define('awc-${componentName}');

declare global {
  interface HTMLElementTagNameMap {
    'awc-${componentName}': AWC${toPascalCase(componentName)};
  }
}`;
      fs.writeFileSync(component, code);
    }
  }
}
