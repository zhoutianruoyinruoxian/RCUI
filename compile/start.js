const path = require('path');
const fs = require('fs');
const readMarkDownFiles = require('./compile');

let markDownList = [];

module.exports = function start(next) {
  fs.rmdirSync(path.resolve(__dirname, './_data/'), { recursive: true });
  fs.mkdirSync(path.resolve(__dirname, './_data/'));
  const componentPath = path.resolve(__dirname, '../components');
  markDownList = readMarkDownFiles(componentPath, 'components');
  next && next(markDownList);
  fs.writeFileSync(path.resolve(__dirname, './_data/markdown.json'), JSON.stringify(markDownList))
}
