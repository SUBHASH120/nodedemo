var mysql      = require('mysql');
connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodedemo'
});

module.exports = connection

 
// connection.connect(function(err) {
//      if (err) throw err;
//      console.log('connected');
//      var sql = "INSERT INTO users (firstname, lastname, email, password, mobile, address) VALUES ('subhash', 'kesarwani', 'subhash@gmail.com', 123456, 9877777768, 'Highway 37')";
//      connection.query(sql,function(err,result){
//          if (err) throw err
//         console.log('1 row inserted',result);
//      })

// });

