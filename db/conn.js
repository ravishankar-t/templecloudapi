

var config = require('config');
var ObjectId = require('mongodb').ObjectId;
var dbname = "varasidhi"
var url ='mongodb+srv://varasidhi:svvdsvd@' + config.get('mongohost') +  '/admin'
url = 'mongodb://varasidhi:vidyardhi@cluster0-shard-00-00-devtv.mongodb.net:27017,cluster0-shard-00-01-devtv.mongodb.net:27017,cluster0-shard-00-02-devtv.mongodb.net:27017/varasidhi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
//console.log(url)
var mongoClient = require('mongodb').MongoClient
    //, Server = require('mongodb').Server;

    
//var mongoClient = new MongoClient(new Server(config.get('mongohost'), config.get('mongoport')));
   

var insert = function (collname, data, callback) {
    // console.log(new Date())
    mongoClient.connect(url,{ useNewUrlParser: true },function (err, conn) {
        // console.log('Inside client')
        if (err) {
            callback({ 'result': 'fail', message: 'Db connection failed' })
        } else {
            var db = conn.db(dbname);

            db.collection(collname).insert(data, function (err, result) {
                if (err) {
                    callback({ 'result': 'fail', message: err.message })

                } else {
                    console.log(result)
                    console.log()
                    /*   db.collection(collname).aggregate([
                          {$match: {"_id":{"$lte":ObjectId(result.insertedIds["0"])}}}
                        , {$group:
                            {_id: '$id', total: {$sum: 1} }
                          }
                      ]).toArray(function(err, docs) {
                    // console.log(docs) */
                    callback({ result: "success" })
                    //  console.log(new Date())
                    conn.close()

                    // });
                }
            }

            )
        }

    })
}

var update = function (collname, data, id, calback) {
    // console.log(new Date())
    mongoClient.connect(url,{ useNewUrlParser: true },function (err, conn) {
        // console.log('Inside client')
        if (err) {
            callback({ 'result': 'fail', message: 'Db connection failed' })
        } else {
            var db = conn.db(dbname);
            db.collection(collname).update({ "_id": ObjectId(id) }, data, function (err, result) {
                if (err) {
                    callback({ 'result': 'fail', message: err.message })
                } else {
                    callback({ result: "success" })
                    //  console.log(new Date())
                    conn.close()
                }
            }
            )
        }

    })
}

var getdata = function (collname, filter, callback) {
     console.log(new Date())
    mongoClient.connect(url,{ useNewUrlParser: true },function (err, conn) {
        if (err) {
            callback({ 'result': 'fail', message: err.message})
        } else {
            var db = conn.db(dbname);
            console.log(collname)
            db.collection(collname).find(filter).toArray(function (err, result) {
                if (err) {
                    callback({ 'result': 'fail', message: err.message })
                } else {
                    callback(result)
                        console.log(new Date())
                    conn.close()
                }
            }

            )
        }
    })
}


var aggregate = function (collname, matchcriteria, groupcriteria, callback) {
    mongoClient.connect(url,{ useNewUrlParser: true },function (err, conn) {
        //  console.log('Inside client')
        if (err) {
            callback({ 'result': 'fail', message: 'Db connection failed' })
        } else {
            //{ "_id": { "$lte": ObjectId(result.insertedIds["0"]) } }

            //{ _id: '$id', total: { $sum: 1 } }
            var db = conn.db(dbname);
            //   console.log(matchcriteria,groupcriteria)
            db.collection(collname).aggregate([
                { $match: matchcriteria },
                { $group: groupcriteria }
            ]).toArray(function (err, docs) {
                // console.log(docs) */
                //   console.log(docs)
                callback(docs)
                //    console.log(new Date())
                conn.close()

            });
        }
    })

}

module.exports = {
    insert: insert,
    update: update,
    getdata: getdata,
    aggregate: aggregate
}