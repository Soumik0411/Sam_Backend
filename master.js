
var x;
module.exports = {

get_domain: function(connection,id, controllerCallback) {    
     var sql = " SELECT distinct(superadmindb.organisation_master.orgName),"
     "adamasdb.employee_master.empName"
"FROM superadmindb.organisation_master,"
    "adamasdb.employee_master,"
    "superadmindb.domain_master"
"WHERE superadmindb.organisation_master.orgUniqId=(SELECT DISTINCT(superadmindb.domain_master.orgUniqeId)FROM superadmindb.domain_master LIMIT 1)";
     connection.query(sql, (err, result) => {    
     controllerCallback(err, result);      
     })    
   }
}