
import Event from '../../dataModels/event';

export async function saveEvent(eventData) {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  try {
    let newEvent;
    if(eventData._id){
      newEvent = await Event.findByIdAndUpdate(eventData._id, eventData, options);
      console.log('event edited and saved:',newEvent);

    }else {
      const preSaved = new Event(eventData)
      newEvent = await preSaved.save();
      console.log('newEvent saved:',newEvent);

    }
      
    return newEvent
  } catch (error) {
    console.error('saveEvent', error);
    ctx.body = error;
    ctx.status = 500
  }
}