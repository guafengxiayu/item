<template>
    <div class="shop-collection">
        <header class="header">
            <button class="return"><img src="../assets/shop-collection/return.png" alt=""></button>
            <button class="search"><img src="../assets/shop-collection/search.png" alt=""></button>
            <input type="text" placeholder="请输入您要搜索的商品名称" class="searchbox">
            <p>收藏夹</p>
        </header>
        <div class="list">
            <ul>
                <li class="list-item " data-type="0">
                <div class="list-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
                    <img class="list-img"  src="../assets/shop-collection/shopshose.jpg" alt="">
                    <div class="list-content">
                    <p class="price">$59</p>
                    <p class="title">时尚潮流白色休闲鞋</p>
                    <p class="time">2019.3.4</p>
                    </div>
                </div>
                <button class="delete" @click="deleteItem" >删除</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShopCollection',
    methods : {
 //跳转
 skip(){
  if( this.checkSlide() ){
  this.restSlide();
      }else{
  alert('You click the slide!')
      }
 },
 //滑动开始
 touchStart(e){
   // 记录初始位置
  this.startX = e.touches[0].clientX;
 },
 //滑动结束
 touchEnd(e){
            // 当前滑动的父级元素
  let parentElement = e.currentTarget.parentElement;
  // 记录结束位置
  this.endX = e.changedTouches[0].clientX;
            // 左滑
  if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
  this.restSlide();
  parentElement.dataset.type = 1;
  }
            // 右滑
  if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
  this.restSlide();
  parentElement.dataset.type = 0;
  }
  this.startX = 0;
  this.endX = 0;
 },
    //判断当前是否有滑块处于滑动状态
    checkSlide(){
  let listItems = document.querySelectorAll('.list-item');
  for( let i = 0 ; i < listItems.length ; i++){
  if( listItems[i].dataset.type == 1 ) {
   return true;
        }
  }
  return false;
    },
 //复位滑动状态
 restSlide(){
  let listItems = document.querySelectorAll('.list-item');
             // 复位
  for( let i = 0 ; i < listItems.length ; i++){
  listItems[i].dataset.type = 0;
  }
 },
 //删除
 deleteItem(e){
   // 当前索引
  let index = e.currentTarget.dataset.index;
  // 复位
  this.restSlide();
  // 删除
  this.list.splice(index,1);
 }
 }
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 3.25rem;
        background-color: #fff;
        border-bottom: .05rem hsl(0, 0%, 85%) solid;
        position: relative;
        p{  
            width:3rem;
            font-size:.7rem;
            // text-align: center;
            line-height:3.25rem;
            color: #494949;
            display: inline-block;
            position: absolute;
            left: 0;
            right: 0;
            top:0;
            bottom:0;
            margin:auto auto;
        }
        .return{
            background-color:transparent;
            border:transparent;
            width: .4rem;
            height: .65rem;
            img{
                width: .4rem;
                height: .65rem;
            }
            display: inline-block;
            position:absolute;
            top:0;
            bottom:0;
            margin:auto 0;
            cursor: pointer;
            left: .5rem;
        }
        .search{
            background-color:transparent;
            border:transparent;
            width: .65rem;
            height: .65rem;
            display: inline-block;
            img{
                width: .65rem;
                height: .65rem;
            }
            position:absolute;
            bottom:.4rem;
            right: 2rem;
            cursor: pointer;
        }
        .searchbox{
            border-radius: .2rem;
            height: .65rem;
            width: 60%;
            font-size: .6rem;
            position:absolute;
            bottom: .2rem;
            left:0;
            right: 0;
            margin:0 auto;
            border: .05rem #494949 solid;
        }
    }
    .list-item[data-type="0"]{
        transform: translate3d(0,0,0);
    }
    .list-item[data-type="1"]{
        transform: translate3d(-40%,0,0);
    }
    // .list-item:after{
    //     content: " ";
    //     -webkit-transform-origin: 0 100%;
    //     transform-origin: 0 100%;
    //     -webkit-transform: scaleY(0.5);
    //     transform: scaleY(0.5);
    // }

    .list-item{
        position: relative;
        height: 4.35rem;
        width: 100%;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        list-style: none;
        // -webkit-transform-origin: 0 100%;
        // transform-origin: 0 100%;
        // -webkit-transform: scaleY(0.5);
        // transform: scaleY(0.5);
        z-index: 2;
        .list-box{
            // padding: 0.2rem;
            background: #fff;
            display: flex;
            align-items: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            justify-content: flex-end;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: -2.5rem;
            font-size: 0;
            border-bottom: 1px #e8e8e8 solid;
        }
        .list-img{
            display: block;
            width: 3.825rem;
            height: 2.525rem;
        }
        .list-content{
            padding: 0.1rem 0 0.1rem 0.2rem;
            position: relative;
            flex: 1;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            overflow: hidden;
        }
        .price{
            display: block;
            color: #87c7e9;
            overflow: hidden;
            font-size: 15px;
            font-weight: bold;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .title{
            display: block;
            overflow: hidden;
            font-size: 12px;
            color: #494949;
            line-height: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .time{
            display: block;
            font-size: 12px;
            position: absolute;
            right: 0;
            top: 0.1rem;
            color: #666;
        }
        .delete{
            width: 40%;
            height: 100%;
            background: #ff4949;
            font-size: 17px;
            color: #fff;
            position: absolute;
            top:0;
            right: -40%;
            text-align: center;
            line-height: 4.35rem;
            border: transparent;
        }
    }
</style>


