'use strict';

const { Transformer } = require('@parcel/plugin');
const fs = require('fs');
const { pathToFileURL } = require('url');
const sass = require('sass');

const findUrlPath = (lookup) => {
  const loadPaths = ["./node_modules/", "../node_modules/", "../../node_modules/", "../packages/", "../../packages/", "./"];
  let filepath = lookup.substring(1);
  
  const filePaths = loadPaths
    .map((dir) => {
      return new URL(`${pathToFileURL(dir)}${filepath}`);
    })
    .filter((url) => {
      return fs.existsSync(url);
    })

 return filePaths[0];
}

const sassOpts = {
  "outFile": "./dist/[folder].css",
  "importers": [
    {
      findFileUrl (url) {
        if (!url.startsWith(`~`)) return null;
        return findUrlPath(url);
      }
    }
  ]
};

const setRelativePaths = (source) => {
  const URL_RE = /url\("(\.\/assets\/(?:\w|\/|-|\d)*\.(?:woff|woff2|eot|ttf))"/g;
  const loadPaths = ["../node_modules/@owlui/theme/dist/", "./node_modules/@owlui/theme/dist/", "../../node_modules/@owlui/theme/dist/", "./dist/"];
  
  let code = source.replace(URL_RE, (match, url) => {

    const filePaths = loadPaths
      .map((dir) => {
        return {
          url: new URL(`${pathToFileURL(dir)}${url}`),
          dir
        }
      })
      .filter(({ url }) => {
        return fs.existsSync(url);
      })
    const loadpath = filePaths[0].dir;
    console.log('');
    console.log('loadpath', loadpath);
    return match.replace(url, `${loadpath}${url.substring(2)}`);
  });

  return {
    code,
  };
};

exports.default = new Transformer({
  async transform({ asset }) {
    const { css } = sass.compile(asset.filePath, sassOpts);
    const { code } = setRelativePaths(css);
    
    asset.setCode(code);
    return [asset]
  },
});