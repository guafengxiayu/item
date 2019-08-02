<template>
<div class="bb">
     <div id="header21">
         <div id="tutu">
             <img src="../assets/qixi.png" alt="">
         </div>
        <div id="buhao">
            <div class="goods" v-for="(todo,index) in todos" :key="index">
                <img v-bind:src="todo.img">
                <span id="span1">${{todo.p}}</span>
                <i> <span id="span2">${{todo.word}}</span></i>
            </div>
       </div>
     </div> 
</div>
</template>
<script>

import Container from "../components/common/Container/Container.vue"
export default {
      name: "ChosePage",
    components: {
       
        Container,
    },
     data(){
       
         return{
            todos:[
                   {
                       hre:'https://www.baidu.com',
                       img:require('../assets/show.png'),
                       word:'1法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                       p:23,
                   },
                   { 
                      hre:'http://news.baidu.com',
                      img:require('../assets/show.png'),
                      word:'2法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                      p:24,
                    },
                    {  
                        hre:'https://www.baidu.com',
                         img:require('../assets/show.png'),
                         word:'3法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                         p:25,
                         },
                    { 
                        hre:'http://news.baidu.com',
                        img:require('../assets/show.png'),
                        word:'4法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                        p:26,
                    },
                   { 
                       hre:'https://www.baidu.com',
                       img:require('../assets/show.png'),
                       word:'5法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                       p:27,
                    },
                    { 
                        hre:'http://news.baidu.com',
                        img:require('../assets/show.png'),
                        word:'6法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                        p:23,   
                    },
                     { 
                       hre:'https://www.baidu.com',
                       img:require('../assets/show.png'),
                       word:'5法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                       p:27,
                    },
                    { 
                        hre:'http://news.baidu.com',
                        img:require('../assets/show.png'),
                        word:'6法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                        p:23,   
                    },
                ]
            }        
     }
     
}
</script>
<style lang="scss" scoped>
    // rem 单位换算：定为 75px 只是方便运算，750px-75px、640-64px、1080px-108px，如此类推
$vm_fontsize: 37.5; // iPhone 6尺寸的根元素大小基准值
@function rem($px) {
@return ($px / $vm_fontsize ) * 1rem;
}
// 根元素大小使用 vw 单位
$vm_design: 375;
html {
font-size: ($vm_fontsize / ($vm_design / 2)) * 100vw; 
// 同时，通过Media Queries 限制根元素最大最小值
@media screen and (max-width: 160px) {
font-size: 32px;
}
@media screen and (min-width: 270px) {
font-size: 54px;
}
}
.bb{
    // height: 80%;
    // width: 100%;
    margin-top:30px;
    #tutu{
        
          img{
            width:100%;
        }
    }
    
        #header21
        {
            position: relative;
            top:161px;
          
            #buhao
            {
                
                margin-top:-200px;
                padding-top:-500px;
                margin-bottom: 150px;
                .goods
            {
                    position: relative;
                    margin-left:0px;
                    margin-right:4px;
                    height:300px;
                    // margin-top:10px;
                    /* height:15.40px; */
                    width:170px;
                    //  background-color: antiquewhite;
                    float:left;
                    img
                    {
                        position: absolute;
                        width:170px;
                        
                    }
                    #span1
                    {
                        position: absolute;
                        left:10px;
                        top:270px;
                        // margin-top:265px;
                        // margin-left:8px;
                        font-size:9px;
                        width:20px;
                    }
                    #span2
                    {
                    position: absolute;
                    display: block;
                    top:255px; 
                    left:70px;
                    bottom: 0;
                    line-height:13px;
                    font-size:0.2px;
                    // float: left;
                    // width: ;
                    }
                }  
            }     
        }  
    }          


</style>