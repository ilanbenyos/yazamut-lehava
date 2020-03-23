
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

export async function saveAppInventorReport(reportData) {
  reportData= parseReportFromAppInventor(reportData);
  let res =await saveReport(reportData);
  return res
}

export async function saveReport(reportData) {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    // reportData = parseReportFromAppInventor(reportData)
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

const parseReportFromAppInventor = (reportData)=>{
  let arr = Object.keys(reportData)[0];
  arr = arr.split(',');
  const o = {}
  arr.forEach(i => {
    let entry = i.split(':')
    const key = entry[0].trim();
    const val = entry[1].trim()
    o[key]= val
  });
  console.warn("reportData after parsing:",o)
  return o;
}