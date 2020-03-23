
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
  console.warn("reportData1111111111111",reportData)
  let o =this.parseReportFromAppInventor(reportData)
  
  try {
    let newReport;
    reportData.json = JSON.stringify(o)
    if(reportData._id){
      newReport = await Report.findByIdAndUpdate(reportData._id, reportData, options);
      console.log('report edited and saved:',newReport);

    }else {
      const preSaved = new Report(o)
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
  arr = arr.substring(0,arr.length-2).substring(1).split(', ');
  arr = arr.map(i=> {
    return i.substring(0,i.length-1).substring(1)
  });

    const o = {
      reporterId: arr[1],
      reporterPhone: arr[2],
      firstName: arr[3],
      lastName: arr[4],
      plateNumber: arr[5],
      reporterEmail: arr[6],
      comments: arr[7],
      json: JSON.stringify(reportData)
    }

    console.warn("reportData after parsing:",o)
    return o;
}