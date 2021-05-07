const path = require('path');
const fs = require('fs');
const transformer = require('../transformer');
const { getCode } = require('../utils');

module.exports = function (node, fileName, filePath) {
  // 处理demo文件的js代码
  const pre = getCode(node, 'pre');
  const code = getCode(pre, 'code');
  const codeString = code[1];
  return preview(codeString, fileName, filePath);
};

function preview(code, fileName, filePath) {
  const fnCode = transformer(code);
  const pathArr = filePath.split(path.sep);
  const comIndex = pathArr.indexOf('components');
  const catalog = path.resolve(__dirname, '../../_data/', pathArr[comIndex + 1]);
  const fileLoc = path.resolve(catalog, fileName);
  if (!fs.existsSync(catalog)) {
    fs.mkdirSync(catalog);
  }
  fs.writeFileSync(fileLoc, `module.exports = ${fnCode}`);
  return [pathArr[comIndex + 1], fileName];
}
