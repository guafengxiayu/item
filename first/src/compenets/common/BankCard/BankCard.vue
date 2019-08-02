<template>
<div class="bank" >
    <form action="">
    <img src="../../../assets/yinhangqia.png" class="imga" alt="银行卡图标" width="20px" height="20px" align="bottom"/>
    <input class="inputa" type="number" placeholder="输入银行卡号"  size="19">
    <!-- <p class="bankword">中国银行 v-model="BankCard"</p> -->
    <img src="../../../assets/icons-.png" class="imgb" alt="密码图标" width="20px" height="20px" align="middle"/>
    <input class="inputb" type="password"><br>
   <button class="sure" type="button" ></button>
    <!-- 有个onclick提交事件没有写 -->
   
    </form>
  </div>

</template>
<script>
export default {
   name:"BankCard", 
 }

//   el:'bank',
//   data:{
//     str:null,
//     bank:bank,
//     validated:validated,//是否正确有效
//     cardType:cardType,//卡类型
//     stat,//状态
//   },
//   methods:{
//       btnClick:function(){

//       }
//   }
// })
// data:function(){
//   return {
      
//   }
// }
</script>
<style lang="scss">

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
.bankword{
  font-size: 15px;
  position: absolute;
  margin-left:240px;
  margin-top:287px;
}
.imga{
 position: absolute;
  margin-left:50px;
  margin-top:290px;
}
.imgb{
  position: absolute;
  margin-left:50px;
  margin-top:335px;
}
.inputa{
position: absolute;
  margin-left:80px;
  margin-top:285px;
  width:138px;
  height:20px;
  opacity:0.5;
}
.inputb{
position: absolute;
  margin-left:80px;
  margin-top:330px;
  width:100px;
  height:20px;
  opacity:0.5;
}
.sure{
  position: absolute;
  margin-left:100px;
  margin-top:345px;
}

</style>

