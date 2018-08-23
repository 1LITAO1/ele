<template>
<div class="page" ref="page">
    <!-- <div class="page-wrap"> -->

        <slot/>

    <!-- </div> -->
</div>
</template>

<script>
export default {
    props: {
        onScroll: Function,
        topScroll:Object
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page, {
            //判断外部是否需要监听正在滚动的位置
            probeType: this.onScroll?3:0,
            
        });
       
        this.scroll = scroll;

        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        
        scroll.on('scroll', ()=>{
            let disY = scroll.y-scroll.maxScrollY;
            let disT = scroll.maxScrollY
            this.onScroll(disY,disT);
        })

        this.$center.$on('show-top',(a,b)=>{
            scroll.scrollTo(0,(-a+b),200)
        })
    }
}
</script>

<style scoped>
/* .page{
  width: 100%;
  position: absolute;
  top: 1.173333rem;
  left: 0;
  bottom:1.33333333rem;
  overflow: hidden;
} */