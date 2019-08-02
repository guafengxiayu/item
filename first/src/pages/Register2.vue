<template>
  <div id="register">
        <div class="r1">登录</div>
        <div class="r2">注册</div>
        <input type="text" placeholder="登陆密码" class="in1">
        <input type="text" placeholder="用户名" class="in2">
        <button class="forget">忘记密码?</button>
        <button class="now">马上登录</button>
        <router-view></router-view>
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
    background: url(../assets/bg2.png) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
#register{
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
  right: 58px;
  top: 184px;
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
  top: 298.5px;;
}
.in2{
  top: 240px;
  font-weight: bold;
}
.center{
  text-align: center;
}
.forget{
  position: absolute;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: transparent;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 15px;
  background-color: transparent;
  top: 450px;
  color: white;
}
.now{
  border-radius: 1.075rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 189px;
  height: 42.5px;
  color: white;
  top: 510px;
  background-color: transparent;
}
</style>