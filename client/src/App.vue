<template>
  <div id="app">
    <header class="d-flex mt-3 mb-4">
      <router-link class="ml-4" :to="{name:'home'}">בית</router-link>
      <router-link  class="ml-4" :to="{name:'createUser'}">צור משתמש</router-link>
      <router-link  class="ml-4" to="/rrrrr">לך לדף 404</router-link>
    </header>
        <router-view />
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
  text-align: right;
}
</style>
