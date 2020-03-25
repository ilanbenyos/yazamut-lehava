<template>
  <div class="home container">
    <h1>The Shmerlings</h1>
    
    <button @click="getAll()">getAll!!!</button>

    <div class="alert alert-primary" role="alert">example plates: {{examplePlates}}</div>
    <br>
    <div class="alert" :class="isValid? 'alert-primary': 'alert-danger'" role="alert">is valid: {{isValid}}</div>

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
      examplePlates:'',
      isValid:'',
    }
  },
  methods:{
    async getAll(){
      this.$loader(true);
      try{
        let {firstPlates:examplePlates} = await axios.get('/plates/getAll')
        console.log('getAll:res',examplePlates);
        this.examplePlates = examplePlates;
        this.$toast.add({severity:'success', summary: 'התקבלו נתוני רישוי', detail:'got them', life: 2000});

      }finally{
        this.$loader(false)
      }
    },
    async checkPlate(){
      let isValid = await axios.get('/plates/is_valid/'+ this.plateNumber)
      console.log(isValid);
      this.isValid = isValid
    },
    
  }
}
</script>

<style lang="scss" scoped>

</style>
