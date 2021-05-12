const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const { isDemo } = require('./utils');

const markTwain = require('mark-twain');
const getContent = require('./article/content');
const getHiglight = require('./demo/higlight');
const getPreview = require('./demo/preview');
const getLanguage = require('./demo/language');

const COMPONENTS = 'components';

module.exports = function start(next, reload) {
  console.log('compiling...');
  const componentPath = path.resolve(__dirname, `../${COMPONENTS}`);
  let componentList;
  try {
    if (reload) {
      componentList = compile(reload.path);
    } else {
      fs.rmdirSync(path.resolve(__dirname, '../_data/demo'), { recursive: true });
      mkdirp.sync(path.resolve(__dirname, '../_data/demo'));
      const markDownList = readFiles(componentPath, COMPONENTS);
      componentList = markDownList.children.filter(({ file }) => file.length > 0);
    }
    next && next(componentList);
    fs.writeFileSync(path.resolve(__dirname, '../_data/markdown.json'), JSON.stringify(componentList));
    console.log('compile success!');
  } catch (e) {
    console.log(e, 88)
  }
};


function readFiles(_path, folder) {
  const mdList = {
    file: [],
    children: [],
  };
  const files = fs.readdirSync(_path);
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i];
    const filePath = path.resolve(__dirname, _path, fileName);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() === true) {
      mdList.children.push(readFiles(filePath, fileName));
    } else if ((/\.md$/.test(fileName))) {
      mdList.file.push({
        filePath,
        fileName,
        md: transformMarkdown(filePath),
      });
    }
    mdList.folder = folder;
  }
  return mdList;
}

function transformMarkdown(filePath) {
  const markdown = {};
  const md = markTwain(fs.readFileSync(filePath).toString());
  const { content } = md;
  // demo和article分开处理
  if (isDemo(filePath)) {
    markdown.previewPath = getPreview(content, filePath);
    markdown.highlighted = getHiglight(content);
    markdown.content = getLanguage(content);
  } else {
    markdown.content = getContent(content);
  }
  markdown.meta = md.meta;
  return markdown;
}

function compile(filePath) {
  const markDownList = require('../_data/markdown.json');
  function find(list) {
    for (let i = 0; i < list.length; i++) {
      const { file, children } = list[i];
      const index = file.findIndex(({ filePath: mdFilePath }) => mdFilePath === filePath)
      if (index > -1) {
        file[index].md = transformMarkdown(filePath);
        return;
      } else {
        find(children);
      }
    }
  }
  find(markDownList);
  return markDownList;
}
