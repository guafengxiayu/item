<template>
    <div>
        <header>
           <button class="return"><img src="../assets/shop-collection/return.png" alt=""></button>
            <p>商品详情</p>
        </header>
        <div class="shopimg">
           <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in items" :key="index">
            <img v-bind:src="item.img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="goods_box">
            <ul>
            <li class="goods" v-for="(item, index) in list" :key="index">
              <div class="price">
                 <div class="now_and_or">
                        <div class="now"><span class="now_price">￥{{item.hide_price}}</span></div>
                        <div class="or">原价：<span class="or_price">￥{{item.or_price}}</span></div>
                    </div>
                    <div class="goods_name">
                        {{item.name}}
                    </div>
                    <div class="goods_intro">
                        {{item.intro}}
                    </div>
                <div class="size">
                  <button :class=" activeClass1 == index ? 'active1' : '' " v-for="(itemSize,index) in itemSize" :key="index" @click="getSize(index)">          
                    {{itemSize.size}}       
                  </button>
                </div>
                <div class="color">
                  <button :class=" activeClass2 == index ? 'active2' : '' " v-for="(itemColor,index) in itemColor" :key="index" @click='getColor(index)'>          
                    {{itemColor.color}}       
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="discusion">
          <p class="title">全部评论</p>
          <ul>
            <li>
              <img src="../assets/jia.png" alt="">
              <p class="name">名字</p>
              <p class="data">日期</p>
              <p class="content">内容</p>
            </li>
          </ul>
        </div>
        <div class="Car_Collecte">
          <div class="Collecte">
            <collection/>
          </div>
          <div class="Car">
             <button class="shopcar"  v-bind:class="{before:isshow,after: !isshow}" @click="isShow">
        {{msg}}
        <span :class="[isshow?activeClass:errorClass]"></span>
      </button>
          </div>
        </div>
    </div>
</template>
<script>
import"../../node_modules/swiper/dist/css/swiper.css"
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import Collection from '../compenets/common/Collection/Collection.vue'
export default {
    components: {
      swiper,
      swiperSlide,
      Collection
    },
    data() {
      return {
        items:[
          {img :require('../assets/shopimg.jpg'),},
          {img :require('../assets/shopimg.jpg'),},
          {img :require('../assets/shopimg.jpg'),}

        ],
        list:[
            {
                or_price:"100",
                now_price:"10",
                //显示的价格
                hide_price:"50",
                name:"时尚女士休闲短袖T恤",
                intro:"采用天然纯棉料精制作，车工缝线都非常精细，都市时尚快风尚，是您居家休闲，外出逛街的完美搭配",
            },],
            itemSize:[
                {size:"37"},
                {size:"38"},
                {size:"39"},
            ],
            itemColor:[
               {color:"红"},
                {color:"白"},
                {color:"黑"}
            ],
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        },
        activeClass1:false,
        activeClass2:false,
        isshow:true,
        msg:"加入购物车",
      };
    },
    methods:{
       getSize(index) {
        this.activeClass1 = index;  // 把当前点击元素的index，赋值给activeClass
        // alert(activeClass);
      },
     getColor(index) {
        this.activeClass2 = index;  // 把当前点击元素的index，赋值给activeClass
        // alert(activeClass);
      },
      isShow: function(){
        this.isshow=!this.isshow 
        if(this.isshow){
          this.msg="加入购物车";
        }else{
          this.msg="已加入购物车";
        }
      },
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      this.getImageData();
      this.swiper.slideTo(3,1000,false);
    },
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
}
    header{
        width: 100%;
        height: 67px;
        background-color: #fff;
        border-bottom: .5px hsl(0, 0%, 85%) solid;
        position: relative;
        p{  
            width:100%;
            font-size:17px;
            text-align: center;
            line-height:67px;
            display: inline-block;
            position: absolute;
            left: 0;
            right: 0;
            top:0;
            bottom:0;
            margin:auto auto;
            margin-top: 0;
            margin-bottom: 0;
            color: rgb( 73, 73, 73 );
        }
        .return{
            background-color:transparent;
            border:transparent;
            width: 8.5px;
            height: 13px;
            img{
                width: 8.5px;
                height: 13px;
            }
            display: inline-block;
            position:absolute;
            top:0;
            bottom:0;
            margin:auto 0;
            cursor: pointer;
            left: 20px;
            padding-left: 0;
        }
    }
    .shopimg{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .goods_box{
        width: 100%;
        ul{
            width: 100%;
            padding-left: 0;
            margin-top:0;
            margin-bottom: 0;
        }
        li{
            width: 100%;
            // height: auto;
            // cursor: pointer;
            font-size: 0.6rem;
            background: #fff;
            display: flex;
            // align-items: center;
            // align-content: center;
            // padding-bottom: 1%;
            // border-radius: 4px;
            position:relative;
            .price{
              overflow: hidden;
              .goods_name{
                display: block;
                font-size: 15px;
                // position:absolute;
                // text-align: center;
                font-weight: bold;
                color: rgb( 35, 35, 35 );
                }
              .goods_intro{
                font-size: 12px;
                // font-family: "AdobeHeitiStd";
                color: rgb( 73, 73, 73 );
                // text-align: center;
              }
              .now{
                font-size: 13px;
                .now_price{
                  font-size: 13px;
                  color: rgba(242,58,58,0.8);
                }
              }
              .or{
                font-size: 8px;
                color: #cdd8e4;
                .or_price{
                  text-decoration: line-through;
                  color: #cdd8e4;
                  font-size: 8px;
                }
              }
              .size{
                height: 40px;
                width: 50%;
                float: left;
                display:flex;
                button{
                  height: 30px;
                  width: 30px;
                  border: transparent;
                  padding: 0;
                  border-radius: 50%;
                  margin-left: 2px;
                  // background-color: #fff;
                }
                .active1{
                  /* background: #eee; */
                  color: #fd800a;
                  background-color: #fff;
                  border: .5px #000 solid;
                  // font-weight: bolder;
                }
              }
              .color{
                height: 40px;
                width: 50%;
                float: right;
                display:flex;
                button{
                  height: 30px;
                  width: 30px;
                  border: transparent;
                  padding: 0;
                  border-radius: 50%;
                  margin-left: 2px;

                  // background-color: #fff;
                }
                .active2{
                  /* background: #eee; */
                  color: #fd800a;
                  background-color: #fff;
                  border: .5px #000 solid;
                  // font-weight: bolder;
                }
              }
            }}
    }
    .Car_Collecte{
      height: 80px;
      width: 100%;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      .Collecte{
        height: 40px;
        width: 50%;
        float: left;
        collection{
          height: 40px;
          width: 50%;
        }
      }
      .Car{
        height: 40px;
        width: 50%;
        float: right;
        position: relative;
        .shopcar{
          border-radius: 20px;
          width: 80%;
          height: 40px;
          font-size: 15px;
          color:#7c7c7c;
          position: absolute;
          left: 0;
          right: 0;
          top:20px;
          margin: auto auto;
        }
        .before{
          background-color: #ffffff;
          border:1px  #ffffff solid;
        }
        .after{
          background-color:#e8e8e8;
          border:1px #e8e8e8 solid;
        }
      }
    }
    .discusion{
      margin-bottom: 80px;
      .title{
        margin: 0;
        height: 25px;;
        background-color: #d3d9df;
        font-size: 10px;
        line-height: 25px;
      }
      ul{
        margin: 0;
        border-bottom: 1px #3c3c solid;
      }
      li{
        list-style: none;
        position: relative;
        height: 90px;
        img{
          width: 55px;
          height: 55px;
          border-radius: 50%;
          position: absolute;
          left: -40px;
        }
        .name{
          display: inline-block;
          margin:0;
          position:absolute;
          font-size: 10px;
          top:8px;
          left:15px;
        }
        .data{
          display: inline-block;
          margin:0;
          position:absolute;
          font-size: 8px;
          top:25px;
          left: 15px;
          color:#c3c3ca
        }
        .content{
          display: inline-block;
          margin:0;
          position:absolute;
          font-size: 10px;
          left: 15px;
          top:40px;
        }
      }
    }
</style>
