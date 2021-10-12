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
  let importList = [];
  try {
    if (reload) {
      componentList = compile(reload.path);
    } else {
      fs.rmdirSync(path.resolve(__dirname, '../_data/demo'), { recursive: true });
      mkdirp.sync(path.resolve(__dirname, '../_data/demo'));
      const fileData = readFiles(componentPath, COMPONENTS);
      const [markDownList] = fileData;
      importList = fileData[1];
      componentList = markDownList.children.filter(({ file }) => file.length > 0);
    }
    next && next(componentList);
    const contentText = `export default ${JSON.stringify(componentList)};`;
    let content = '';
    if (process.env.NODE_ENV === 'production') {
      content = contentText;
    } else {
      let importText = '';
      importList.forEach((o, i) => {
        importText += o.replace(/.*(?=\/components)/, `import { a${i} } from '..`) + `';`
      });
      content = importText + contentText;
    }
    fs.writeFileSync(path.resolve(__dirname, '../_data/markdown.js'), content);
    console.log('compile success!');
  } catch (e) {
    console.log(e, 'compile Error');
  }
};


function readFiles(_path, folder) {
  const mdList = {
    file: [],
    children: [],
    folder,
  };
  let importList = [];
  const files = fs.readdirSync(_path);
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i];
    const filePath = path.resolve(__dirname, _path, fileName);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() === true) {
      const [child, childImportList] = readFiles(filePath, fileName);
      mdList.children.push(child);
      importList = importList.concat(childImportList);
    } else if ((/\.md$/.test(fileName))) {
      mdList.file.push({
        filePath,
        fileName,
        md: transformMarkdown(filePath),
      });
      importList.push(filePath);
    }
  }
  return [mdList, importList];
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

// todo
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
