export default {
    install(Vue){
        Vue.filter('distance',(value,formatType='day')=>{
            if(formatType == 'day'){
                let val = (value/1000).toFixed(2)
                if(val >= 1){
                    return val + 'km'
                }else if(val < 1){
                    return value + 'm'
                }   
            }else{
                if(value>2){
                    return value + '个活动'
                }else{
                    return ''
                }  
            }
        })
        Vue.filter('pathUrl',(url,w,h,formatType='day')=>{
            let img = url.split('')
                img.splice(1, 0, '/');
                img.splice(4, 0, '/');
                let str = img.join('')
                var c
                if(str.substring(str.length-4) == 'jpeg'){
                    c = str.substring(0,str.length-4)+'jpeg.jpeg'
                }else{
                    c = str.substring(0,str.length-3)+'png.png'
                }
                  
            if(formatType == 'day'){

                return 'http://fuss10.elemecdn.com/' + c +'?imageMogr/format/webp/thumbnail/!'+ w +'x'+ h +'r/gravity/Center/crop/'+ w +'x'+ h +'/'
            
            }else if(formatType == 'week'){

                return 'https://fuss10.elemecdn.com/' + c + '?imageMogr/format/webp/'
                
            }
        })
    }
}

