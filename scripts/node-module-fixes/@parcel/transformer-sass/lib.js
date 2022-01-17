"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function debug(log) {
    throw Error(JSON.stringify(log))
}

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _fs() {
    const data = _interopRequireDefault(require("fs-extra"));
  
    _fs = function () {
      return data;
    };
  
    return data;
  }

function _os() {
  const data = require("os");

  _os = function () {
    return data;
  };

  return data;
}

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
    return data;
  };

  return data;
}

function _sass() {
  const data = _interopRequireDefault(require("sass"));

  _sass = function () {
    return data;
  };

  return data;
}

function _util() {
  const data = require("util");

  _util = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// E.g: ~library/file.sass
const NODE_MODULE_ALIAS_RE = /^~[^/\\]/;

var _default = new (_plugin().Transformer)({
  async loadConfig({
    config,
    options
  }) {
    let configFile = await config.getConfig(['.sassrc', '.sassrc.json', '.sassrc.js'], {
      packageKey: 'sass'
    });

    // FIX START
    // the sass property may point to a source sass file and not be a config object
    if (configFile
        && configFile.contents
        && typeof configFile.contents === 'string'
    ) {
        configFile = await config.getConfig(['.sassrc', '.sassrc.json', '.sassrc.js'])
    }
    // FIX END
    
    let configResult = configFile ? configFile.contents : {}; // Resolve relative paths from config file

    if (configFile && configResult.includePaths) {
      configResult.includePaths = configResult.includePaths.map(p => _path().default.resolve(_path().default.dirname(configFile.filePath), p));
    }

    if (configFile && _path().default.extname(configFile.filePath) === '.js') {
      config.invalidateOnStartup();
    }

    if (configResult.importer === undefined) {
      configResult.importer = [];
    } else if (!Array.isArray(configResult.importer)) {
      configResult.importer = [configResult.importer];
    } // Always emit sourcemap


    configResult.sourceMap = true; // sources are created relative to the directory of outFile

    configResult.outFile = _path().default.join(options.projectRoot, 'style.css.map');
    configResult.omitSourceMapUrl = true;
    configResult.sourceMapContents = false;
    return configResult;
  },

  async transform({
    asset,
    options,
    config,
    resolve
  }) {
    let rawConfig = config !== null && config !== void 0 ? config : {};
    let sassRender = (0, _util().promisify)(_sass().default.render.bind(_sass().default));
    let css;

    try {
      let code = await asset.getCode();
      let result = await sassRender({ ...rawConfig,
        file: asset.filePath,
        data: rawConfig.data ? rawConfig.data + _os().EOL + code : code,
        importer: [...rawConfig.importer, resolvePathImporter({
          asset,
          resolve,
          includePaths: rawConfig.includePaths,
          options
        })],
        indentedSyntax: typeof rawConfig.indentedSyntax === 'boolean' ? rawConfig.indentedSyntax : asset.type === 'sass'
      });
      css = result.css;

      for (let included of result.stats.includedFiles) {
        if (included !== asset.filePath) {
          asset.invalidateOnFileChange(included);
        }
      }

      if (result.map != null) {
        let map = new (_sourceMap().default)(options.projectRoot);
        map.addVLQMap(JSON.parse(result.map));
        asset.setMap(map);
      }
    } catch (err) {
      // Adapt the Error object for the reporter.
      err.fileName = err.file;
      err.loc = {
        line: err.line,
        column: err.column
      };
      throw err;
    }

    asset.type = 'css';
    asset.setCode(css);
    return [asset];
  }

});

exports.default = _default;

function resolvePathImporter({
  asset,
  resolve,
  includePaths,
  options
}) {
  // This is a reimplementation of the Sass resolution algorithm that uses Parcel's
  // FS and tracks all tried files so they are watched for creation.
  async function resolvePath(url, prev) {
    /*
      Imports are resolved by trying, in order:
        * Loading a file relative to the file in which the `@import` appeared.
        * Each custom importer.
        * Loading a file relative to the current working directory (This rule doesn't really make sense for Parcel).
        * Each load path in `includePaths`
        * Each load path specified in the `SASS_PATH` environment variable, which should be semicolon-separated on Windows and colon-separated elsewhere.
       See: https://sass-lang.com/documentation/js-api#importer
      See also: https://github.com/sass/dart-sass/blob/006e6aa62f2417b5267ad5cdb5ba050226fab511/lib/src/importer/node/implementation.dart
    */
    let paths = [_path().default.dirname(prev)];

    if (includePaths) {
      paths.push(...includePaths);
    }

    asset.invalidateOnEnvChange('SASS_PATH');

    if (options.env.SASS_PATH) {
      paths.push(...options.env.SASS_PATH.split(process.platform === 'win32' ? ';' : ':').map(p => _path().default.resolve(options.projectRoot, p)));
    }

    const urls = [url];
    const urlFileName = _path().default.basename(url);

    if (urlFileName[0] !== '_') {
        urls.push(_path().default.join(_path().default.dirname(url), `_${urlFileName}`));
    }
    
    if (url[0] !== '~') {
        const resolutionErrs = []
        
        for (let p of paths) {
            for (let u of urls) {
                const filePath = _path().default.resolve(p, u);
                
                try {
                    const contents = await asset.fs.readFile(filePath, 'utf8');
                    
                    return {
                        filePath,
                        contents
                    };
                } catch (err) {
                    // FIX
                    // If the file cannot be found, try another resolution method
                    resolutionErrs.push(err.message)
                    continue
                }
            }
        }
    }
    
    // FIX START
    /*
     * Problem:
     *      YARN workspace packages do not resolve correctly
     * Solution:
     *      1. Check to see if the file to be imported is pointing to a module. E.I @example/package
     *      2. Locate the module package file and check to see if it has a style source as defined by the property 'sass' or 'style'
     *      3. Resolve the path and contents of the import
     * Additional Info:
     *      .sassrc.json will need to include the parent directory with "includedPaths"
     *      
     *      {
     *          "includePaths": [
     *              "node_modules/",
     *              "../"
     *          ]
     *      }
     */
    if (url[0] === '@' && !_path().default.extname(url[0])) {
        const resolutionErrs = []

        for (let p of paths) {
            for (let u of urls) {
                const fileDir = u.split('/').pop()
                const configPath = _path().default.resolve(p, fileDir, 'package.json')
                
                try {
                    const pkgFile = await asset.fs.readFile(configPath, 'utf8')
                    const pkgConfig = JSON.parse(pkgFile)
                    const filePath = pkgConfig.hasOwnProperty('sass') ? 
                        _path().default.resolve(p, fileDir, pkgConfig.sass) :
                        (
                            pkgConfig.hasOwnProperty('style') ?
                                _path().default.resolve(p, fileDir, pkgConfig.style) :
                                null
                        )
                    const contents = await asset.fs.readFile(filePath, 'utf8')
                    
                    return {
                        filePath,
                        contents
                    }
                } catch (err) {
                    resolutionErrs.push(err.message)
                    continue
                }
            }
        }
    }
    // FIX END

    // If none of the default sass rules apply, try Parcel's resolver.
    for (let u of urls) {
        
      if (NODE_MODULE_ALIAS_RE.test(u)) {
        u = u.slice(1);
      }

      try {
         
        const filePath = await resolve(prev, u);
        

        if (filePath) {
          const contents = await asset.fs.readFile(filePath, 'utf8');
          return {
            filePath,
            contents
          };
        }
      } catch (err) {
        continue;
      }
    }

    // FIX
    // Produce an error if no resolution method was successful
    asset.invalidateOnFileCreate({url});
  }

  return function (rawUrl, prev, done) {
    const url = rawUrl.replace(/^file:\/\//, '');
    
    resolvePath(url, prev).then(resolved => {
      if (resolved) {
        done({
          file: resolved.filePath,
          contents: resolved.contents
        });
      } else {
        done();
      }
    }).catch(done);
  };
}