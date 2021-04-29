const fs = require('fs');

const markTwain = require('mark-twain');
const higlight = require('./higlight');
const transformer = require('./transformer');
const toHTML = require('jsonml.js/lib/html.js')
// const toReactElement = require('jsonml-to-react-element');
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
        md: transformMarkdown(filePath),
      });
    }
    mdList.folder = folder;
  }
  return mdList;
};

function transformMarkdown(filePath) {
  const md = markTwain(fs.readFileSync(filePath).toString());
  higlight(md);
  transformer(md);
  // md.html = toHTML(md.content);
  return md;
}
