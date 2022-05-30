const express = require('express');
const path = require('path');
const app = express();

app.listen(8001, function () {
  console.log('listening on 8001')
}); 

// (web.js에 추가)
app.use(express.static(path.join(__dirname, '/doctorclean/out')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/doctorclean/out/index.html'));
});

// // web 페이지 접근허용
app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/doctorclean/out/index.html'));
  });