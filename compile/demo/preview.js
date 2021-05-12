const path = require('path');
const fs = require('fs');
const transformer = require('../transformer');
const { getCode } = require('../utils');

module.exports = function (content, filePath) {
  // 处理demo文件的js代码
  const pre = getCode(content, 'pre');
  const code = getCode(pre, 'code');
  const codeString = code[1];
  return preview(codeString, filePath);
};

function preview(code, filePath) {
  const fileName = path.basename(filePath).replace(/\..*$/, '.js');
  const fnCode = transformer(code);
  const pathArr = filePath.split(path.sep);
  const comIndex = pathArr.indexOf('components');
  const catalog = path.resolve(__dirname, '../../_data/demo/', pathArr[comIndex + 1]);
  const fileLoc = path.resolve(catalog, fileName);
  if (!fs.existsSync(catalog)) {
    fs.mkdirSync(catalog);
  }
  fs.writeFileSync(fileLoc, `module.exports = ${fnCode}`);
  return [pathArr[comIndex + 1], fileName];
}
