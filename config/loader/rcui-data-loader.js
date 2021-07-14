const fs = require('fs');
const path = require('path');

let count = 1;

module.exports = function rcuiDataLoader(/* content */) {
  if (this.cacheable) {
    this.cacheable();
  }
  count++;
  fs.writeFileSync(path.resolve(__dirname, './aaa.js'), count);
  return '';
};
