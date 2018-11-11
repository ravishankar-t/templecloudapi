var router = require('./index')
var db=require('../db/donationsdb')



router.post('/testprint',function(req,res){
   res.send({message:'in test print'})
          
  })

router.post('/savedonation',function(req,res){
  //  console.log('IN API',req.body)
     db.savedonation(req.body,function(result){
       //  console.log(result)
        res.send(result)
     })
        
})
router.post('/savedonationtype',function(req,res){
   db.savedonationtype(req.body,function(result){
       res.send(result)
   })
})
router.post('/getdonationconfig',function(req,res){
    db.getdonationconfig(req.body,function(result){
        res.send(result)
    })
})
router.post('/getdonarsnotificationlist',function(req,res){
    db.getdonarsnotificationlist(req.body,function(result){
        res.send(result)
    })
})
router.post('/gettodayspoojamembers',function(req,res){
    db.gettodayspoojamembers(req.body,function(result){
        res.send(result)
    })
})
router.post('/deactivatedonor',function(req,res){
    db.deactivatedonor(req.body,function(result){
        res.send(result)
    })
})
router.post('/notifydonars',function(req,res){
    db.notifydonars(req.body,function(result){
        res.send(result)
    })
})
router.post('/getdonarsbycategory',function(req,res){
    var obj = req.body
    console.log(obj)
    db.getdonarscategorywise(obj.matchcriteria,obj.groupcriteria,function(result){
        res.send(result)
    })
})

module.exports = router
