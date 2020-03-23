
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

  // if(typeof(reportData) !=="object"){
    reportData = parseReportFromAppInventor(reportData)
  // }
  
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
  console.warn("reportData 1111111111111",reportData)

  let arr = Object.keys(reportData)[0];
  console.warn("arr 000000000",arr)

  arr = arr.split(',');
  console.warn("arr 11111111111",arr)

  // arr = arr.map(i=> {
  //   return i.substring(0,i.length-1).substring(1)
  // });
  console.warn("arr 2222222222",arr)

    // const o = {
    //   reporterId: arr[0],
    //   reporterPhone: arr[1],
    //   firstName: arr[2],
    //   lastName: arr[3],
    //   plateNumber: arr[4],
    //   reporterEmail: arr[5],
    //   comments: arr[6],
    //   json: JSON.stringify(reportData)
    // }
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