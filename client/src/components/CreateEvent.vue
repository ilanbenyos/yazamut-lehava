<template>
  <div class="create_event container">
    <h1>צור ארוע</h1>
    



  <div class="form my-4 d-flex flex-column ml-auto" style="width:250px">
    
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="שם הלקוח"  v-model="eventData.customerName">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="ארגון"  v-model="eventData.organization">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="טלפון"  v-model="eventData.customerPhone">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="אי מייל"  v-model="eventData.customerEmail">
    </div>
    <div class="input-group mb-3">
      <input type="number" class="form-control" placeholder="participents" min="0" max="120" v-model="eventData.participents">
    </div>


    <div class="input-group mb-3">
      <textarea class="form-control" placeholder="comments" min="0" max="120" v-model="eventData.comments"></textarea>
    </div>


    <div class="p-col-12 p-md-4">
        <h3>start</h3>
        <Calendar v-model="eventData.startDate" :showTime="true" />
    </div>

    <div class="p-col-12 p-md-4">
        <h3>end</h3>
        <Calendar v-model="eventData.endDate" :showTime="true" />
    </div>

    <br>
    startDate is : {{eventData.startDate}}

    <!-- <div class="form-group mb-3">
      <select class="form-control" v-model="eventData.gender">
        <option>male</option>
        <option>female</option>
        <option>other</option>

      </select>
    </div> -->


    <footer>
      <button @click="saveEvent()">שמור אותי!!!</button>
    </footer>
  </div>
    
    <br>
    ==================
    {{eventData}}
    ==============
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'createEvent',
  data(){
    return{
      eventData:{
        startDate: null,
        endDate: null,
        rooms: [],//[1,3,5,6]
        participents: 20,//43
        customerName: '',
        customerPhone: "",
        customerEmail: "",
        organization: "",
        email: '',//"yoyo"/"popo"/"momo"
        comments: '',
      }
    }
  },
  methods:{
    async saveEvent(){
      let res = await axios.post('/events/saveEvent',this.eventData)
        console.log('eventData',res);
        res.startDate = new Date(res.startDate)
        res.endDate = new Date(res.endDate)
        res.reservationDate = new Date(res.reservationDate)
        this.eventData = res;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
