// @flow
const { Transformer } = require('@parcel/plugin');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { EOL } = require('os');
const SourceMap = require('@parcel/source-map').default;
const sass = require('sass');
const { promisify } = require('util');

exports.default = new Transformer({
  async loadConfig({ config, options }) {
    let configFile = await config.getConfig(
      ['.sassrc', '.sassrc.json', '.sassrc.js'],
      {
        packageKey: 'sass',
      }
    );
    console.warn('1.1');
    let configResult = configFile ? configFile.contents : {};
    
    // Resolve relative paths from config file
    if (configFile && configResult.includePaths) {
      console.warn('1.2');
      configResult.includePaths = configResult.includePaths.map(p =>
        path.resolve(path.dirname(configFile.filePath), p)
      );
    }
    console.warn('1.3');
    if (configFile && path.extname(configFile.filePath) === '.js') {
      config.invalidateOnStartup();
      console.warn('1.4');
    }
    console.warn('1.5');
    if (configResult.importer === undefined) {
      console.warn('1.6');
      configResult.importer = [];
    } else if (!Array.isArray(configResult.importer)) {
      console.warn('1.7');
      configResult.importer = [configResult.importer];
    }

    // Always emit sourcemap
    configResult.sourceMap = true;
    // sources are created relative to the directory of outFile
    console.warn('1.8');
    configResult.outFile = path.join(options.projectRoot, 'style.css.map');
    configResult.omitSourceMapUrl = true;
    configResult.sourceMapContents = false;
    console.warn('1.9');
    return configResult;
  },

  async transform({ asset, options, config }) {
    let css;
    console.warn('2.1');
    try {
      let result = sass.compile(asset.filePath, {
        loadPaths: config.includePaths,
      });
      console.warn('2.2');
      css = result.css;

      if (result.map != null) {
        console.warn('2.3');
        let map = new SourceMap(options.projectRoot);
        map.addVLQMap(JSON.parse(result.map));
        asset.setMap(map);
      }
    } catch (err) {
      console.warn('2.4');
      // Adapt the Error object for the reporter.
      err.fileName = err.file;
      err.loc = {
        line: err.line,
        column: err.column,
      };

      throw err;
    }
    console.warn('2.5');
    asset.type = 'css';
    asset.setCode(css);
    console.warn('2.6', css);
    return [asset];
  },
});

const setRelativePaths = source => {
  const URL_RE = /url\("(\.\/assets\/(?:\w|\/|-|\d)*\.(?:woff|woff2|eot|ttf))"/g;
  const loadPaths = [
    './node_modules/@owlui/theme/src/global/',
    '../node_modules/@owlui/theme/src/global/',
    '../../node_modules/@owlui/theme/src/global/',
    './src/global/',
  ];

  let code = source.replace(URL_RE, (match, url) => {
    const filePaths = loadPaths
      .map(dir => ({
        url: new URL(`${pathToFileURL(dir)}${url}`),
        dir,
      }))
      .filter(({ url }) => {
        return fs.existsSync(url);
      });

    const loadpath = filePaths[0].dir;
    return match.replace(url, `${loadpath}${url.substring(2)}`);
  });

  return code;
};
