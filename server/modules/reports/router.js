var express = require('express');
var router = express.Router();
import * as controller from './controller'

router.get('/:id', async (req, res, next) =>{
  let id = req.params.id
  res.send('your Id is:' + id);
});



router.delete('/:id', async (req, res, next)=> {
  let id = req.params.id;
  await controller.deleteReportById(id)
  res.send();
});

router.get('/:id', async (req, res, next)=> {
  let id = req.params.id;
  let report = await controller.getReportById(id)
  res.send(report);
});
router.post('/saveReport', async(req, res, next)=>{
  const report = req.body;
  console.log('report',report)
  let newReport = await controller.saveReport(report)
  res.send(newReport);
});


module.exports = router;
