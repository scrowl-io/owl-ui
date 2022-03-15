import fs from '../utls/file-system.js';

const fileMap = {
  'design/dist/styledictionary/scss/variables.scss': {
    dest: 'packages/theme/src/global/_variables.scss',
    transformer: raw => {
      const contents = raw.replace(/;/g, () => {
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