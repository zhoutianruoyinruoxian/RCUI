const Prism = require('node-prismjs');
const JsonML = require('jsonml.js/lib/utils.js');
const getCode = require('./getCode');

function callBack(code, node) {
  const language = Prism.languages[JsonML.getAttributes(node).lang] ||
    Prism.languages.autoit;
  JsonML.getAttributes(node).highlighted =
    Prism.highlight(code, language);
};

module.exports = (markdown) => getCode(markdown, callBack);
