const JsonML = require('jsonml.js/lib/utils.js');

module.exports = (markdownData, fn, loc) => {
  inner(markdownData.content, fn, loc);
  return markdownData;
};

function getCodeInner(node) {
  return JsonML.getChildren(JsonML.getChildren(node)[0] || '')[0] || '';
}

function inner(node, fn, loc) {
  if (!JsonML.isElement(node)) return;

  if (JsonML.getTagName(node) !== 'pre') {
    JsonML.getChildren(node).forEach(item => inner(item, fn, loc));
    return;
  }
  fn(getCodeInner(node), loc);
}
