<template>
    <div class="sort-t">
        <div class="sort">
            <div class="rank">
                <span @click="ranking()">{{sort}}</span>
                <ul v-if="isShow">
                    <li v-for="(item,index) in data1" :key="index">{{item.name}}</li>
                </ul>
            </div>
            <div v-for="(item2,index) in data2" :key="index">
                <span>{{item2.name}}</span>
            </div>
            <div>
                <span @click="iscreen()">筛选</span>
                <div class="a" v-if="Show">
                    <div class="screen">
                        <div class="scr">
                            <p>商家服务 (可多选)</p>
                            <div v-for="i in data5" :key="i.id" class="services">
                                {{i.name}}
                            </div>
                        </div>
                        <div class="scr">
                            <p>优惠活动 (单选)</p>
                            <div v-for="i in data3" :key="i.id" class="services">
                                {{i.name}}
                            </div>
                        </div>
                        <div class="scr">
                            <p>人均消费</p>
                            <div v-for="i in data4" :key="i.id" class="services">
                                {{i.description}}
                            </div>
                        </div>
                    </div>
                    <div class="select">
                        <span>清空</span><span>确认</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getsortData,getscreenData} from '../../../services/filmService.js'
export default {
    data(){
        return {
            sort:'综合排序',
            data1:[],
            data2:[],
            isShow:false,
            Show:false,
            data3:[],
            data4:[],
            data5:[]
        }
    },
    mounted(){
        getsortData().then(response=>{
            this.data1 = response.inside_sort_filter
            this.data2 = response.outside_sort_filter
        })
        getscreenData().then(response=>{
            this.data3 = response.activity_types
            this.data4 = response.average_costs
            this.data5 = response.supports
        })
    },
}
</script>

<style scoped>
.sort-t{
    position: absolute;
    top: 1.31rem;
    left: 0;
    width: 100%;
    background: #fff;
}
.sort{
    height: 1.066667rem;
    line-height: 1.04rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    font-size: .373333rem;
    justify-content: space-around;
    position: relative;
}
.rank ul{
    position: absolute;
    width: 100%;
    background: #fff;
    left: 0;
    top: 1.1rem;
    padding-left: .533333rem;
    z-index: 5
}
.rank ul li{
    line-height: 1.066667rem;
}
.active{
    color: #3190e8;
    font-weight: 700;
}
.a{
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    z-index:5;
    top: 1.1rem;
}
.screen{
    padding: 0 .266667rem;
    font-size: .346667rem;
    color: #333;
}
.screen p{
    margin-left: 1%;
    margin-bottom: .2rem;
    line-height: 1.3;
}
.services{
    margin: .08rem 1%;
    background: #fafafa;
    height: .933333rem;
    display: inline-block;
    width: 30%;
    text-align: center
}
.scr{
    margin: .266667rem 0;
}
.select span{
    width: 50%;
    display: inline-block;
    text-align: center;
    line-height: 1.146667rem;
    font-size: .45rem;
}
.select span:nth-child(2){
    color: #fff;
    background-color: #00d762;
}
.select span:nth-child(1){
    color: #ddd;
}
</style>
