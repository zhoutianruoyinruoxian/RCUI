const { getContentIndex } = require('../utils');

function getContent(node) {
  const apiIndex = getContentIndex(node, 'API');
  const baseNode = node.slice(0, 1);
  return {
    article: [...baseNode, ...node.slice(1, apiIndex)],
    api: [...baseNode, ...node.slice(apiIndex)],
  };
}

module.exports = getContent;
