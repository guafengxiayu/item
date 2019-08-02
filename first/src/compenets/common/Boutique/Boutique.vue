<template>
    <div class="boutqiue" >
        <div class="like" v-for="(item,index) in items" :key="index">
            <img v-bind:src="item.url" alt="">
            <span>{{item.content}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'Boutique',
   data(){
       return {
           items:[{
               els: "1",
               url:"../../../assets/c.jpeg",
               content:"19年大势容陷爱李光洙，要做我的女人吗，让我护着你"
           },
           {
               els: "2",
               url:"../../../assets/c.jpeg",
               content:"19年大势容陷爱李光洙，要做我的女人吗，让我护着你"
           },
           {
               els: "3",
               url:"../../../assets/c.jpeg",
               content:"19年大势容陷爱李光洙，要做我的女人吗，让我护着你"}]
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
    .boutqiue{
    background-color:yellow;
    width:400px;
    height:2700px;
    position: relative;
     }
     .like{
         margin:20px;
        width:150px;
        height:200px;
        background-color: aquamarine;
        float:left;
     }
     .span{
         font-size:10px;
         position: absolute;
         margin-top:200px;
     }
</style>

