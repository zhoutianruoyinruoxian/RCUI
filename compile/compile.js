const path = require('path');
const fs = require('fs');
const renderRoute = require('./route.js');
const renderPage = require('./page.js');

let markDownList = [];

const componentPath = path.resolve(__dirname, '../components');

markDownList = readFiles(componentPath, 'components');
renderRoute(markDownList);
// renderPage(markDownList);
debugger

function readFiles(path, folder) {
  const mdList = {
    file: [],
  };
  const files = fs.readdirSync(path);
  for (let i = 0; i < files.length; i++) {
    const filePath = path + '/' + files[i];
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() === true) {
      mdList.children = readFiles(filePath, files[i]);
    } else if ((/\.md$/.test(files[i]))) {
      mdList.file.push(filePath);
    }
    mdList.folder = folder;
  }
  return mdList;
}
