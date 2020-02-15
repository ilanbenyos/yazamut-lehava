var express = require('express');
var router = express.Router();
import * as controller from './controller'

let arr = [1,2,3,4,5,6,7,8,]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi From Server!');
});


router.get('/:id', function(req, res, next) {
  let id = req.params.id
  res.send('your Id is:' + id);
});

router.get('/is_valid/:item', function(req, res, next) {
  let item = req.params.item;
  console.log('item',item);
  console.log('arr',arr)

  let itemRes = arr.find(i=>i ==item);
  let bool = !! itemRes;
  res.send({bool, item});
});

router.post('/saveUser', async(req, res, next)=>{
  const user = req.body;
  console.log('user',user)
  let newUser = await controller.saveUser(user)
  res.send(newUser);
});


module.exports = router;
