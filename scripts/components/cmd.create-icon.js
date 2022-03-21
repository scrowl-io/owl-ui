import parser from 'yargs-parser';
import {
  hasLettersOnly,
  toLower,
  toCapitalize,
  isValidComponentInputName,
} from '../utls/strings.js';
import { log, clear } from '../utls/console.js';
import fs from '../utls/file-system.js';
import { compile, definePaths } from './templater.js';
import { create as createOpt } from './create-option.js';

const argv = parser(process.argv.slice(2));
const componentName = 'icons';

function createFolderMap(component) {
  if (!hasLettersOnly(component.name)) {
    throw Error(
      'Component name must not contain special characters or numbers.'
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

  component.options = options.sort().map(opt => {
    return {
      name: toLower(opt),
      cap: toCapitalize(opt),
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

function getParts(icon) {
  if (!icon.length) {
    throw Error('Icon name missing');
  }

  if (!isValidComponentInputName(icon)) {
    throw Error(
      `Icon name must NOT include any numbers or special characters (except for underscores [_] or dashes [-])`
    );
  }

  return {
    name: componentName,
    cap: toCapitalize(componentName),
    low: toLower(componentName),
    option: icon,
    optionCap: toCapitalize(icon),
  };
}

function processArgs() {
  try {
    if (argv.hasOwnProperty('n')) {
      const newComponent = getParts(argv.n);

      addOption(newComponent);
    }
  } catch (err) {
    log(err);
    process.exit(1);
  }
}

clear();
processArgs();
