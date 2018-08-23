<template>
        <page id="home" :onScroll="handlePageScroll" ref="page">
            <div class="page-wrap">
                <header class="header"> 
                    <div class="location" ref="h">
                        <span class="rou" @click="siteClick()">天安数码时代大夏</span>
                    </div>
                    <div class="seek" ref="height"><form action="get"><input type="text" placeholder="搜索饿了么商家、商家名称"></form></div>
                </header>
                <Navigation></Navigation>
                <Recommend></Recommend>
                <div class="select" ref="t">
                    <span @click="ranking()">综合排序</span>
                    <span>距离最近</span>
                    <span>品质联盟</span>
                    <span @click="iscreen()">筛选</span>
                </div>
                <List></List>
            </div>
            <Header v-if="isShow"></Header>
            <Sort v-if="Show"></Sort>
            <transition name="silde">
                <div class="site" v-if="S">
                <!-- <router-link :to="path">请选择收货地址<router-link> -->
                    <div @click="siteHide()">请选择收货地址</div>
                </div>
            </transition>
        </page>
</template>

<script>
import Header from '@/components/home/index/header.vue'
import Navigation from '@/components/home/index/navigation.vue'
import Recommend from '@/components/home/index/recommend.vue'
import Sort from '@/components/common/index/sort.vue'
import List from '@/components/common/index/list.vue'
export default {
    data(){
        return{
            isShow:false,
            Show:false,
            path:'/site',
            S:false
        }
    },
    components:{
        Header,
        Navigation,
        Recommend,
        Sort,
        List
    },
    methods:{
        handlePageScroll(y,t){
            //搜索框判断
            if((this.$refs.h.offsetHeight + t)+y<=0) {
                this.isShow = true
            }
            if((this.$refs.h.offsetHeight + t)+y >= 0){
                this.isShow = false
            }
            //筛选判断
            if((this.$refs.t.offsetTop + t)+y <= this.$refs.height.offsetHeight){
                this.Show = true
            }
            if((this.$refs.t.offsetTop + t)+y >= this.$refs.height.offsetHeight){
                this.Show = false
            } 
        },
        ranking(){
            this.$center.$emit('show-top',this.$refs.t.offsetTop,this.$refs.height.offsetHeight)
        },
        iscreen(){
            this.ranking()
        },
        siteClick(){
            this.S = true
        },
        siteHide(){
            this.S = false
        }
    }
}
</script>

<style scoped>
.site{
    background: red;
    width: 100%;
    height: 100%;
    position:absolute;
    z-index: 10;
    top: 0;
}
@keyframes sildeIn {
    0%{transform: translateX(100%)}
    100%{transform: translateX(0)}
}
@keyframes sildeOut {
    0%{transform: translateX(0)}
    100%{transform: translateX(100%)}
}
.silde-enter-active{
    animation: 200ms sildeIn;
}
.silde-leave-active{
    animation: 200ms sildeOut;
}
#home{
    overflow-x: hidden;
    height: 100%;
}
.location{
    height:.92rem;
    padding: 2.666667vw 3.733333vw 0;
    color: #fff;
    display: flex;
}
.location .rou{
    margin: 0 1.333333vw;
    font-size: .453333rem;
    width: 60%;
    font-weight: 700;
    color: #fff
}
.location,.seek{
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.seek{
    padding: .2rem .373333rem;
    margin: -.133333vw 0;
}
.seek form{
    width: 100%;
    height: .96rem;
    display: flex;
}
.seek input{
    border: none;
    outline: none;
    width: 100%;
    text-align: center;
    color: #999;
}
.select{
    height: 1.053333rem;
    display: flex;
    justify-content: space-around;
    line-height: 1.04rem;
    border-bottom: 1px solid #ddd;
}
.select span{
    width: 25%;
    font-size: .373333rem;
    text-align: center
}
</style>

