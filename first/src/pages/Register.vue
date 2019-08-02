<template>
    <div id="register">
        <div class="p1">ELEGANCE</div>
        <div class="p2">时尚潮流服饰销售商城，让您足不出户享受便捷购物体验</div>
        <button class="btn1" @click="jump1">登录</button>
        <button class="btn2" @click="jump2">注册</button>
    </div>
</template>
<script>
import Router from 'vue-router';
import Vue from 'vue'
Vue.use(Router);
export default {
    name:'app',
    methods:{
        jump1:function(){
            this.$router.push({path:'/register2.vue'})
        },
        jump2:function(){
            this.$router.push({path:'/register3.vue'})
        }
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
    background: url(../assets/bg1.png) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
#register{
    position: relative;
    .p1{
        font-size: 25px;
        text-align: center;
        position: absolute;
        width: 150px;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 188px;
    }
    .p2{
        text-align: center;
        position: absolute;
        width: 265px;
        left: 0;
        right: 0;
        margin: 0 auto;
        font-size: 15px;
        top: 225px;
        color: #949494;
    }
    button{
    border-radius: 1.075rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 189px;
    height: 42.5px;
    }
        .btn1{
            background-color: transparent;  
            color: white;
            top: 513px;
        }
        .btn2{

            background-color: #efdecc;
            color: #937f6b;
            top: 573px;
        }
}
</style>


