
var x,n;
module.exports = {



     get_participant_adamas: function (connection,empName, controllerCallback) {
          var sql = " SELECT * from adamasdb.employee_master WHERE empEmail= '" + empName+ "'";
          x = empName;
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     },

    
     get_participant_mit: function (connection,empName, controllerCallback) {
          var sql = " SELECT * from mitdb.employee_master WHERE empEmail= '" + empName+ "'";
          x = empName;
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     },

     get_domain: function (connection, Domain, controllerCallback) {
          var sql = " SELECT orgName FROM superadmindb.organisation_master WHERE superadmindb.organisation_master.OrgUniqId=(SELECT superadmindb.domain_master.orgUniqeId FROM superadmindb.domain_master WHERE superadmindb.domain_master.Domain='"+Domain+"')";
          connection.query(sql, (err, result) => {
               controllerCallback(err, result);
          })
     }
}