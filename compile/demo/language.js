const { getContentIndex } = require('../utils');

function getLanguage(content) {
  const zhIndex = getContentIndex(content, 'zh-CN');
  const enIndex = getContentIndex(content, 'en-US');
  let baseNode, zhNode, enNode;
  if (zhIndex < enIndex) {
    baseNode = content.slice(0, zhIndex);
    zhNode = content.slice(zhIndex + 1, enIndex);
    enNode = content.slice(enIndex + 1, -1);
  }
  else {
    baseNode = content.slice(0, enIndex);
    enNode = content.slice(enIndex + 1, zhIndex);
    zhNode = content.slice(zhIndex + 1, -1);
  }
  return {
    'zh-CN': [...baseNode, ...zhNode],
    'en-US': [...baseNode, ...enNode],
  };
}

module.exports = getLanguage;
