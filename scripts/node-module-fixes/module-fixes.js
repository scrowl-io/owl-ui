import fs from '../utls/file-system.js';

const moduleMap = {
  '@parcel/transformer-sass/lib.js':
    '@parcel/transformer-sass/lib/SassTransformer.js',
  '@parcel/node-resolver-core/lib.js':
    '@parcel/node-resolver-core/lib/NodeResolver.js',
  'parcel-reporter-static-files-copy/index.js':
    'parcel-reporter-static-files-copy/index.js',
};

export const apply = () => {
  for (let fix in moduleMap) {
    const fixPath = fs.join('scripts', 'node-module-fixes', fix);
    const contents = fs.getFile(fixPath);
    const modulePath = fs.join('node_modules', moduleMap[fix]);

    fs.setFile(modulePath, contents);
  }
};

export default {
  apply,
};
