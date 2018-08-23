<template>
    <div>
        <div class="top"><a href="##"><img src="https://fuss10.elemecdn.com/2/9f/cedf0f9959a7e699f81dba18d0aa6gif.gif"></a></div>
        <div class="parts">
            <div v-for="item in data" :key="item.id">
                    <h3 class="title">{{item.title}}</h3>
                    <p class="subtitle">{{item.subtitle}}</p>
                <img :src="item.image | pathUrl('','','week')" class="img">
            </div>
        </div>
        <div>
            <div class="gifts">限时好礼</div>
            <p class="conversion">金币换好礼</p>
            <div class="product">
                <a href="##" v-for="(item,index) in data2" :key="index">
                    <img :src="item.image | pathUrl('','','week')">
                    <span class="activity">{{item.corner_marker}}</span>
                    <div class="name">{{item.title}}</div>
                    <div class="sale"><span>{{item.gold}}金币</span><del>{{item.dinh}}</del></div>
                </a>
            </div>
        </div>
        <div class="check">查看更多</div>
    </div>
</template>

<script>
import {getfindoneData,getproductData} from '../../../services/filmService.js'
export default {
    data(){
        return {
            data:[],
            data2:[]
        }
    },
    mounted(){
        getfindoneData().then(response=>{
            this.data = response
        })
        getproductData().then(response=>{
            this.data2 = response
        })
    }
}
</script>

<style scoped>
.top img{
   width: 100%
}
.parts{
    position: relative;
    margin-bottom: .28rem;
}
.parts div:nth-child(1){
    height: 3.52rem;
    padding: .586667rem .293333rem .16rem .426667rem;
    border-right: 1px solid #ededed;
    line-height: 1.2;
    width: 42.54%;
    position: relative;
}
.parts div:nth-child(1) h3{
    color: rgb(255, 153, 0);
}
.title{
    font-size: .426667rem;
    margin-bottom: .16rem;
}

.subtitle{
    font-size: .32rem;
    color: #999;
}
.parts div:nth-child(1) img{
    width: 2rem;
    bottom: .16rem;
    right: .293333rem;
}
.parts div:nth-child(2){
    top: 0;
    border-bottom: 1px solid #ededed;
}
.parts div:nth-child(2),.parts div:nth-child(3){
    padding: .586667rem .4rem 0 .4rem;
    position: absolute;
    height: 1.547rem;
    width: 41.74%;
    right: 0;
}
.parts div:nth-child(3){
    top: 2.133rem;
}
.parts div:nth-child(2) img,.parts div:nth-child(3) img{
    top: .586667rem;
    right: .4rem;
}
.img{
    width: 1.2rem;
    position: absolute;
}
.gifts{
    padding-top: .52rem;
    text-align: center;
    font-size: .48rem;
    font-weight: 700;
    color: #333;
    line-height: 1.2
}
.conversion{
    font-size: .293333rem;
    color: #999;
    text-align: center;
    padding-bottom: .213333rem;
    line-height: 1.1
}
.product{
    padding: .32rem 0 .4rem .4rem;
    white-space: nowrap
}
.product a{
    width: 2.96rem;
    margin-right: .16rem;
    position: relative;
    display: inline-block
    
}
.product img{
    width: 2.96rem;
    height: 2.9334rem;
    margin-bottom: .253333rem;
}
.activity {
    position: absolute;
    color: #fff;
    background: #413d3c;
    padding: .013rem;
    top: 0;
    left: 0;
    line-height: 1.1;
}
.activity,del{
    font-size: .293333rem;
}
.name,.sale span,.check{
    font-size: .346667rem;
}
.name{
    color: #333;
    margin-bottom: .133333rem;
}
.sale{
    height: .64rem;
    line-height: .64rem;
    overflow: hidden; 
}
.sale span{
    color:#ff5339;
    margin-right: .093333rem;
}
.sale del,.sale span{
    float: left;
}
.sale del{
    color: #aaa;
}
.check{
    color: #999;
    text-align: center;
    padding: .4rem 0 .48rem;
}
</style>
