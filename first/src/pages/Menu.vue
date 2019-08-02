<template>
    <div id="menu">
        <img src="../assets/x.png" alt="" class="x">
        <head-picker  id="head"></head-picker>
        <ul class="list">
            <li><a v-link="{path:'/Menu2'}">个人中心</a></li>
            <li><a v-link="{path:'/Menu2'}">收藏</a></li>
            <li><a v-link="{path:'/Menu2'}">关于我们</a></li>
        </ul>
        <button><img src="../assets/setting.png"></button>
    </div>
</template>
<script>
import HeadPicker from'../components/common/HeadPicker/HeadPicker.vue'
export default {
    components:{
        HeadPicker,
    }
}
</script>
<style lang="scss">
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
    background: url(../assets/menu.png) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
#menu{
    position: relative;
}
.x{
    width: 15px;
    height: 15px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 37.5px;
    background: none;
}
#head{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 65px;
}
.list{
    position: absolute;
    list-style: none;
    width: 100px;
    height: 310px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 230px;
    font-size: 20px;
    padding-left: 0;
}
li{
    padding-top: 25px;
    text-decoration: none;
    font-weight: bolder;
    text-align: center;
}
a{
    text-decoration: none;
    color: black;
}
button{
    background: transparent;
    border: none;
    width: 120px;
    height: 75px;
    position: absolute;
    bottom: 30px;
}
</style>
