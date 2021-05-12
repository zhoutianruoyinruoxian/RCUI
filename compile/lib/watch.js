const path = require('path');
const chokidar = require('chokidar');
const start = require('../compile');

const watcher = chokidar.watch(path.resolve(__dirname, '../../components/**/*.md'));

start();

watcher
  .on('unlink', path => start())
  .on('change', _path => {
    start(null, { path: _path });
  })
  .on('raw', (event, path, details) => {
    if (event === 'created' &&
      details.type === 'file' &&
      path.match(/\..*$/) &&
      path.match(/\..*$/)[0] === '.md'
    ) {
      start();
    }
  })
  .on('error', error => console.log(`Watcher error: ${error}`));
