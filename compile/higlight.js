const Prism = require('node-prismjs');

module.exports = (markdown) => getCode(markdown);

function getCode(markdownData) {
  const node = markdownData.content;
  const preIndex = getNodeIndex(node, 'pre');
  const pre = node[preIndex];
  if (pre && pre.length > 0) {
    const code = pre[getNodeIndex(pre, 'code')];
    const langIndex = getNodeIndex(pre, 'lang');
    const lang = pre[langIndex].lang;
    const codeString = code[1];
    highlight(codeString, markdownData, lang);
    node.splice(preIndex, 1);
  }
  return markdownData;
}

function highlight(code, markdownData, lang) {
  const language = Prism.languages[lang] || Prism.languages.autoit;
  markdownData.highlighted = {
    code: Prism.highlight(code, language),
    lang,
  };
}

function getNodeIndex(node, key) {
  return node.findIndex(item => {
    if (Array.isArray(item)) {
      return item[0] === key;
    }
    if (typeof item === 'object') {
      return Object.keys(item).includes(key);
    }
  });
}
