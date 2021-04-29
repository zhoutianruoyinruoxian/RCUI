const path = require('path');
const fs = require('fs');
const readMarkDownFiles = require('./compile');

let markDownList = [];

module.exports = function start() {
  const componentPath = path.resolve(__dirname, '../components');
  markDownList = readMarkDownFiles(componentPath, 'components');
  fs.writeFileSync(path.resolve(__dirname, './markdown.json'), JSON.stringify(markDownList))
}
