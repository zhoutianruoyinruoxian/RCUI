const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());      // 这里千万要注意，要在static静态资源上面

app.use(express.static('build'));

app.listen(80);
