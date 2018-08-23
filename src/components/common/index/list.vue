<template>
    <div>
        <router-link class="list" :to="path" v-for="(item,index) in listData" :key="index">
            <div class="list-t">
                <img :src="item.image | pathUrl('65','65')">
                <div class="list-name">
                    <h3>{{item.name}}</h3>
                    <div class="sales">
                        <span>{{item.rating}}</span><span>月销售{{item.number}}单</span>
                    </div>
                    <div class="fee-time">
                        <p><span>￥{{item.send}}起送</span><span class="fee">配送费￥{{item.fee}}</span></p>
                        <p><span>{{item.distance | distance}}</span><span class="fee">{{item.time}}分钟</span></p>
                    </div>
                </div>
            </div>
            <div class="list-b">
                <p class="classify">
                    <span v-for="(i,index) in item.classify" :key="index">{{i.text}}</span>
                </p>
                <div class="activity">
                    <div class="activity-l">
                        <div v-for="j in item.activities" :key="j.id" class="items">
                            <div class="icao">
                                <i :style="{background:'#'+j.icon_color}">{{j.icon_name}}</i>
                                {{j.tips}}
                            </div>
                        </div>
                        <div class="activity-n" @click="activityShow($event)">{{item.activities.length | distance('kee')}}</div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>

import {getlistData} from '../../../services/filmService.js'
export default {
    data(){
        return {
            listData:[],
            isShow:true,
            path:'/details'
        }
    },
    mounted(){
        getlistData().then(response=>{
            this.listData = response
        })
    },
    methods:{
        activityShow(event){

            if(this.isShow){
               event.path[1].style.overflow = "visible"
               event.path[1].style.height = 'auto'
               this.isShow = false
            }else{
               event.path[1].style.overflow = "hidden"
               event.path[1].style.height = '1.030133rem'
               this.isShow = true
            }
        }
    }
}
</script>

<style scoped>

.list{
    padding: .4rem 0;
    background-color: #fff;
    border-bottom: .013333rem solid #eee;
    font-size: .293333rem;
    display: block
}
.list-t{
    padding: 0 .266667rem;
    display: flex
}
.list-t img{
    height: 100%
}
.list-b{
    padding-left: 2.266667rem;
}
.list-name{
    padding-left: .266667rem;
    color: #666;
    width: 100%;
}
.list-name .sales span{
    margin-right: .106667rem;
    line-height: 2.4
}
.list-t h3{
    color: #333;
    font-size: .4rem;
}
.fee-time{
    display: flex;
    justify-content: space-between;
}
.fee::before{
    color: #ddd;
    content: "|";
    margin: 0 .08rem;
}
.classify{
    margin: .266667rem .266667rem 0 0;
    display: flex;
    transform: scale(.5);
    transform-origin: 0 0;
}
.classify span{
    color: rgb(102, 102, 102);
    border-color: rgb(221, 221, 221);
    font-size: .533333rem;
    border-radius: .053333rem;
    padding: 0 .213333rem;
    border: .026667rem solid #ddd;
    margin-right: .133333rem;
    display: flex;
}
.dispatching{
    margin-left: .106667rem;
    padding: 0 .04rem;
    background-image: linear-gradient(45deg,#0085ff,#0af);
    color: #fff;
    border: .013333rem solid transparent;
    border-radius: .04rem;
}
.activity {
    color: #333;
    display: flex;
    flex: 1;
    justify-content: space-between;
    position: relative;
    height: 1.030133rem;
    overflow: hidden;
}
.activity-l{
    padding-right: .266667rem;
}
.items{
    width: 5.2122rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
    margin-top: .066667rem;
    line-height: .48rem;
}
.icao{
    display: flex
}
.activity-l .items i{
    color: #fff;
    border-radius: .06rem;
    width: .373rem;
    height: .373rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:.06rem .16rem 0 0;
}
.activity-n{
    color: #999;
    font-size: .266667rem;
    transform: scale(.8);
    /* padding: .08rem .266667rem 0 0; */
    position: absolute;
    top: .08rem;
    right: .2666rem;
}

</style>
