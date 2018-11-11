
var db = require('../db/conn')
var objColl = require('../db/objects')

var savedonation = function (data, callback) {
  // console.log('In DB', data)

  db.insert(objColl.colls.donations, data, function (result) {
    callback(result)
  })
}

var savedonationtype = function (data, callback) {
  db.insert(objColl.colls.donationtype, data, function (result) {
    callback(result)
  })
}

var getdonarsnotificationlist = function (filter, callback) {
  console.log("In List")
  db.getdata(objColl.colls.donations, { "id": 0 }, function (result) {
    console.log("In List Db")
    callback(result)
  })
}

var getdonationconfig = function () {

}
var gettodaysperformancelist = function () {

}

var deactivatedonor = function () {

}

var notifydonars = function () {

}

var getdonarscategorywise = function (matchcriteria,groupcriteria, callback) {

  //{ "_id": { "$lte": ObjectId(result.insertedIds["0"]) } }

  //{ _id: '$id', total: { $sum: 1 } }
  //{ _id: '$donationdate', count: { $sum: 1 } , total:{$sum:"$amount"}
  db.aggregate(objColl.colls.donations, matchcriteria,groupcriteria, function (result) {
    console.log('In donar list')
    callback(result)
    })
}
module.exports = {
  savedonation: savedonation,
  savedonationtype: savedonationtype,
  getdonationconfig: getdonationconfig,
  getdonarsnotificationlist: getdonarsnotificationlist,
  gettodaysperformancelist: gettodaysperformancelist,
  deactivatedonor: deactivatedonor,
  notifydonars: notifydonars,
  getdonarscategorywise:getdonarscategorywise

};
