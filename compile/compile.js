const fs = require('fs');
const path = require('path');
const { isDemo } = require('./utils');

const markTwain = require('mark-twain');
const getContent = require('./article/content');
const getHiglight = require('./demo/higlight');
const getPreview = require('./demo/preview');
const getLanguage = require('./demo/language');

module.exports = function readFiles(_path, folder) {
  const mdList = {
    file: [],
    children: [],
  };
  const files = fs.readdirSync(_path);
  for (let i = 0; i < files.length; i++) {
    const filePath = path.resolve(__dirname, _path, files[i]);
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
  const markdown = {};
  const md = markTwain(fs.readFileSync(filePath).toString());
  const { content } = md;
  // 如果有js代码，处理js代码
  if (isDemo(filePath)) {
    markdown.previewPath = getPreview(content, fileName.replace(/\..*$/, '.js'), filePath);
    markdown.highlighted = getHiglight(content);
    markdown.content = getLanguage(content);
  } else {
    markdown.content = getContent(content);
  }
  markdown.meta = md.meta;
  return markdown;
}
