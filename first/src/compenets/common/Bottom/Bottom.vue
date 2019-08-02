<template>
    <div id="header10">
        <div class='class10'>
            <a href="https://www.baidu.com">
            <img src="../../../assets/shouye.png">
            <!-- <span>首页</span> -->
            </a>
        </div>
        <div class='class10'>
            <a href="https://www.baidu.com">
            <img src="../../../assets/shengdangerenzhongxin.png">
            <!-- <span>个人中心</span></a> -->
            </a>
        </div> 
        <div class='class10'> 
            <a href="https://www.baidu.com">
            <img src="../../../assets/gouwuche.png">
            <!-- <span>购物车</span></a> -->
            </a>
        </div> 
    </div>
    </template>
    <script>
    export default {
        
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
 #header10{
    // height:56px;
    width:358px;
    position: fixed;
    // top:610px;
    bottom:0;
    background-color:whitesmoke;
    z-index:1;
}
.class10{
  
    width:92px;
    float: left;
    margin-left:26px;
    // margin-bottom: 10px;
}
.class10 img{
    width:38px;
}
    </style>
    
     