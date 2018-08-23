<template>
    <div class="navigation">
        <div class="swiper-container" ref="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="##" v-for="i in a" :key="i.id">
                        <img :src="i.image | pathUrl('45','45')">
                        <p>{{i.name}}</p>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="##" v-for="j in b" :key="j.id">
                        <img :src="j.image | pathUrl('45','45')">
                        <p>{{j.name}}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getfoodentry} from '../../../services/filmService'
export default {
    data(){
        return{
            a:[],
            b:[]
        }
    },
    mounted(){
        getfoodentry().then(res=>{
            for(let i = 0;i < res.length;i ++){
                if(i<10){
                    this.a.push(res[i])
                }else{
                    this.b.push(res[i])
                }
            }
        })
        this.bannerSwiper = new Swiper(this.$refs.banner,{
            loop:true
        })
    },
    updated(){
        this.bannerSwiper.update();
        this.bannerSwiper.reLoop();
        this.bannerSwiper.slideTo(1, 0);
    }
}
</script>

<style scoped>
    .navigation{
        height: 4.72rem;
        background: #fff;
    }
    .swiper-container{
        height: 100%
    }
    .swiper-slide a{
        width: 20%;
        color: #666;
        font-size: .32rem;
        margin-top: .293333rem;
        display: inline-block;
        text-align: center
    }
    .swiper-slide a p{
        margin-top: .133333rem;
    }    
    .swiper-slide a img{
        margin: 0 auto
    }
</style>
