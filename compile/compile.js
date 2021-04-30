const fs = require('fs');

const markTwain = require('mark-twain');
const higlight = require('./higlight');
const transformer = require('./transformer');
const _ = require('lodash');


module.exports = function readFiles(path, folder) {
  const mdList = {
    file: [],
    children: [],
  };
  const files = fs.readdirSync(path);
  for (let i = 0; i < files.length; i++) {
    const filePath = path + '/' + files[i];
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() === true) {
      mdList.children.push(readFiles(filePath, files[i]));
    } else if ((/\.md$/.test(files[i]))) {
      mdList.file.push({
        filePath,
        fileName: files[i],
        md: transformMarkdown(filePath, files[i]),
      });
    }
    mdList.folder = folder;
  }
  return mdList;
};

function transformMarkdown(filePath, fileName) {
  const md = markTwain(fs.readFileSync(filePath).toString());
  transformer(md, fileName, filePath);
  higlight(md);
  return md;
}
