<template>
    <div id="header">
            <div id="header1">
                <input id="me" type="button">
                <input type="text"  id="serchword" placeholder="寻好物">
                <input id="search" type="button">
           </div>
            <div id="header2">
                 <router-link to="/ChangePage1"><button id="cut" style="color:orange,font-size=20px" ><em>首页</em></button>
                 </router-link>
                  <router-link to="/ChangePage2"> <button  class="button1" type="button" >
                       配饰</button> </router-link>
                  <router-link to="/ChangePage3"> <button class="button1" type="button">美妆</button></router-link>
                   <router-link to="/ChangePage4">
                  <button class="button1" type="button"> 女包</button></router-link>
                   <router-link to="/ChangePage5"> <button class="button1" type="button">  女装</button></router-link>
                   <router-link to="/ChangePage5">  <button class="button1" type="button">百货</button></router-link>
            </div>    
            <!-- <router-view></router-view> -->
            <!-- <GoodsCard></GoodsCard> -->
           
    </div>
</template>
<script>
// import Goto from "../Goto/Goto.vue"
// import GoodsCard from "../GoodsCard/GoodsCard.vue"
// import Vue from 'vue'
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// const routes =[
//     {path:'../Goto/Goto.vue',component:Goto},
//     {path:'/GoodsCard',component:GoodsCard}
// ]
// const routes=new VueRouter({
//     routes:routes,
// })
export default {
    name: "Nav",
    components: {
        // Goto,
        //  GoodsCard,
    },
    // methods :{
    //     jump:function (path){
    //         this.$router.push('path');
          
            
    //     }
    //}
}
//     methods:{
//         jump(){
//             this.$router.push({
//                 path:'../../../pages/ChangePage1'
//             })
//         }
//     }
 
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
#header{
        width: 100%;
        margin:0;
        padding: 0;
}
#header1{
    width:100%;
    height:100px;
    background-color:rgb(28,19,19);
    position: relative;
}
#serchword{
    opacity: 0.7;
    position: absolute;
    width:196px;;
    height:26px;; 
    // background-color:bisque;
    border:1px brown solid; 
    font-size:18px;;
    margin-left:100px; 
    margin-top: 64px;
    color: rgb(33,2d,2d);
}
#me{
    position: absolute;
    background:url("../../../assets/touxiang.jpg");
    background-size: 60px 60px;
    width:60px;
    height:60px;
    border-radius: 35px; 
    border:1px solid white;
    margin-left:20px;
    margin-top:40px;
}
#search{
    position: absolute;
    background: url('../../../assets/search.png') center no-repeat white;
    background-size:26px 26px;
    width:35px;
    height:35px;
    margin-left:306px; 
    margin-top:62px;
    border-radius: 13px;
}
#header2{
    width:420px;
   
    margin-left:10px;
    color:rgb(51,35,12);
    #cut{
        border:1px solid black;
        border-radius: 6px;
    }
}
#header2 button{
    width:56px;
    font-size:16px;
     color:rgb(79,42,1);
     
}

</style>