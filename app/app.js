const express = require('express')
const app = express()
const mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : '1234',
  database : 'test'
});

connection.connect();

app.get('/', function (req, res) {

  connection.query('SELECT * FROM Persons', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    
    console.log('Visiteur ip addr : ' + req.ip);
    res.send('Hello '+ results[0].LastName +' World!')
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})