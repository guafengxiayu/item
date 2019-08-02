<template>
  <div class="GoodsCard">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in items" :key="index">
       <a v-bind:href="item.href"><img v-bind:src="item.img"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import"../../../../node_modules/swiper/dist/css/swiper.css"
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    name: 'GoodsCard',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        items:[
         { href:("https://www.baidu.com"),
           img:require('../../../assets/qixi.png'),},
            { href:("https://www.iconfont.cn/search/index"),
              img:require('../../../assets/qianxi.png'),},
               { href:("https://git-scm.com/book/zh/v1/Git-基础-远程仓库的使用"),
                 img:require('../../../assets/qixi.png'),}
         
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
        }
      };
    },
    methods:{
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // this.getImageData();
      this.swiper.slideTo(3,1000,false);
    }
  };
</script>
<style  lang="scss" >
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
  .GoodsCard{
    width:100%;
    // height:180px;
  }
  img{ 
  
  width: 100%;
  // height: 180px;
  
}

  
</style>