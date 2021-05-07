const path = require('path');
const fs = require('fs');
const readMarkDownFiles = require('./compile');

module.exports = function start(next) {
  fs.rmdirSync(path.resolve(__dirname, '../_data/'), { recursive: true });
  fs.mkdirSync(path.resolve(__dirname, '../_data/'));
  const componentPath = path.resolve(__dirname, '../components');
  const markDownList = readMarkDownFiles(componentPath, 'components');
  const componentList = markDownList.children.filter(({ file }) => file.length > 0);
  next && next(componentList);
  fs.writeFileSync(path.resolve(__dirname, '../_data/markdown.json'), JSON.stringify(componentList));
};
