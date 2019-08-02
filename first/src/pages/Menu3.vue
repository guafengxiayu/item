<template>
    <div id="menu">
        <img src="../assets/x.png" alt="" class="x">
        <input type="text" placeholder="请输入旧密码" class="in1">
        <input type="text" placeholder="请输入新密码" class="in2">
        <input type="text" placeholder="请再输入一次新密码" class="in3">
        <button>确认提交</button>
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
input{
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  background-color: transparent;
  position: absolute;
  width: 282.5px;
  height: 58.5px;
  font-size: 20px;
  color: white;
  left: 0;
  right: 0;
  margin: 0 auto;
}
input::-ms-input-placeholder {
  text-align: center;
}
input::-webkit-input-placeholder {
  text-align: center;
}
input::-moz-placeholder{
  text-align: center;
}
.in1{
    top: 260px;
}
.in2{
    top: 290px;
}
.in3{
    top: 320px;
}
</style>
