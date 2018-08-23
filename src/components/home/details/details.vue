<template>
    <h1>详情页</h1>
</template>

<script>
import {getdetailsData} from '../../../services/filmService.js'
export default {
     mounted(){
         getdetailsData().then(response=>{
             console.log(response)
         })
     }
}
</script>

<style>

</style>
