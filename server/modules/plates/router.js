const express = require('express');
const router = express.Router();
import * as controller from './controller';


router.get('/getAll', async (req, res, next)=> {
  let res1 = await controller.getAll()
  res.send(res1);
});

router.get('/is_valid/:plateNumber', async (req, res, next)=> {
  let plateNumber = req.params.plateNumber;
  let plate = await controller.is_valid(plateNumber)
  res.send(plate);
});



module.exports = router;
