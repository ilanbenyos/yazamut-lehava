
var express = require('express');
var router = express.Router();
import * as controller from './controller'


router.get('/:id', function(req, res, next) {
  // לך תביא לנו את איוונט מספר 3
});

router.post('/saveEvent', async(req, res, next)=>{
  const event = req.body;
  console.log('event',event)
  let newEvent = await controller.saveEvent(event)
  res.send(newEvent);
});


module.exports = router;