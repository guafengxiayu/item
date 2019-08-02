<template>
    <div class="star">
        <span v-for="(itemClass,index) in itemClasses" :key= "index" :class="itemClass" class="star-item" track-by="$index" >
            <span class="icon-el-zz-off"></span>
        </span>
    </div>
</template>
<script>
const LENGTH = 5;
const _ON = 'on';
const _HALF = 'half';
const _OFF = 'off';
export default {
 props:['score'],
    created(){
      console.log("子组件");
    },
    mounted(){
      console.log("打印传递的分数");
    },
    computed:{
      starArrs(){
        var starArr=[];  //3.9
//       全星星的个数
        let onstar = parseInt(this.score);
        console.log(onstar)
//       是否有半星
        let halfStar = Math.round(this.score-onstar)?true:false;
//       有多少课灰色的星星
        for (var i=0;i<onstar;i++) {
          starArr.push('onstar')         
        }
        if(halfStar){
          starArr.push('halfstar')          
        }
        while(starArr.length<5){
          starArr.push('offstar') 
        }
        return starArr;
      }
    }
}
</script>
<style lang="scss">
.star{
        .star-item{
            display: inline-block;
            background-repeat: no-repeat;
                width: 20px;
                height: 20px;
                margin-right: 22px;
                background-size: 20px 20px;  
            
        }
        }
</style>