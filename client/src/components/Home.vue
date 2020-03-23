<template>
  <div class="home container">
    <h1>The Shmerlings</h1>
    
    <button @click="getAll()">getAll!!!</button>

    <div class="alert alert-primary" role="alert">
        {{msg}}
    </div>

    <div class="input-group my-4" style="width:250px">

      <input type="text" class="form-control" aria-label="Default" v-model="plateNumber">
        <div class="input-group-prepend">
          <button type="button" class="btn btn-primary" @click="checkPlate()">בדוק מספר</button>
        </div>
    </div>
    <br>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data(){
    return{
      plateNumber:null,
      msg:'',
    }
  },
  methods:{
    async getAll(){
      this.$loader(true);
      try{
        let res = await axios.get('/plates/getAll')
        console.log('getAll:res',res);
        this.msg = res;
        this.$toast.add({severity:'success', summary: 'התקבלו נתוני רישוי', detail:'got them', life: 2000});

      }finally{
        this.$loader(false)
      }
    },
    async checkPlate(){
      let res = await axios.get('/plates/is_valid/'+ this.plateNumber)
      console.log(res);
      this.msg = res
    },
    
  }
}
</script>

<style lang="scss" scoped>

</style>
