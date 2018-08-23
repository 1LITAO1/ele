<template>
  <div id="app">
    <!-- <Top></Top> -->
    <router-view></router-view>
    <But></But>
  </div>
</template>

<script>
import  But from '@/components/common/index/bot.vue'
// import  Top from '@/components/common/index/top.vue'
export default {
  name: 'App',
  components:{
    But,
  },

}
</script>

<style>
#app{
  height: 100%;
}
</style>
