function getCodeIndex(content, key) {
  return content.findIndex(item => {
    if (Array.isArray(item)) {
      return item[0] === key;
    }
    if (typeof item === 'object') {
      return Object.keys(item).includes(key);
    }
  });
}

const getCode = (content, key) => content.find(item => {
  if (Array.isArray(item)) {
    return item[0] === key;
  }
  if (typeof item === 'object') {
    return Object.keys(item).includes(key);
  }
});


const isDemo = filePath => filePath.includes('demo');

const getContentIndex = (content, lang) => content.findIndex(item => {
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
