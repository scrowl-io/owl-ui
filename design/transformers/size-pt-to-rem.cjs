module.exports = {
  name: 'size/ptTorem',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.category === 'size';
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value / 12).toFixed(2) + 'rem';
  },
};
