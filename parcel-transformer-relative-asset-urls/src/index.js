'use strict';

const { Transformer } = require('@parcel/plugin');

const URL_RE = /url\s*\(/;

exports.default = new Transformer({
  async transform({ asset }) {
    console.warn('\n\nHELLO WORLD\n\n');
    return [asset];
  },
});
