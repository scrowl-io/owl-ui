/* eslint-disable @typescript-eslint/no-var-requires */
const { Reporter } = require('@parcel/plugin');
const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs-extra');

const log = logger => {
  return function () {
    const msg = Array.from(arguments).join('');

    logger.log({
      message: msg,
    });
  };
};

const optimizeCss = (filePath, logger) => {
  const media = 'utf8';

  logger('optimizing', filePath);
  fs.readFile(filePath, media).then(file => {
    postcss([cssnano])
      .process(file, {
        from: filePath,
        to: filePath,
      })
      .then(result => {
        fs.outputFileSync(filePath, result.css);

        if (result.map) {
          fs.outputFileSync(`${filePath}.map`, result.map.toString());
        }
        logger('optimizing done');
      });
  });
};

module.exports = new Reporter({
  report({ event, logger }) {
    const printer = log(logger);

    if (event.type === 'buildSuccess') {
      let bundles = event.bundleGraph.getBundles();

      bundles.forEach(bundle => {
        switch (bundle.type) {
          case 'css':
            optimizeCss(bundle.filePath, printer);
            break;
        }
      });
    }
  },
});
