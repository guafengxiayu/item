<template>
<div  class="stepper">
   <button class="plus"  @click='plus()' type="submit" >+</button>
    <input  class="in" v-model="number"  type="text" value="0" size="1"/>
    <!-- data-edit="true" max="100" min="0" data-digit="0"  data-step="1" -->
    <!-- <p class="init">{{number}}</p> -->
    <button class="minus" @click='minus()' type="submit" >-</button>
 </div>
</template>
<script>

export default {
    name: "Stepper",
    data (){
       return{
           number:1,
       }
    },
       methods:{
       plus(){
           this.number++;
        //    alert(this.number);
       },
       minus(){
            if(this.number<=0){
                alert("不能再减少啦！");
                this.number = 0;
            }
            else{
                this.number --;
            }
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
}.stepper{
    position: relative;
}
.in{
    position: absolute;
    width:50px;
    left:20px;
    font-size:15px;
    text-align: center;
}
.plus{
    position: absolute;
    top:2px;
    left:0px;
    border:1px black solid;
    color: black;
    padding: 2px;
    font-size:10px;
    text-align: center;
    width:20px;
    border-radius:3px;
    cursor: pointer;
}
.minus{
     position: absolute;
     left:72px;
     top:2px;
     border:1px black solid;
     color: black;
     font-size:10px;
     padding:2px;
     text-align: center;
     width:20px; 
     border-radius:3px;
     cursor: pointer;
}
.init{
color:black;
font-size:20px;
background-color:brown;
}
</style>