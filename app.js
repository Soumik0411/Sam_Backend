var express = require('express');
var mysql = require('mysql');
var app = express();
var request = require("request");
var cors = require('cors');

// var MySQLStore = require('express-mysql-session')(session);


var masterModel = require("./master");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var options = {
  host: 'localhost',
  user: 'root',
  password: 'Soumik@2000',
  databases: {
    database1: 'superadmindb',
    database2: 'adamasdb',
    database3: 'mitdb',
    },
  insecureAuth: true,
};

var connection = mysql.createConnection(options);
// var sessionStore = new MySQLStore({}/* session store options */, connection);

connection.connect(function (error) {
  if (error) {
    console.log('Error in connection');
    console.log(error);
  }
});


app.post('/get_domain_name/', function (req, resp) {

    master.get_domain(connection, req.body.studentid, function (err, result) {
      //console.log(result);
      if (err) {
        console.log(err);
      }
      else {
        var responseData = {
          //requestUrl: req.originalUrl,
          status: 'success',
          data: result,
        }
        //   console.log(responseData);
        resp.send(responseData);
      }
  
    });
  });

  app.listen(5000, () => console.log('Server started on port 5000'));