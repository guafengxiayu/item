<template>
    <div id="register">
        <div class="r1">注册</div>
        <div class="r2">登录</div>
        <input type="text" placeholder="用户名" class="in1">
        <input type="text" placeholder="邮箱" class="in2">
        <input type="text" placeholder="手机号" class="in3">
        <input type="text" placeholder="密码" class="in4">
        <button>马上注册</button>
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
    background: url(../assets/bg3.png) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.register{
  position: relative;
}
.r1{
  font-size: 25px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 177.5px;
  width: 50px;
  color: white;
}
.r2{
  font-size: 20px;
  position: absolute;
  width: 40px;
  left: 58px;
  top: 184px;
  color: white;
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
.in1{
  top: 240px;
}
.in2{
  top: 300px;
}
.in3{
  top: 360px;
}
.in4{
  top: 420px;
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
button{
  border-radius: 1.075rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 189px;
  height: 42.5px;
  color: white;
  top: 550px;
  background-color: transparent;
}
</style>
