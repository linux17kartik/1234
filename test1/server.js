'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello kartik\n');
});

app.listen(PORT);
console.log(`Running on http://${PORT}`);
