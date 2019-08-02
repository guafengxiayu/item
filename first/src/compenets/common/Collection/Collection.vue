<template>
    <div class="box">
      <button class="collect"  v-bind:class="{before:isshow,after: !isshow}" @click="isShow">
        {{msg}}
        <span :class="[isshow?activeClass:errorClass]"></span>
      </button>
    </div>
</template>
<script>
export default{
  name: "Collection",
  data(){
    return{
      isshow:true,
      msg:"收藏商品",
      activeClass:'icon-ei-icon-zz-heartline',
      errorClass:'icon-ei-icon-zz-heartimg',
    }
  },
  methods:{
    isShow: function(){
      this.isshow=!this.isshow 
      if(this.isshow){
        this.msg="收藏商品";
      }else{
        this.msg="取消收藏";
      }
    }
  }
};
</script>
<style   lang="scss">
  .collect{
    border-radius: 20px;
    width: 80%;
    height: 40px;
    font-size: 15px;
    /* background-color: #fffccc; */
    color:#7c7c7c;
    cursor: pointer;
    /* border:1px  #fffccc solid; */
  }
  .before{
    background-color: #ffffff;
    border:1px  #ffffff solid;
  }
  .after{
    background-color:#e8e8e8;
    border:1px #e8e8e8 solid;
  }
  .icon-ei-icon-zz-heartimg{
    font-size: 20px;
    color:rgba(236, 44, 108, 0.986);
  }
  .icon-ei-icon-zz-heartline{
    font-size: 20px;
  }
  .box{
    position: relative;
  .collect{
    position: absolute;
    left: 0;
    right: 0;
    top:20px;
    margin: auto auto;
  }}
</style>