const { Resolver } = require('@parcel/plugin');
const { pathToFileURL } = require('url');

module.exports = new Resolver({
  async resolve({ dependency, options, specifier }) {
    const nodeModuleRegex = /node_modules\//g;
    const themePackageRegex = /@owlui\/theme\//g;
    const isNodeModule = specifier.match(nodeModuleRegex);
    const isThemePackage = specifier.match(themePackageRegex);

    if (
      dependency.specifierType === 'url' &&
      dependency.loc &&
      (isNodeModule || isThemePackage)
    ) {
      const url = isThemePackage
        ? `${specifier.replace('~@owlui', 'packages')}`
        : specifier;
      return {
        filePath: `${pathToFileURL(`${url}`).pathname}`,
      };
    }

    return null;
  },
});
