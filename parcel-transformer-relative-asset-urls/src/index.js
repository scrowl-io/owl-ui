'use strict';

const { Transformer } = require('@parcel/plugin');

const setRelativePaths = (source, sourceMap) => {
  const URL_RE = /url\s*\("(..)\/assets/g;
  let code = source.replace(URL_RE, (line, pathing) => {
    return `url("./assets`;
  });

  return {
    code,
  };
};

exports.default = new Transformer({
  async transform({ asset }) {
    const source = await asset.getCode();
    const sourceMap = await asset.getMap();
    const { code } = setRelativePaths(source, sourceMap);

    asset.setCode(code);
    return [asset];
  },
});
