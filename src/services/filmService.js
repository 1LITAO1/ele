import axios from 'axios'
import API from '../api'


export function getfoodentry(){
    return new Promise((resolve,reject)=>{
        
        axios.get(API.ENTRIES_API,{
            params:{
                latitude:22.535152,
                longitude:114.031978,
                'templates[]':'main_template',
                terminal:'h5',
            }
        })
        .then(response=>{
            let data = response.data[0].entries.map(item=>{
                return {
                    id:item.id,
                    name:item.name,
                    image:item.image_hash
                }
            })
        
            resolve(data)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}

export function getsortData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.SCORT_API,{
            params:{
                latitude:22.535152,
                longitude:114.031978,
            }
        })
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}

export function getlistData(){
    return new Promise((resolve,reject)=>{
        
        axios.get(API.LIST_API,{
            params:{
                latitude:22.535152,
                longitude:114.031978,
                offset:0,
                limit:8,   
                'extras[]':'activities'
            }
        })
        .then(response=>{
            
            let data = response.data.items.map(item=>{
                return {
                    id:item.restaurant.id,//id
                    name:item.restaurant.name,//名字
                    image:item.restaurant.image_path,//图片
                    rating:item.restaurant.rating,//评分
                    number:item.restaurant.recent_order_num,//数量
                    time:item.restaurant.order_lead_time,//时间
                    send:item.restaurant.float_minimum_order_amount,//起送
                    fee:item.restaurant.float_delivery_fee,//运费
                    classify:item.restaurant.support_tags,//分类
                    distance:item.restaurant.distance,//距离
                    activities:item.restaurant.activities,//活动
                    //unflod:item.restaurant.delivery_mode//配送
                }
            })
            resolve(data)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}

export function getscreenData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.SCREEN_API,{
            params:{
                latitude:22.535152,
                longitude:114.031978,
            }
        })
        .then(response=>{
            resolve(response.data)
        })
        .catch(reeor=>{
            console.log('失败')
        })
    })
}

export function getfindoneData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.FINDONE_API,{
            params:{
                platform:1,
                block_index:0
            }
        })
        .then(response=>{
            let data = response.data[1].map(item=>{
                return {
                    id:item.id,
                    image:item.main_pic_hash,
                    title:item.title,
                    subtitle:item.subtitle
                }
            })
            resolve(data)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}


export function getproductData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.PRODUCT_API,{
            params:{
                
            }
        })
        .then(response=>{
            let data = response.data.map(item=>{
                return {
                    corner_marker:item.corner_marker,
                    image:item.image_hash,
                    title:item.title,
                    gold:item.points_required,
                    dinh:item.original_price
                }
            })
            
            resolve(data.splice(0,3))
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}


export function getdetailsData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.DETAILS_API,{
            params:{
                //restaurant_id:155686792
            }
        })
        .then(response=>{
            
           console.log(response)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}