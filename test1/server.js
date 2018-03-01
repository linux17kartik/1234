const express = require('express');

// Constants
const PORT = 90;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello kartik world\n');
});

app.listen(PORT);
console.log(`Running on http://:${PORT}`);

