var db = require('../db/conn')
var objColl = require('../db/objects')


var getorgdetails = function (filter, callback) {
     console.log('In DB')
 // {name:"kanipakam"}
    db.getdata(objColl.colls.organisations, filter, function (result) {
     console.log(result)
      callback(result)
    })
  }


  module.exports = {
      getorgdetails:getorgdetails
  }