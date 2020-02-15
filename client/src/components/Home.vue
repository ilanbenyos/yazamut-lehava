<template>
  <div class="home container">
    <h1>{{ msg }}</h1>
    
    <button @click="send()">send!!!</button>

    <div class="alert alert-primary" role="alert">
        {{msg2}}
    </div>

  <div class="input-group my-4" style="width:250px">

    <input type="text" class="form-control" aria-label="Default" v-model="item">
      <div class="input-group-prepend">
        <button type="button" class="btn btn-primary" @click="checkItem()">בדוק מספר</button>
      </div>
  </div>
  <br>
      <button @click="saveUser()">saveUser!!!</button>
<br>
    <Calendar v-model="date1" />
    date is : {{date1}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  props: {
    msg: String,
    default:'ברוכים הבאים לאתר יזמות אמית 2020'
  },
  data(){
    return{
      msg2:'initial value',
      item:null,
      date1: null,
      userData:{
        fName:'yoyo',
        lName:'ben lulu',
        age:12,
        email:'yoyobenlulu@gmail.com'
      }
    }
  },
  methods:{
    async send(){
      this.$loader(true)
      let res = await axios.get()
      console.log('data',res);
      this.msg2 = res;
      this.$loader(false)

    },
    async checkItem(){
      let res = await axios.get('/is_valid/'+ this.item)
      console.log(res);
      this.msg2 = res.bool
    },
    async saveUser(){
      let res = await axios.post('/saveUser',this.userData)
        console.log('userData',res);
        this.userData = res;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
