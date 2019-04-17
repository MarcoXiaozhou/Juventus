<template>
  <div id="app">
    <div class="app-content">
       <router-view/>
    </div>
   <foot-bar></foot-bar>
  </div>
</template>

<script>
import FootBar from './components/FootBar.vue'

export default {
  name: 'app',
  components: {
    "foot-bar":FootBar
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
  /*margin-top: 60px;*/
}
</style>
