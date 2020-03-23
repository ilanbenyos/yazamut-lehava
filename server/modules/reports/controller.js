
import Report from '../../dataModels/reports';

export async function getReportById(id) {
  try {
    const report = await Report.findById(id);
    console.log('report edited and saved:',e);
    return report
  } catch (error) {
    console.error('getReportById', error);
    ctx.body = error;
    ctx.status = 500
  }
}

export async function deleteReportById(id) {
  try {
    const report = await Report.findByIdAndRemove(id);
    return report
  } catch (error) {
    console.error('getReportById', error);
    ctx.body = error;
    ctx.status = 500
  }
}

export async function saveReport(reportData) {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  try {
    let newReport;
    reportData.json = JSON.stringify(reportData)
    if(reportData._id){
      newReport = await Report.findByIdAndUpdate(reportData._id, reportData, options);
      console.log('report edited and saved:',newReport);

    }else {
      const preSaved = new Report(reportData)
      newReport = await preSaved.save();
      console.log('newReport saved:',newReport);
    }
      
    return newReport
  } catch (error) {
    console.error('saveReport', error);
    ctx.body = error;
    ctx.status = 500
  }
}