/* eslint-disable @typescript-eslint/no-var-requires */
const parser = require('postcss-selector-parser');

module.exports = (opts = {}) => {
  const { classNames } = opts;
  const classLookups = Object.keys(classNames);
  const classLookupsLn = classLookups.length;

  const rename = selector => {
    // eslint-disable-next-line no-prototype-builtins
    if (classNames.hasOwnProperty(selector.value)) {
      selector.value = classNames[selector.value];
    }
  };

  const processor = parser(selectors => {
    selectors.walkClasses(rename);
    const renamed = selectors.nodes[0].nodes
      .map(c => (c.type === 'class' ? `.${c.value}` : c.value))
      .join('');

    return renamed;
  });

  const getIndex = selector => {
    let idx = -1;

    for (let i = 0; i < classLookupsLn; i++) {
      if (selector.indexOf(classLookups[i]) !== -1) {
        idx = i;
        return;
      }
    }

    return idx;
  };

  const isRuleValid = rule => {
    return getIndex(rule.selector) !== -1;
  };

  const updateRule = async rule => {
    if (isRuleValid(rule)) {
      const newClassName = await processor.process(rule);

      rule.nodes[0].parent.selector = newClassName;
      console.log('renamed rule', rule.selector);
    }
  };

  return {
    postcssPlugin: '@owlui/postcss-renamer',
    async Rule(rule) {
      updateRule(rule);
    },
    OnceExit(root, { result }) {
      root.walkRules(rule => {
        updateRule(rule);
      });
    },
  };
};

module.exports.postcss = true;
