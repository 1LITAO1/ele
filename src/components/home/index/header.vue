<template>
    <div>
        <div class="he">
            <div class="seeko"><form action="get"><input type="text" placeholder="搜索饿了么商家、商家名称"></form></div>
        </div>
    </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
.he{
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%;
    z-index: 10;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.seeko{
    padding: .2rem .373333rem;
    margin: -.133333vw 0;
}
.seeko form{
    width: 100%;
    height: .96rem;
    display: flex;
}
.seeko input{
    border: none;
    outline: none;
    width: 100%;
    text-align: center;
    color: #999;
}
</style>