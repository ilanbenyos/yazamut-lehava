import axios from 'axios'

const totalPlates =1000 *1000
let allPlates = [];
export async function getAll() {
  try {
    const url = `https://data.gov.il/api/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&limit=${totalPlates}`
    let res = await axios.get(url);
    let records= res.data.result.records;
    const first100 =  records.slice(0,100)
    console.log('first 100:',first100);

    console.log('total:records.length:', records.length);
    allPlates = records
    return {total:records.length}
  } catch (error) {
    console.error('getAll', error);
    throw error
  }
};

export async function is_valid(plateNumber) {
  try {
    let obj = allPlates.find(i=> i['MISPAR RECHEV'] == plateNumber );
    return !!obj
  } catch (error) {
    console.error('is_valid', error);
    throw error

  }
}