import axios from 'axios'

const totalPlates =100
export async function getAll() {
  console.log('getAllPlates... starting...');

  try {
    const url = `https://data.gov.il/api/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&limit=${totalPlates}`
    let res = await axios.get(url);
    let records= res.data.result.records;
    let firstPlates =  records.slice(0,20);
    firstPlates = firstPlates.map(i=> i['MISPAR RECHEV'])
    console.log('firstPlates:',firstPlates);

    return {firstPlates}
  } catch (error) {
    console.error('getAll', error);
    throw error
  }
};

export async function is_valid(plateNumber) {
  try {

    const url = `https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=${plateNumber}`;
    let res = await axios.get(url);
    let records= res.data.result.records;
    const bool = (records.length > 0)
    console.log('is_valid car number:',plateNumber,bool);

    return bool

  } catch (error) {
    console.error('is_valid', error);
    throw error

  }
}