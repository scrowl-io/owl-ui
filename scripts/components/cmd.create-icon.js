import parser from 'yargs-parser';
import {
  hasLettersOnly,
  toLower,
  toCapitalize,
  toPascalCase,
  isValidOptionInputName,
} from '../utls/strings.js';
import { log, clear } from '../utls/console.js';
import fs from '../utls/file-system.js';
import { compile, definePaths } from './templater.js';
import { create as createOpt } from './create-option.js';

const argv = parser(process.argv.slice(2));
const componentName = 'icons';

function createFolderMap(component) {
  if (!hasLettersOnly(component.name)) {
    throw new Error(
      `Component name must not contain special characters or numbers: ${component.name}`
    );
  }

  const folders = {
    base: `packages/${component.name}`,
  };

  folders.src = `${folders.base}/src`;

  return folders;
}

function updateSource(folders, component) {
  function sourcePath(template, filename) {
    return definePaths(template, 'source', filename, folders.src);
  }

  const options = fs.dirList(folders.src);
  const fileList = {
    index: sourcePath(`index-${componentName}`, 'index.ts'),
  };

  let name = '';
  let cap = '';
  let pas = '';

  component.options = options.sort().map(opt => {
    name = opt;
    cap = toCapitalize(name);
    pas = toPascalCase(name);
    return {
      name,
      cap,
      pas,
    };
  });

  for (let filename in fileList) {
    fileList[filename].contents = compile(
      fileList[filename].template,
      component
    );

    fs.setFile(fileList[filename].path, fileList[filename].contents);
  }
}

function addOption(component) {
  const folders = createFolderMap(component);

  createOpt(component, folders);
  updateSource(folders, component);
}

function defineIcon(name) {
  let optName = toLower(name);

  if (!isValidOptionInputName(optName)) {
    throw new Error(
      `Icon name must NOT include any special characters (except for underscores [_] or dashes [-]): ${optName}`
    );
  }

  let optCap = toCapitalize(optName);
  let optPas = toPascalCase(optName);

  return {
    name: componentName,
    cap: toCapitalize(componentName),
    low: toLower(componentName),
    option: optName,
    optionCap: optCap,
    optionPas: optPas,
  };
}

function createDefinition(name) {
  if (!name.length) {
    throw new Error('Icon name missing');
  }

  try {
    if (name.indexOf(',') === -1) {
      return defineIcon(name);
    } else {
      const icons = name.split(',');

      return icons.map(defineIcon);
    }
  } catch (err) {
    return err;
  }
}

function processArgs() {
  try {
    if (argv.hasOwnProperty('n')) {
      const definition = createDefinition(argv.n);

      if (Array.isArray(definition)) {
        definition.forEach(addOption);
      } else {
        addOption(definition);
      }
    } else if (argv.hasOwnProperty('a')) {
      const iconsPath =
        'node_modules/material-design-icons/iconfont/codepoints';
      const iconsRaw = fs.getFile(iconsPath);
      const iconList = iconsRaw
        .trim()
        .replace(/([a-zA-Z]*(_*[a-zA-z]*)) ([a-z|\d]{4,})/g, (match, icon) => {
          return icon.trim();
        })
        .split(/\n/g);
      const definitions = iconList.map(defineIcon);

      definitions.forEach(addOption);
    }
  } catch (err) {
    log(err);
    process.exit(1);
  }
}

clear();
processArgs();
