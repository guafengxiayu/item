<template>
<div class="all">
    <h3>发表评论</h3>
    <div>
      <div class="all-star">
        <span>整体评价</span>
        <div class="starXin" v-for="(item,index) in list" :key='index'>
            <div @click="star(index)">
              <span :class="xing>index?stara:starb"></span>
            </div>
        </div>
      </div>
    </div>
    <div id="discuss">
      <textarea name="" id="text" :placeholder="show?placea:placeb" v-model="show?noteA:noteB"></textarea><br>
      <label class="control-label">上传图片</label>
      <div class="control-form">
        <p class="help-block">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M，最多可上传1张)</p>
        <ul class="upload-imgs">
          <li v-if="imgLen>=4 ? false : true">
            <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
            <a class="add"><i class="iconfont icon-plus"></i><p>点击上传</p></a>
          </li>
          <li v-for='(value, key) in imgs'>
            <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
          </li>
        </ul>
      </div>

      <button id="publish" class="btn" v-on:click="show=!show" :disabled="!show">发表</button>
        
    </div>
  </div>
</template>

<script>
   export default {
    name: "",
    data() {
      return {
      list:[0,1,2,3,4],
      stara:'icon-ei-icon-zz-starimg',//亮星星
      starb:'icon-ei-icon-zz-starline',//暗星星
      xing:0,
      show:true,
      placea:'请输入您的评论',
      placeb:'评论完成!',
      noteA:null,
      noteB:"",
      formData:new FormData(),
      imgs: {},
      imgLen:0,
      }
    },
   //方法
    methods: {
      star(val){
        this.xing = val+1
      },
      addImg(event){
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        let oldLen=this.imgLen;
        let len=this.fil.length+oldLen;
        if(len>1){
          alert('最多可上传1张，您还可以上传'+(1-oldLen)+'张');
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 5*1024*1024) {
            alert('请选择5M以内的图片！');
            return false
          }
          this.imgLen++;
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
        }
      },
      getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      submit(){
        for(let key in this.imgs){
          let name=key.split('?')[0];
          this.formData.append('multipartFiles',this.imgs[key],name);
        }
        this.$http.post('/opinion/feedback', this.formData,{
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => {
          this.alertShow=true;
        });
      },
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
   .upload-imgs{
     margin: 10px 0 30px 0;
     overflow: hidden;
     font-size: 0;
     padding: 0;
     }
     .upload-imgs li{
       position: relative;
       width: 118px;
       height: 118px;
       font-size: 14px;
       display: inline-block;
       padding: 10px;
       margin-right: 25px;
       border: 2px dashed #ccc;
       text-align: center;
       vertical-align: middle;
       .img{
         margin: 0;
          img{
         width: 118px;
         height: 118px;
         }
       }
       }
.upload-imgs li:hover{
  border-color: red;
  }
.upload-imgs .add{
  display: block;
  background-color: #ccc;
  color: #ffffff;
  height: 94px;
  padding: 8px 0;
  }
.upload-imgs .add .iconfont{
  padding: 10px 0;
  font-size: 40px;}
.upload-imgs li:hover .add{
  background-color:rgb(188, 146, 231);
  }
.upload-imgs li .upload{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 118px;
  height: 118px;}
.upload-imgs .img{
  position: relative;
  width: 94px;
  height: 94px;
  line-height: 94px;}
.upload-imgs .img img{
  vertical-align: middle;}
.upload-imgs .img .close{
  display: none;}
.upload-imgs li:hover .img .close{
  display: block;
  position: absolute;
  right: -25px;
  top: -10px;
  line-height: 1;
  font-size: 22px;
  color: #aaa;}
  }
  input{
    // z-index: -1;
    // border: none;
    // background-color: transparent;
    opacity: 0;
  }
  .icon-ei-icon-zz-starline{
    font-size: 20px;
    cursor:pointer;
    color: #FC3;
  }
  .icon-ei-icon-zz-starimg{
    font-size: 20px;
    cursor:pointer;
    color:#FC3;;
  }
  .all-star{
    display: flex;
  }
</style>