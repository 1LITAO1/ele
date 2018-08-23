<template>
   <div>
       <Top></Top>
       <div class="otop">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
           <div class="login">
               <h3>登录/注册</h3>
               <p>登录后享受更多特权</p>
           </div>
       </div>
       <div class="nav">
           <a href="##">钱包</a><a href="##">红包</a><a href="##">金币</a>
       </div>
       
        <div class="fun"><a href="##"><p>我的地址</p></a></div>
        <div class="fun"><a href="##"><p>金币商城</p><p>分享拿五元现金</p></a></div>
        <div class="fun"><a href="##"><p>我的商城</p><p>下载饿了么APP</p></a></div>
       
   </div>
</template>

<script>
import  Top from '@/components/common/index/top.vue'
export default {
    components:{
        Top
    }
}
</script>

<style scoped>
.otop{
    padding: .666667rem .4rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    display: flex;
}
.otop img{
    border-radius: 50%;
    height: 1.6rem;
}
.login{
    margin-left: .48rem;
}
.login h3{
    font-size: .56rem;
    margin-bottom: .213333rem;
}
.login p,.nav a{
    font-size: .32rem;
}
.nav{
    height: 2.24rem;
    display: flex;
    line-height: 2.24rem;
    /* align-items: center */
}
.nav a{
    width: 33%;
    border-right: 1px solid #ddd;
    color: #666;
    display: block;
    text-align: center;
    font-weight: 700
}
.nav a:nth-child(3){
    border: none
}

.fun{
    font-size: .426667rem;
    margin-top: .266667rem;
    border-top: 1px solid #ddd;
}
.fun a{
    color: #333
}
.fun p{
    /* border-top: 1px solid #ddd; */
    border-bottom: 1px solid #ddd;
    padding: .373333rem .266667rem .373333rem .666667rem;;
}
</style>