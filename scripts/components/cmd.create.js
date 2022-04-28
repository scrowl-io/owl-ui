import parser from 'yargs-parser';
import {
  hasLettersOnly,
  toLower,
  toCapitalize,
  isValidComponentInputName,
  toCamelCase,
  toPascalCase,
  isValidPackageName,
  toKebabCase,
} from '../utls/strings.js';
import { hasProp } from '../utls/objects.js';
import { log, clear } from '../utls/console.js';
import fs from '../utls/file-system.js';
import { compile, definePaths } from './templater.js';
import { create as createTmpl } from './create-option.js';

const argv = parser(process.argv.slice(2));

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
    index: sourcePath('index', 'index.ts'),
    styles: sourcePath('styles', '_index.scss'),
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

  createTmpl(component, folders);
  updateSource(folders, component);
}

function createBoilerplate(components) {
  function packagePath(template, filename, folders) {
    return definePaths(template, 'package', filename, folders.base);
  }

  components.map(component => {
    if (componentExists(component)) {
      throw Error(`Component '${component.name}' already exists.`);
    } else {
      const folders = createFolderMap(component);
      const fileList = {
        package: packagePath('package', 'package.json', folders),
        license: packagePath('license', 'LICENSE', folders),
        npmignore: packagePath('npmignore', '.npmignore', folders),
        readme: packagePath('readme', 'README.md', folders),
        tsconfig: packagePath('tsconfig', 'tsconfig.json', folders),
        postcss: packagePath('postcss', '.postcssrc.json', folders),
        sass: packagePath('sass', '.sassrc.json', folders),
        parcel: packagePath('parcel', '.parcelrc', folders),
      };

      for (let filename in fileList) {
        fileList[filename].contents = compile(
          fileList[filename].template,
          component
        );
        fs.setFile(fileList[filename].path, fileList[filename].contents);
      }

      addOption(component);
    }
  });
}

function getParts(component, getOpt) {
  getOpt = getOpt || false;
  const parts = component.split('@');

  if (!parts.length) {
    throw Error('Component name missing');
  }

  if (!isValidComponentInputName(parts[0])) {
    throw Error(
      `Component name must NOT include any numbers or special characters (except for underscores [_] or dashes [-])`
    );
  }

  const componentName = toCamelCase(parts[0]);
  const packageName = isValidPackageName(componentName);

  if (!packageName.valid) {
    throw Error(
      `Component name must be equal to or less than ${packageName.maxLn} characters.\nCurrent name is ${packageName.over} characters above maximum`
    );
  }

  if (getOpt && !parts[1]) {
    throw Error('Component option missing: [name]@[option]');
  }

  const option = getOpt || parts[1] ? parts[1] : 'default';

  if (!isValidComponentInputName(option)) {
    throw Error(
      `Component option name must NOT include any numbers or special characters (except for underscores [_] or dashes [-])`
    );
  }

  const config = fs.getFile('lerna.json');

  return {
    name: componentName,
    cap: toCapitalize(componentName),
    low: toLower(componentName),
    keb: toKebabCase(componentName),
    option: option,
    optionCap: toCapitalize(option),
    optionPas: toPascalCase(option),
    optionKeb: toKebabCase(option),
    libVersion: config.version,
  };
}

function componentExists(component) {
  const folders = createFolderMap(component);

  return fs.dirExists(folders.base);
}

function optionExists(component) {
  const folders = createFolderMap(component);

  return fs.dirExists(`${folders.src}/${component.optionCap}`);
}

function processArgs() {
  let components = [];

  try {
    if (hasProp(argv, 'o')) {
      // create an option for an existing component
      const component = getParts(argv.o, true);

      if (!componentExists(component)) {
        components.push(component);

        log('Component does not exist: creating it', 'warn');
      } else {
        if (optionExists(component)) {
          throw Error('Option already exists for component.');
        } else {
          addOption(component);
        }
      }
    } else {
      // create one or many new components
      let newComponent;

      if (hasProp(argv, 'n')) {
        newComponent = getParts(argv.n);

        if (newComponent.option !== 'default') {
          const defaultOption = Object.assign({}, newComponent);

          defaultOption.option = 'default';
          defaultOption.optionCap = toCapitalize(defaultOption.option);
          defaultOption.optionPas = toPascalCase(defaultOption.option);
          components.push(defaultOption);
        } else {
          components.push(newComponent);
        }
      }

      if (hasProp(argv, 'm')) {
        const many = argv.m.split(',');

        components = many.map(getParts);
      }

      if (components.length === 0) {
        throw Error(
          `No component names submitted \n Use flag -n with a non-spaced string to create a single component \n Use flag -m with comma separated non-spaced string to create multiple components`
        );
      }

      createBoilerplate(components);

      if (newComponent.option !== 'default') {
        addOption(newComponent);
      }
    }
  } catch (err) {
    log(err);
    process.exit(1);
  }
}

clear();
processArgs();
