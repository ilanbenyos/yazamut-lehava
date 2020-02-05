<template>
  <div id="app">
    <homePage msg="ברוכים הבאים לאתר יזמות אמית 2020"/>
  </div>
</template>

<script>
import homePage from './components/Home.vue'

export default {
  name: 'app',
  components: {
    homePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
