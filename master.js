
var x,n;
module.exports = {



     get_participant_adamas: function (connection,empName, controllerCallback) {
          var sql = "CALL adamasdb.get_participant_adamas('"+empName+"');";
          x = empName;
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     },

    
     get_participant_mit: function (connection,empName, controllerCallback) {
          var sql = " CALL mitdb.get_participant_mit('"+empName+"');";
          x = empName;
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     },

     get_domain: function (connection, Domain, controllerCallback) {
          var sql = "CALL superadmindb.get_domain('"+Domain+"');";
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     }
}