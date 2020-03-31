import User from '../../dataModels/user';

export async function saveUser(userData) {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  try {
    let newUser;
    if(userData._id){
      newUser = await User.findByIdAndUpdate(userData._id, userData, options);
      console.log('user edited and saved:',newUser);

    }else {
      const preSaved = new User(userData)
      newUser = await preSaved.save();
      console.log('newUser saved:',newUser);

    }
      
    return newUser
  } catch (error) {
    console.error('saveUser', error);
    ctx.body = error;
    ctx.status = 500
  }
}