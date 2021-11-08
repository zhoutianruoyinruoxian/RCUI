const path = require('path');

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

// 将不同操作系统下的路径标识符（通过path.sep获取；window系统为'\',mac为'/'）统一转换成'/'。
// 处理'\'字符非常麻烦，所以转换为'/'。
const getCommonPath = filePath => filePath.split(path.sep).join('/');

module.exports = {
  getCodeIndex,
  getCode,
  isDemo,
  getContentIndex,
  getCommonPath,
};
