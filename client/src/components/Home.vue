<template>
  <div class="home container">
    <h1>פרוייקט להבה!!!</h1>
    <div class="ruth">
      הבית של רות
    </div>

    <div class="alert alert-secondary" role="alert">
     פופו לכי לישון כבר מאוחר
    </div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  methods:{
    
    
  }
}
</script>

<style lang="scss" scoped>
.home{
  h1{
    color:red;
  }
  .ruth{
    color: darkslategrey;
    font-size: 28px;
    border: 15px dashed red;
    padding: 35px;
    margin: 50px;
    width: 45%;
    position: fixed;
    top: 124px;
    left: 23%;
  }
}
</style>
