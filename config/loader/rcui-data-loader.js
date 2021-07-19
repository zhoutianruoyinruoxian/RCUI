const start = require('../../compile/compile');

let load = false;

module.exports = function rcuiDataLoader(content) {
  if (this.cacheable) {
    this.cacheable();
  }
  if (load === false) {
    load = true;
    // 采用异步，在项目启动阶段保证start只执行一次
    setTimeout(() => {
      start();
      load = false;
    }, 0);
  }
  return '';
};
