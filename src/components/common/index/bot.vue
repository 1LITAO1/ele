<template>
    <div class="tabs">
        <router-link v-for="(item,index) in bottom" :key="index" :to="item.path" class="tab">
            <span @click="tabclick(item.name)" v-if="isShow">{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bottom:[
                {name:'首页',path:'/home'},
                {name:'发现',path:'/find'},
                {name:'订单',path:'/indent'},
                {name:'我的',path:'/mine'}
            ],
            isShow:true
        }
    },
    methods:{
        tabclick(name){
            this.$center.$emit('tabs-name',name)
        }
    }
}
</script>

<style scoped>
    .tabs{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 1.33333333rem;
        padding-top: .12rem;
        background: #fff;
        z-index: 7;
    }
    .tabs .tab{
        flex: 1;
        text-align: center;
        font-size: .266667rem;
        color: #8e8e93;
    }
    .tabs .tab span{
        display: block;
        height: 1.33333333rem;
    }
    .tabs .tab.router-link-active{
        color: #0089dc;
    }
</style>
