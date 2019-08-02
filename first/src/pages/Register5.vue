<template>
    <div id="register">
        <button class="return"><img src="../assets/return2.png"></button>
        <div class="r1">确认码</div>
        <div class="r2">请输入你收到的验证码</div>
        <input type="text" placeholder="验证码">
        <button class="sent">提交</button>
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
    background: url(../assets/bg5.png) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.register{
    position: relative;
}
.return{
    border: transparent;
    background-color: transparent;
    width: 17.5px;
    height: 27.5px;
}
img{
    width: 17.5px;
    height: 27.5px;
}
.r1{
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: #efdecc;
    font-size: 25px;
    width: 85px;
    height: 25px;
    top: 218px;
}
.r2{
    position: absolute;
    color: #6b6b6b;
    font-size: 15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 210px;
    height: 32.5px;
    top: 255px;
    text-align: center;
}
input{
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  background-color: transparent;
  border-bottom: transparent;
  position: absolute;
  width: 282.5px;
  height: 58.5px;
  font-size: 20px;
  color: white;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 280px;
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
.sent{
  border-radius: 1.075rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
  height: 42.5px;
  background-color: #efdecc;
  color: #937f6b;
  top: 550px;
}
</style>
