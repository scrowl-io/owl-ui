const argv = require('yargs-parser')(process.argv.slice(2));
const strs = require('../utls/strings');
const { print, clear } = require('../utls/console');
const fs = require('../utls/file-system');
const { compile, definePaths } = require('./templater');
const tempOption = require('./create-option');

function createFolderMap(component) {
  if (!strs.hasLettersOnly(component.name)) {
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
      name: strs.toLower(opt),
      cap: strs.toCapitalize(opt),
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

  tempOption.create(component, folders);
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
        postcss: packagePath('postcss', 'postcssrc.json', folders),
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

  let componentName = strs.hasLettersOnly(parts[0])
    ? parts[0]
    : strs.toCamelCase(parts[0]);

  if (getOpt && !parts[1]) {
    throw Error('Component option missing: [name]@[option]');
  }

  const option = getOpt || parts[1] ? parts[1] : 'default';

  return {
    name: componentName,
    cap: strs.toCapitalize(componentName),
    low: strs.toLower(componentName),
    option: option,
    optionCap: strs.toCapitalize(option),
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
  const components = [];

  try {
    if (argv.hasOwnProperty('o')) {
      // create an option for an existing component
      let component = getParts(argv.o, true);

      if (!componentExists(component)) {
        components.push(component);

        print('Component does not exist: creating it', 'warn');

        createBoilerplate(components);
      } else {
        if (optionExists(component)) {
          throw Error('Option already exists for component.');
        } else {
          addOption(component);
        }
      }
    } else {
      // create one or many new components
      if (argv.hasOwnProperty('n')) {
        let component = getParts(argv.n, false);

        components.push(component);
      }

      if (argv.hasOwnProperty('m')) {
        const many = argv.m.split(',');

        many.map(componentName => {
          let component = getParts(componentName, false);

          components.push(component);
        });
      }

      if (components.length === 0) {
        throw Error(
          `No component names submitted \n Use flag -n with a non-spaced string to create a single component \n Use flag -m with comma separated non-spaced string to create multiple components`
        );
      }

      createBoilerplate(components);
    }
  } catch (err) {
    print(err, 'error');
    process.exit(1);
  }
}

clear();
processArgs();
