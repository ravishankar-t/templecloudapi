var router = require('./index')
var db=require('../db/orgdb')


router.post('/getorgdetails',function(req,res){
    var filterobj= req.body.filter
    db.getorgdetails(filterobj,function(result){
        res.send(result)
    })
   })

   router.get('/getdetails',function(req,res){
   
    res.send('Details served from server')
   })
   module.exports = router