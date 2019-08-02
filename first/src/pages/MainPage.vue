<template>
    <div id="frist">
       <Nav></Nav>
                 <!-- <div class="header11" v-for="(item,index) in items"  :key="index" >
                                  <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                 
                                  <span>  {{item.clo}}</span>
                                  </button>
                </div>
                <div class="header11" v-for="(item,index) in items"  :key="index" >
                                  <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                
                                  <span>  {{item.clo}}</span>
                                  </button>
                </div>
                <div class="header11" v-for="(item,index) in items"  :key="index" >
                                  <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                 
                                  <span>  {{item.clo}}</span>
                                  </button>
                </div>
                <div class="header11" v-for="(item,index) in items"  :key="index" >
                    <button v-bind:href="item.hre" ref="showway"> 
                    <img v-bind:src="item.img">
                   
                    <span>  {{item.clo}}</span>
                    </button>
                </div> -->
                <!-- <div class="header11" v-for="(item,index) in items"  :key="index" >
                                 <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                   <img src:require=("../assets/taozhuang.png")
                                  <span>  {{item.clo}}</span>
                                  </button><div class="header11" v-for="(item,index) in items"  :key="index" >
                                  <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                   <img src:require=("../assets/taozhuang.png")
                                  <span>  {{item.clo}}</span>
                                  </button>
                </div>
                <div class="header11" v-for="(item,index) in items"  :key="index">
                                  <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                   <img src:require=("../assets/taozhuang.png")> 
                                  <span>  {{item.clo}}</span>
                                  </button>
                </div> -->
              
                <!-- <div class="header11" v-for="(item,index) in items"  :key="index" >
                                  <button v-bind:href="item.hre" ref="showway"> 
                                  <img v-bind:src="item.img">
                                  <img src:require=("../assets/taozhuang.png")
                                  <span>  {{item.clo}}</span>
                                  </button>
                </div> -->
            
        <!-- <img src="../assets/taozhuag.png" alt=""> -->
          <!-- <div id="header5">
              <div class="goods" v-for="(todo,index) in todos" :key="index">
                 <img class="good" v-bind:src="todo.img">
                   <span class="span1">{{todo.p}}</span>
                 <i> <span class="span2">{{todo.word}}</span></i>
              </div>
          </div> -->
          <!-- <BankCard></BankCard>> -->
          <!-- <Container></Container> -->
      </div>
    <!-- </div> -->
</template>
<script>
  import Nav from '../components/common/Nav/Nav.vue'
  
//   import Container from '../components/common/Container/Container.vue'
//   import BankCard from '../components/common/BankCard/BankCard.vue'
// import { close } from 'fs';
// import { METHODS } from 'http';
// import { Script } from 'vm';
// var myData={
  
// };

export default {
    name:"MainPage",
    components: {
      Nav,
    
    //   Container,
    //   BankCard,
    },
    data (){
        return{
            flag:false,
       todos:[
                   {
                       hre:'https://www.baidu.com',
                      img:require('../assets/taozhuang.png'),
                     word:'1法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                  p:23,
                  },
               { hre:'http://news.baidu.com',
              img:require('../assets/taozhuang.png'),
                   word:'2法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                    p:24,},
               {  hre:'https://www.baidu.com',
              img:require('../assets/taozhuang.png'),
                    word:'3法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                     p:25,},
               { hre:'http://news.baidu.com',
                img:require('../assets/taozhuang.png'),
                 word:'4法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                    p:26,},
               { hre:'https://www.baidu.com',
              img:require('../assets/taozhuang.png'),
                word:'5法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                 p:27,},
               { hre:'http://news.baidu.com',
              img:require('../assets/taozhuang.png'),
                    word:'6法式奶球咖啡波点v领泡泡袖绑带连衣裙桔梗裙',
                    p:23,   
               }]
        }
        
        
    },
    // method:{
    //       handleClose :function () {
    //          close();
    //       },
    //       close:function (){
    //         this.$refs.showway.display=none;
            
    //       }
    // }
    methods:{

    }
   
}
</script>
<style  lang="scss" >
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
#header2{
   
  display: flex;
}
button .button1{
    position: relative;
    color:black;
    background:wheat;
    opacity: 0.5;
    width:60px;
    height:32px;
    font-size:0.60px;
}
.showit{
    margin:0;
    padding:0;
    position: absolute;
    background: url('../assets/taozhuang.png') ;
    background-size: 75px 80px ;
    margin-top:40px;
   width:77px;
    height:84px ;
   background-color: aquamarine;
 
}
li{
    list-style:none;
    margin:0;
   /* flex-wrap:wrap; */
   
    font-size:14px;
   
}



/* #header5{

    background-color:thistle;
     float: left;
} */
/* #header5 .goods{
     margin-left:1.2rem;
     margin-right:1rem;
    margin-top:.5rem;
    height:15.2rem;
    width:8.9rem;
    background-color: antiquewhite;
    float:left;
}
#header5 .good{
    width:8.8rem;
    height:160px;
}
#header5 .span2{
    display: inline-block;
    margin-top:-1.8rem;
    margin-left:1.80px;
    line-height:0.9rem;
    font-size:.01rem;
}
#header5 .span1{
    font-size:0.06rem;
    float: left;
}
#header3 .header11{
    width:25rem;
    height:20rem;
    background-color: aqua;
}
#header .header11 img{
    width:60px;
    height:5rem;
} */
</style>