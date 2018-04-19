const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: arial; font-size: 18px">Site under construction!</p>');
});

app.listen(8080);
