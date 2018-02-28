'use strict';

const express = require('express');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql#123',
  database : 'my_db'
});
 
connection.connect();

// Constants
const PORT = 80;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello kartik world\n');
});

app.listen(PORT);
console.log(`Running on http://:${PORT}`);

 
connection.query('SELECT * from Persons', function (error, results, fields) {
  if (error){
	console.log(error);	
	}
  console.log('The solution is: ', results);
});
 
connection.end();

