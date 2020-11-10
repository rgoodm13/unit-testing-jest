const express = require('express');
const mysql = require('mysql');
sha1 = require('js-sha1');
const bodyParser = require("body-parser");
const port = process.env.port || 3000;
const app = express();
app.listen(port, () =>{

app.use('/', express.static('public'));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin", "Content-type,Authorization");
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9374537',
    password: 'nrJVyYBjgv',
    database: 'sql9374537'

});


app.post('/api/signup',async (req, res)=> {
    console.log(req.body.username);
    console.log(req.body.password);
    const{username, password} =req.body;
    const pwd = sha1(password);
    var dt = new Date();
    dt.toISOString().split("T")[0];
    console.log(dt);
    connection.connect();
    connection.query('INSERT INTO users VALUES ("",?,?,?)',[username,pwd,dt], function(error, results, fields ) {
       
        if(error) throw error;
        res.json(results);
    });

});

app.get('/api/budget',async (req, res)=> {

    connection.connect();

    connection.query('SELECT * FROM budget', function(error, results, fields ) {
       
        if(error) throw error;
        console.log(results);
        res.json(results);
    });

});

console.log(`server listening on port ${port}`)
});