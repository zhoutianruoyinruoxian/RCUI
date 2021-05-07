const { getContentIndex } = require('../utils');

function getLanguage(node) {
  const zhIndex = getContentIndex(node, 'zh-CN');
  const enIndex = getContentIndex(node, 'en-US');
  let baseNode, zhNode, enNode;
  if (zhIndex < enIndex) {
    baseNode = node.slice(0, zhIndex);
    zhNode = node.slice(zhIndex + 1, enIndex);
    enNode = node.slice(enIndex + 1, -1);
  }
  else {
    baseNode = node.slice(0, enIndex);
    enNode = node.slice(enIndex + 1, zhIndex);
    zhNode = node.slice(zhIndex + 1, -1);
  }
  return {
    'zh-CN': [...baseNode, ...zhNode],
    'en-US': [...baseNode, ...enNode],
  };
}

module.exports = getLanguage;
