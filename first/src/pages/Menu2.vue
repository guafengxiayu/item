<template>
    <div id="menu">
        <img src="../assets/x.png" alt="" class="x">
        <ul class="list">
            <li><a href="">密码修改</a></li>
            <li><a href="">订单详情</a></li>
            <li><a href="">总评价</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    
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
.list{
    position: absolute;
    list-style: none;
    width: 100px;
    height: 310px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 150px;
    font-size: 20px;
    padding-left: 0;
}
li{
    padding-top: 40px;
    text-decoration: none;
    font-weight: bolder;
    text-align: center;
}
a{
    text-decoration: none;
    color: black;
}
</style>
