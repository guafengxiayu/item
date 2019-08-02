<template>
<div class="header11">
     <div class="header1" v-for="(peishi,index) in peishis" :key="index" >
        <a v-bind:href="peishi.hre">     
        <img v-bind:src="peishi.img">
       <p> <span>{{peishi.clo}}</span></p>
        </a>
     </div>
  </div>              
</template>
<script>
export default {
    name: "Goto",
    data(){
       
         return{
              peishis:[
                 { hre:'https://www.baidu.com',
                  img:require('../../../assets/logo.png'),
                   clo:'围巾'},
                  { hre:'http://news.baidu.com',
                  img:require('../../../assets/logo.png'),
                   clo:'耳饰'},
                  {  hre:'https://www.baidu.com',
                   img:require('../../../assets/logo.png'),
                   clo:'项链'},
                 { hre:'http://news.baidu.com',
                   img:require('../../../assets/logo.png'),
                   clo:'腕表'},
                  { hre:'https://www.baidu.com',
                   img:require('../../../assets/logo.png'),
                   clo:'眼镜'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/logo.png'),
                   clo:'帽子'},
                    { hre:'https://www.baidu.com',
                   img:require('../../../assets/logo.png'),
                   clo:'发饰'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/logo.png'),
                   clo:'脚链'},
               ],
                meizhuangs:[
                 { hre:'https://www.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'口红'},
                  { hre:'http://news.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'工具'},
                  {  hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'面膜'},
                 { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'香水'},
                  { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'指甲油'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'BB霜'},
                    { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'洁面'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'睫毛膏'},
               ],
                 nbaos:[
                 { hre:'https://www.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'单肩包'},
                  { hre:'http://news.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'双肩包'},
                  {  hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'手拿包'},
                 { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'手提包'},
                  { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'斜挎包'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'旅行箱'},
                    { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'mini 包'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'布包'},
               ],
                nzhuangs:[
                 { hre:'https://www.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'衬衫裙'},
                  { hre:'http://news.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'雪纺衫'},
                  {  hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'西装'},
                 { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'风衣'},
                  { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'旗袍'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'卫衣'},
                    { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'桔梗裙'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'半身裙'},
               ],
                 baihuos:[
                 { hre:'https://www.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'多肉'},
                  { hre:'http://news.baidu.com',
                  img:require('../../../assets/zhu.png'),
                   clo:'鱼儿'},
                  {  hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'鲜花'},
                 { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'香薰'},
                  { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'抱枕'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'杯子'},
                    { hre:'https://www.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'香水'},
                  { hre:'http://news.baidu.com',
                   img:require('../../../assets/zhu.png'),
                   clo:'雨伞'},
               ],
           }
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
 .header11{
          width:100%;
        //   height:200px;
        //   margin-left:24px; 
       
          /* background-color: bisque; */
          .header1{
          width:35px;
         background-color: bisque;
         margin-top: 5px;
         height:50px;
          margin-left:40px;
          float: left;
         position: relative;
         img{
          width:35px;
        //   height:20px;
        //   margin: 10px;
           border-radius:10px;
        position: absolute;   
      } 
      p{
          position: absolute;
           display: inline-block;
         color:yellowgreen;
         font-size:12px;
        margin-top: 33px;
        margin-left: 5.5px;
      
      }  
    }
  }
 
</style>




