<template>
    <div class="top">
        <p><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4="></p>
        <span>{{usrename}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            usrename:''
        }
    },
    created(){
        this.$center.$on('tabs-name',(name)=>{
            this.usrename = name
        })
    }
}
</script>

<style scoped>
.top{
    background: #2395ff;
    display: flex;
    height: 1.173333rem;
    width: 100%;
    text-align: center;
    font-weight: 700;
    line-height: 1.173333rem;
    position: relative;
}
.top span{
    font-size: 0.5em;
    color: #fff;
    position: absolute;
    left: 45%;
}
.top p{
    width: 1.173333rem;
    height: 1.173333rem;
    display: flex;
}
.top img{
    width: .32rem;
    height: .32rem;
    margin: auto;
    align-items: center;
}
</style>
