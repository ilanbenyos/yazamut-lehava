<template>
  <div class="all_users container">
    <h1>משתמשים</h1>
      <div class="list-group">
        <button
          v-for="(user,idx) in allUsers" :key="idx"
          type="button"
          class="list-group-item list-group-item-action d-flex flex-row-reverse justify-content-between">
           <div class="ml-2"> {{idx}}</div>
           <div class="ml-2"> {{user.fName}}</div>
           <div class="ml-2"> {{user.lName}}</div>
           <div class="ml-2"> {{user.email}}</div>
          
        </button>

      </div>

    <footer class="mt-4">
      <button @click="getAllUsers()">getAllUsers!!!</button>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'allUsers',
  data(){
    return{
      allUsers:null,
    }
  },
  methods:{
    async getAllUsers(){
      let res = await axios.post('/getAllUsers')
        this.allUsers = res;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
