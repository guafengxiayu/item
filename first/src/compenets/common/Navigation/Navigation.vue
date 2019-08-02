<template>
<div id="navigation">
    <!-- <div v-for="(item,index) of items" :key="index" :class='[item.cls,{}]' @click="change(index)">
         <p :class="[item.pcls,{on:index == num}]">{{items[index].name}}</p>  -->
         <div class="home" :class="isActive == '首页' ? 'isActive' : '' " @click="change('首页')"><p class="phome"><img src="../../../assets/home.png">首页</p></div>
         <div class="cart" :class="isActive == '购物车' ? 'isActive' : '' " @click="change('购物车')"><p class="pcart"><img src="../../../assets/cart.png">购物车</p></div>
         <div class="recommend" :class="isActive == '推荐' ? 'isActive' : '' " @click="change('推荐')"><p class="precommend"><img src="../../../assets/recommend.png">推荐</p></div>
         <div class="mine" :class="isActive == '我的' ? 'isActive' : '' " @click="change('我的')"><p class="pmine"><img src="../../../assets/mine.png">我的</p></div>
    </div>   
</template>
<script>
export default {
		// props:['num'],
		data(){
			return {
				items:[{
                    cls:"home",
                    pcls:"phome",
					name:"首页",
					push:"/home",
					src:"../../../assets/home.png"
				},
				{
                    cls:"cart",
                    pcls:"pcart",
					name:"购物车",
					push:"/cart",
					src:"../../../assets/cart.png"
				},
				{
                    cls:"recommend",
                    pcls:"precommend",
					name:"推荐",
					push:"/recommend",
					src:"../../../assets/recommend.png"
				},
				{
                    cls:"mine",
                    pcls:"pmine",
					name:"我的",
					push:"/mine",
					src:"../../../assets/mine.png"
                }],
                isActive : '首页'
            }
        },
        methods:{
            change: function(index){
                this.isActive = index;
            }
        }
        
	} 
</script>
<style lang="scss">

// #navigation{
//     display: flex;
//     position: absolute;
//     box-sizing: border-box;
//     height: 100px;
//     background-color: aliceblue;
//     width: 100%;
//     div{
//         flex: 1;
//     }
//     img{
//         width: 50%;
//         height: 40px;
//     }
//     div p{
//         color: darkgray;
//         width: 60px;
//         font-size: 20px;
//         justify-content: center;
//         margin-left: 30px;
//         margin-bottom: 0;
//     }
//     .on{
//         color: black;
//     }
// }
#navigation{
    width:100%;
    height:100px;
    // border:1px solid black;
    div{
        width:25%;
        height: 40px;
        float: left;
        // background: url(../../../assets/home.png) no-repeat;
        position: relative;
        p{
            margin: 0 auto;
            font-size: 20px;
            width: 100px;
        }
    }
    .home{
            // background: url(../../../assets/home.png) no-repeat;
            background-size: contain;
        }
        .cart{
            // background: url(../../../assets/cart.png) no-repeat;
            background-size: contain;
        }
        .recommend{
            // background: url(../../../assets/recommend.png) no-repeat;
            background-size: contain;
        }
        .mine{
            // background: url(../../../assets/mine.png) no-repeat;
            background-size: contain;
        }
        .isActive{
            color: darkgray;
        }
        img{
            width: 30px;
            height: 30px;
        }
    // .small{
    //     position: absolute;
    //     width:400px;
    //     float: left;
    //     height: 100%;
    // }
    
}
</style>