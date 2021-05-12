// const start = require('../compile');

// start((aa) => {
//   console.log(aa, 888);
// });

// debugger


process.stdin.resume();
process.stdin.on('data', function (data) {
  process.stdout.write('数据为' + data);
})