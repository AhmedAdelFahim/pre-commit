'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4004;
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`App Running on http://localhost:${PORT}`);
});
