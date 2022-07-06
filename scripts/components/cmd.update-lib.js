import { execSync as exec } from 'child_process';
import fs from '../utls/file-system.js';
import locations from '../utls/locations.js';
import strs from '../utls/strings.js';
import { compile } from './templater.js';

const { dependencies } = fs.getFile('lib/package.json');

function setDest(filename) {
  return `lib/src/${filename}`;
}

function addDep(depName) {
  if (!dependencies[depName]) {
    exec(`lerna add ${depName} --scope=@owlui/lib`);
  }
}

function update() {
  const pkgs = locations.entries();
  const data = {
    components: [],
  };
  const templates = {
    lib: {
      file: fs.getFile(`scripts/components/templates/lib/index.hbs`),
      dest: setDest('index.ts'),
    },
  };
  const types = fs.getFile('typings/package.json');

  addDep(types.name);

  for (let pkg in pkgs) {
    const component = `@owlui/${pkg}`;
    const pkgPath = fs.join(
      pkgs[pkg].path.split('owl-ui')[1],
      '../',
      pkgs[pkg].config.source.replace('.ts', '')
    );

    data.components.push({
      name: pkg,
      cap: strs.toCapitalize(pkg),
      pkg: component,
      path: `../..${pkgPath}`,
    });

    addDep(component);
  }

  data.components = data.components.sort();

  for (let temp in templates) {
    const contents = compile(templates[temp].file, data);

    fs.setFile(templates[temp].dest, contents);
  }
}

update();
