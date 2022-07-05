import fs from '../utls/file-system.js';

const fileMap = {
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot': {
    dest: 'lib/src/lib/src/theme/assets/icons/MaterialIcons-Regular.eot',
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf': {
    dest: 'lib/src/lib/src/theme/assets/icons/MaterialIcons-Regular.ttf',
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff': {
    dest: 'lib/src/lib/src/theme/assets/icons/MaterialIcons-Regular.woff',
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2': {
    dest: 'lib/src/lib/src/theme/assets/icons/MaterialIcons-Regular.woff2',
  },
  'scripts/pipeline/assets/MaterialIcons-Outlined.woff2': {
    dest: 'lib/src/lib/src/theme/assets/icons/MaterialIcons-Outlined.woff2',
  },
  'node_modules/material-design-icons/iconfont/material-icons.css': {
    dest: 'lib/src/theme/src/global/_font-icons.scss',
    transformer: raw => {
      let outlinedScss = fs.getFile(
        'scripts/pipeline/assets/MaterialIcons-Outlined.scss'
      );
      let contents = raw
        .replace(/url\((\w*(\.|-|\w)*)\)/g, (match, url) => {
          return `url('~@owlui/lib/src/lib/src/theme/assets/icons/${url}')`;
        })
        .replace(/font-size: [\d]*px;/g, () => {
          return '';
        })
        .replace(/.material-icons/g, () => {
          return '.icons';
        });
      const scssImports = `@use './variables.scss' as *;`;

      contents = `${scssImports}\n\n${contents}\n${outlinedScss}`;
      return contents;
    },
  },
};

function copy() {
  for (let file in fileMap) {
    let contents = fs.getFile(file);
    const dest = fileMap[file].dest;

    if (fileMap[file].transformer) {
      contents = fileMap[file].transformer(contents);
      fs.setFile(dest, contents);
    } else {
      fs.copyFile(file, dest);
    }
  }
}

copy();
