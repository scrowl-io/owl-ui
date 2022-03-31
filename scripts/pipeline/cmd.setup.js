import fs from '../utls/file-system.js';

const defaultUnit = 16;
const fileMap = {
  'design/dist/styledictionary/scss/variables.scss': {
    dest: 'packages/theme/src/global/_variables.scss',
    transformer: raw => {
      const contents = raw
        .replace(
          /(\$(?:[\w]+-)+typeface(?:-[\w]+)+:) (\d+)px;\n/g,
          (line, token, unit) => {
            const size = unit / defaultUnit;

            return `${token} ${size}rem;\n`;
          }
        )
        .replace(/(\$(?:[\w]+-)+spacer:) (\d+)px;/g, (line, token, unit) => {
          const size = unit / defaultUnit;

          return `${token} ${size}rem;\n`;
        })
        .replace(/;/g, () => {
          return ' !default;';
        });

      return contents;
    },
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot': {
    dest: 'packages/theme/src/global/assets/icons/MaterialIcons-Regular.eot',
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf': {
    dest: 'packages/theme/src/global/assets/icons/MaterialIcons-Regular.ttf',
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff': {
    dest: 'packages/theme/src/global/assets/icons/MaterialIcons-Regular.woff',
  },
  'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2': {
    dest: 'packages/theme/src/global/assets/icons/MaterialIcons-Regular.woff2',
  },
  'scripts/pipeline/assets/MaterialIcons-Outlined.woff2': {
    dest: 'packages/theme/src/global/assets/icons/MaterialIcons-Outlined.woff2',
  },
  'node_modules/material-design-icons/iconfont/material-icons.css': {
    dest: 'packages/theme/src/global/_font-icons.scss',
    transformer: raw => {
      let outlinedScss = fs.getFile(
        'scripts/pipeline/assets/MaterialIcons-Outlined.scss'
      );
      let contents = raw
        .replace(/url\((\w*(\.|-|\w)*)\)/g, (match, url) => {
          return `url('./assets/icons/${url}')`;
        })
        .replace(/font-size: [\d]*px;/g, () => {
          return '';
        })
        .replace(/.material-icons/g, () => {
          return '.owlui-icons';
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
