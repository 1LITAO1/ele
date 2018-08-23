<template>
    <div>
        <div class="reco-top">
            <a href="##" class="reco-l">
                <h3>品质套餐</h3>
                <p>搭配齐全吃得好</p>
                <div>立即抢购 ></div>
                <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
            </a>
            <a href="##" class="reco-r">
                <h3>限量抢购</h3>
                <p>超值美味 9.9元起</p>
                <div><span>1786人</span>正在抢 ></div>
                <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
            </a>
        </div>
        <div class="reco-bot">
            推荐商家
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.reco-top{
    padding: 0 .266667rem;
    margin-bottom: .213333rem;
    background: #fff;
    display: flex;
}
.reco-top a{
    display: block;
    height: 3.733333rem;
    padding: .32rem 0 0 .4rem;
    flex: 1;
    position: relative;
}
.reco-top a h3{
    font-size: .453333rem;
    font-weight: 700;
    margin-bottom: .133333rem;
}
.reco-top a p{
    font-size: .346667rem;
    color: #777;
    margin-bottom: .24rem;
}
.reco-top a div{
    font-size: .32rem;
    font-weight: 700;
}
.reco-top a img{
    height: 2.133333rem;
    width: 3.2rem;
    position: absolute;
    right: 0;
}
.reco-l{
    margin-right: .08rem;
}
.reco-l div{
    color: #af8260;
}
.reco-r h3,.reco-r div span{
    color: #e81919;
}
.reco-bot{
    height: .96rem;
    font-size: .4rem;
    color: #000;
    text-align: center;
    line-height: .96rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reco-bot::before,.reco-bot::after{
    width: .533333rem;
    height: .026667rem;
    background-color: #999;
    display: block;
    content: "";
}
.reco-bot::before{
    margin-right:.346667rem 
}
.reco-bot::after{
    margin-left:.346667rem 
}
</style>
