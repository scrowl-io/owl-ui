'use strict';
const { Reporter } = require('@parcel/plugin');
const { loadConfig } = require('@parcel/utils');

const fs = require('fs');
const path = require('path');

const PACKAGE_JSON_SECTION = 'staticFiles';

const getSettings = (asset, rootPackagePath) => {
  return loadConfig(
    asset.fs,
    asset.filePath,
    ['package.json'],
    rootPackagePath,
    { parser: (...args) => JSON.parse(...args) }
  );
};

const buildTargets = (bundles, rootPackagePath) => {
  return new Promise(async (resolve, reject) => {
    const targets = [];
    let asset = {};
    let settings = {};

    for (let i = 0, ii = bundles.length; i < ii; i++) {
      try {
        asset = bundles[i].getMainEntry();
        settings = await getSettings(asset, rootPackagePath);

        targets.push({
          distDir: bundles[i].target.distDir,
          config: settings.config,
        });
      } catch (err) {
        reject(err);
        return;
      }
    }

    resolve(targets);
  });
};

const getTargetPathing = targets => {
  return targets.map(target => {
    const staticFiles = target.config[PACKAGE_JSON_SECTION]
      ? target.config[PACKAGE_JSON_SECTION]
      : { staticPath: 'static', staticOutPath: 'static' };

    return {
      staticPath: path.join(target.config.pkgdir, staticFiles.staticPath),
      staticOut: path.join(target.distDir, staticFiles.staticOutPath),
    };
  });
};

const getUnqiuePathing = pathing => {
  const uniques = {};
  const list = [];

  function setUnqiues(paths) {
    uniques[paths.staticOut] = paths.staticPath;
  }

  pathing.forEach(setUnqiues);

  for (let dist in uniques) {
    list.push({
      source: uniques[dist],
      dist: dist,
    });
  }

  return list;
};

const staticCopyPlugin = new Reporter({
  async report({ event, options }) {
    if (event.type === 'buildSuccess') {
      const rootPath = path.join(options.projectRoot, 'package.json');
      // Get all dist dir from targets, we'll copy static files into them
      const targets = await buildTargets(
        event.bundleGraph.getBundles(),
        rootPath
      );
      const pathing = getTargetPathing(targets);
      const configs = getUnqiuePathing(pathing);

      copyDir(configs);
    }
  },
});

const copyDir = configs => {
  const _copy = config => {
    const copyFrom = config.source;
    const copyTo = config.dist;

    if (!fs.existsSync(copyTo)) {
      fs.mkdirSync(copyTo, { recursive: true });
    }

    const move = (filepath, relative, filename) => {
      const dest = path.join(copyTo, relative);
      if (!filename) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
      } else {
        fs.copyFileSync(filepath, dest);
      }
    };

    recurseSync(copyFrom, move);
  };

  configs.forEach(_copy);
};

/**
 * Recurse into directory and execute callback function for each file and folder.
 *
 * Based on https://github.com/douzi8/file-system/blob/master/file-system.js#L254
 *
 * @param dirpath directory to start from
 * @param callback function to be run on every file/directory
 */
const recurseSync = (dirpath, callback) => {
  const rootpath = dirpath;

  function recurse(dirpath) {
    fs.readdirSync(dirpath).forEach(function (filename) {
      const filepath = path.join(dirpath, filename);
      const stats = fs.statSync(filepath);
      const relative = path.relative(rootpath, filepath);

      if (stats.isDirectory()) {
        callback(filepath, relative);
        recurse(filepath);
      } else {
        callback(filepath, relative, filename);
      }
    });
  }

  recurse(dirpath);
};

exports.default = staticCopyPlugin;
