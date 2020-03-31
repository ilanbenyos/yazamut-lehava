<template>
    <div class="overlay_manager mt-5">
        <transition name="fade">
          <div class="loader flex_center" v-if="isLoader">
            <div class="spinner-grow text-info" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </transition>
        <Toast position="topright" />

    </div>
</template>

<script>
import Vue from "vue";

  export default {
    name: "overlayManager",
    data() {
      return {
        Vue,
      };
    },
    async beforeMount() {
      this.Vue.prototype.$loader = this.setLoader;
    },
    computed:{
      isLoader(){
        return this.$store.getters['isLoader']
      }
    },
    methods: {
      setLoader(bool) {
        return this.$store.commit("setLoader", bool);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .overlay_manager{
    .loader{
      background-color: black;
      width: 100vw;
      height: 100vh;
      top: 0;
      position: fixed;
      z-index: 10;
    }
  }
  .fade-enter-active, .fade-leave-active {
    opacity: 0;
    transition: opacity .3s;


  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: .5;
    transition: opacity .3s;

  }
</style>