<template>
  <div class="footBar">
      <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/image/index.svg">
        首页
      </mt-tab-item>
      <mt-tab-item id="video">
        <img slot="icon" src="../assets/image/video.svg">
        视频
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="../assets/image/find.svg">
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../assets/image/my.svg">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FootBar',
  // props: {
  //   msg: String
  // }
  data(){
    return {
      selected: ''
    }
  },
   watch: {
      selected: function (val, oldVal) {
        console.log(val)
         switch(val){
              case 'home':
                  this.$router.push('/home');
              break;
              case 'video':
                  this.$router.push('/video');
              break;
              case 'find':
                  this.$router.push('/find');
              break;
              case 'my':
                  this.$router.push('/my');
              break;
          }

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
