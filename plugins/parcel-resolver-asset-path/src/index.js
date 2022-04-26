const { Resolver } = require('@parcel/plugin');
const { pathToFileURL } = require('url');

module.exports = new Resolver({
  async resolve({ dependency, options, specifier, logger }) {
    const nodeModuleRegex = /node_modules\//g;

    if (
      dependency.specifierType === 'url' &&
      dependency.loc &&
      specifier.match(nodeModuleRegex)
    ) {
      return {
        filePath: `${pathToFileURL(`${specifier}`).pathname}`,
      };
    }

    return null;
  },
});
