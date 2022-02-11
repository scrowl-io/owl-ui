exports.toCamelCase = str => {
  let replacedStr = str.replace(/[-_]+(.)?/g, (_, letter) => {
    return letter ? letter.toUpperCase() : '';
  });

  return replacedStr.substr(0, 1).toLowerCase() + replacedStr.substr(1);
};

exports.prettyJson = obj => {
  return JSON.stringify(obj, null, 4);
};

exports.toLower = str => {
  return str.trim().toLowerCase();
};

exports.toCapitalize = str => {
  return str.replace(/^[A-Z|a-z]/g, letter => letter.toUpperCase());
};

exports.hasLettersOnly = str => {
  return /^[a-zA-Z]+$/.test(str);
};

exports.isValidComponentInputName = str => {
  return /^([a-zA-Z]+(-|_)*)+/g.test(str);
};

exports.isValidPackageName = str => {
  const maxLn = 214;
  const scope = '@owlui/';
  const scopedMaxLn = maxLn - scope.length
  const ln = str.length;
  const valid = ln <= scopedMaxLn;
  const remain = scopedMaxLn - ln;
  const over = remain * -1;

  return {
    valid,
    maxLn: scopedMaxLn,
    ln,
    remain,
    over
  };
};