
import User from '../../dataModels/user';

export async function saveUser(userData) {
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    try {
      let res
      if(userData._id){
         res = await User.findByIdAndUpdate(userData._id, userData, options);
      }else {
        res = new User(userData)
        await res.save();
      }
      console.log('1111',res);
      
    return res
  } catch (error) {
    console.error('saveUser', error);
    ctx.body = error;
    ctx.status = 500
  }
}