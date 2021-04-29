const JsonML = require('jsonml.js/lib/utils.js');

module.exports = (markdownData, fn) => {
  inner(markdownData.content, fn);
  return markdownData;
};

function getCodeInner(node) {
  return JsonML.getChildren(JsonML.getChildren(node)[0] || '')[0] || '';
}

function inner(node, fn) {
  if (!JsonML.isElement(node)) return;

  if (JsonML.getTagName(node) !== 'pre') {
    JsonML.getChildren(node).forEach(item => inner(item, fn));
    return;
  }
  fn(getCodeInner(node), node);
}
