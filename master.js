var x,n;
module.exports = {



     get_database: function (connection,Domain, controllerCallback) {
          var sql = "SELECT cast(AES_DECRYPT(database_name,UNHEX(SHA2('secret',256))) AS CHAR(100)) AS database_name FROM superadmindb.database_master WHERE cast(AES_DECRYPT(Domain,UNHEX(md5('My secret passphrase'))) AS CHAR(100))='"+Domain+"';";
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     },
     
     get_participant: function (connection,empName,database, controllerCallback) {
          var sql = "CALL "+database+".get_participant('"+empName+"');";
          x = empName;
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     },

    
     // get_participant_mit: function (connection,empName, controllerCallback) {
     //      var sql = " CALL mitdb.get_participant_mit('"+empName+"');";
     //      x = empName;
     //      connection.query(sql, (err, result) => {
     //           controllerCallback(err, result);
     //      })
     // },

     get_domain: function (connection, Domain, controllerCallback) {
          var sql = "CALL superadmindb.get_domain('"+Domain+"');";
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     }
}