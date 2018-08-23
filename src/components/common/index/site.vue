<template>
    <transition name="silde">
        <div class="top">
        <!-- <router-link :to="path">请选择收货地址<router-link> -->
            <div>请选择收货地址</div>
        </div>
    </transition>
</template>

<script>
export default {
   data(){
       return {
          path:'/home'
       }
   }
}
</script>

<style scoped>
@keyframes sildeIn {
    0%{transform: translateX(100%)}
    100%{transform: translateX(0)}
}
@keyframes sildeOut {
    0%{transform: translateX(0)}
    100%{transform: translateX(-100%)}
}
.silde-enter-active{
    animation: 400ms sildeIn;
}
.silde-leave-active{
    animation: 600ms sildeOut;
}
.top{
    
}
</style>
