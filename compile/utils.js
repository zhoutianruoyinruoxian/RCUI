function getCodeIndex(node, key) {
  return node.findIndex(item => {
    if (Array.isArray(item)) {
      return item[0] === key;
    }
    if (typeof item === 'object') {
      return Object.keys(item).includes(key);
    }
  });
}

const getCode = (node, key) => node.find(item => {
  if (Array.isArray(item)) {
    return item[0] === key;
  }
  if (typeof item === 'object') {
    return Object.keys(item).includes(key);
  }
});


const isDemo = filePath => filePath.includes('demo');

const getContentIndex = (node, lang) => node.findIndex(item => {
  if (Array.isArray(item)) {
    return item[1] === lang;
  }
});

module.exports = {
  getCodeIndex,
  getCode,
  isDemo,
  getContentIndex,
};
