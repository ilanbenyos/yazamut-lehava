<template>
  <div class="create_report container">
    <h1>צור ארוע</h1>
    
  <div class="form my-4 d-flex flex-column ml-auto" style="width:250px">
    
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="reporterId"  v-model="reportData.reporterId">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="reporterPhone"  v-model="reportData.reporterPhone">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="firstName"  v-model="reportData.firstName">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="lastName"  v-model="reportData.lastName">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="plateNumber" min="0" max="120" v-model="reportData.plateNumber">
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="reporterEmail" min="0" max="120" v-model="reportData.reporterEmail">
    </div>
    <div class="input-group mb-3">
      <textarea class="form-control" placeholder="comments" min="0" max="120" v-model="reportData.comments"></textarea>
    </div>


    <footer>
      <button @click="saveReport()">שמור אותי!!!</button>
    </footer>
  </div>
    
    <br>
    ==================
    {{reportData}}
    ==============
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'createReport',
  data(){
    return{
      reportData:{
        images:[],
        reporterId: '',
        reporterPhone: '',
        firstName: '',
        lastName: '',
        plateNumber:'',
        reporterEmail: '',
        comments: '',
      }
    }
  },
  methods:{
    async saveReport(){
      let res = await axios.post('/reports/saveReport',this.reportData)
        console.log('reportData',res);
        res.startDate = new Date(res.startDate)
        res.endDate = new Date(res.endDate)
        res.reservationDate = new Date(res.reservationDate)
        this.reportData = res;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
