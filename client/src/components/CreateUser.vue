<template>
  <div class="create_user container">
    <h1>צור משתמש</h1>
    



  <div class="form my-4 d-flex flex-column ml-auto" style="width:250px">
    
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="שם פרטי"  v-model="userData.fName">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="שם משפחה"  v-model="userData.lName">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="מייל"  v-model="userData.email">
    </div>
    <div class="input-group mb-3">
      <input type="number" class="form-control" placeholder="גיל" min="0" max="120" v-model="userData.age">
    </div>
    <footer>
      <button @click="saveUser()">saveUser!!!</button>
    </footer>
  </div>
    
    <br>
    {{userData}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'createUser',
  props: {
  },
  data(){
    return{
      userData:{
        fName:'',
        lName:'',
        age:null,
        email:''
      }
    }
  },
  methods:{
    async saveUser(){
      let res = await axios.post('/saveUser',this.userData)
        console.log('userData',res.data);
        this.userData = res;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
