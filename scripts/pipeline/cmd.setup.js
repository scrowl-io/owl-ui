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
};

function copy() {
  for (let file in fileMap) {
    let contents = fs.getFile(file);
    const dest = fileMap[file].dest;

    if (fileMap[file].transformer) {
      contents = fileMap[file].transformer(contents);
    }

    fs.setFile(dest, contents);
  }
}

copy();
