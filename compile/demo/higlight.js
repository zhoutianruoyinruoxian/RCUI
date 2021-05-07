const Prism = require('node-prismjs');
const { getCodeIndex, getCode } = require('../utils');

module.exports = function (node) {
  const pre = getCode(node, 'pre');
  const code = pre[getCodeIndex(pre, 'code')];
  const langIndex = getCodeIndex(pre, 'lang');
  const lang = pre[langIndex].lang;
  const codeString = code[1];
  const language = Prism.languages[lang] || Prism.languages.autoit;
  return {
    code: Prism.highlight(codeString, language),
    lang,
  };
};
