const { Resolver } = require('@parcel/plugin');
const { pathToFileURL } = require('url');

module.exports = new Resolver({
  async resolve({ dependency, options, specifier }) {
    const nodeModuleRegex = /node_modules\//g;
    const themePackageRegex = /@owlui\/lib\//g;
    const isNodeModule = specifier.match(nodeModuleRegex);
    const isLibPackage = specifier.match(themePackageRegex);

    if (
      dependency.specifierType === 'url' &&
      dependency.loc &&
      (isNodeModule || isLibPackage)
    ) {
      const url = isLibPackage
        ? `${specifier.replace('~@owlui', '.')}`
        : specifier;
      return {
        filePath: `${pathToFileURL(`${url}`).pathname}`,
      };
    }

    return null;
  },
});
