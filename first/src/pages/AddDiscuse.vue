<template>
    <div class="all">
    <h3>发表追评</h3>
    <div id="discuss">
      <textarea name="" id="text" :placeholder="show?placea:placeb" v-model="show?noteA:noteB"></textarea><br>
      <button id="publish" class="btn" v-on:click="show=!show" :disabled="!show">发表</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
      show:true,
      placea:'请输入您的追评',
      placeb:'评论完成!',
      noteA:null,
      noteB:"",
        }
    }
}
</script>
<style lang="scss">
 #discuss{
    width: 100%;
    position: relative;
    display:inline-block;
    margin-bottom: 20px;
    #text{
      font-size: 20px;
      width: 100%;
      border-radius: 5px;
      height: 100px;
    } 
     #publish{
      padding: 0;
      border: none;
      width:80px;
      height: 25px;
      background-color: rgba(156, 220, 223, 0.849);
      cursor: pointer;
      box-shadow: 2px 4px 1px gray;
      border-radius: 5px;
      transition: all 0.01s linear;
      position: absolute;
      right: 0;
      font-size: 20px;
      color: #fff;
    }
    #publish:active{
      box-shadow: 0 2px 0 gray;
      transform: translate(0,3px);
    }
 }
</style>

