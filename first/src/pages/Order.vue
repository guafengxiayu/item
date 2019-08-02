<template>
    <div class="Order">
        <header class="header">
            <button class="return"><img src="../assets/shop-collection/return.png" alt=""></button>
            <p>我的订单</p>
        </header>
        <div class="shop">
            <ul>
                <li class="list-item">
                <div class="list-box">
                    <img class="list-img"  src="../assets/shop-collection/shopshose.jpg" alt="">
                    <p class="price">${{price}}</p>
                    <p class="title">时尚潮流白色休闲鞋</p>
                    <p class="size">37</p>
                    <p class="count">*{{count}}</p>
                    <p class="tatal"><span>合计：</span><span class="tatal2">￥{{price*count}}</span></p>
                    <button class="discusion" @click='plus'>{{discusion}} </button>
                </div>
                </li>
            </ul>
        </div>
           <div>
               <router-view></router-view>
               </div> 
    </div>
</template>
<script>
let flag=0;
export default {
    data (){
        return{
            price:59,
            count:2,
            discusion:"评论"
        }
    },
     methods:{
       plus: function(){
           if(flag==0){
               this.discusion="追评";
               flag=1;
           }else if(flag==1){
               this.discusion="已评";
           }
           this.$router.push({
                    path: '/discuse' 
            });   
       },
    }
    
}
</script>
<style lang="scss">
header{
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
    }
     ul{
        border-bottom: 1px #e8e8e8 solid;

    }
    .list-item{
        // position: relative;
        height:5rem;
        width: 100%;
        list-style: none;
        // z-index: 2;
        // border-bottom: 1px #e8e8e8 solid;
        .list-box{
            background: #fff;
            display: flex;
            // align-items: center;
            width: 100%;
            height: 100%;
            position: relative;
            // top: 0;
            // right: 0;
            // bottom: 0;
            left: -2rem;
            .list-img{
                display: block;
                position:absolute;
                top:0;
                bottom: 1rem;
                margin: auto 0;
                left:1.5rem;
                width: 3.825rem;
                height: 2.525rem;
            }
            .price{
                position:absolute;
                left: 5rem;
                top: -1rem;
                display: block;
                color: #87c7e9;                overflow: hidden;
                font-size: .9rem;
                font-weight: bold;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .title{
                position:absolute;
                left: 5.2rem;
                display: block;
                font-size: .7rem;   
                top:.5rem;                 
                color: #494949;
                line-height: 1rem;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .tatal{
                position: absolute;
                right: 0;
                top: -1rem;
                font-size: .7rem;
                .tatal2{
                    color: #f56607;
                }
            }
            .size{
                position:absolute;
                left: 5.2rem;
                top:1.8rem; 
                font-size: .8rem;
                color: #b7bdc3;               
            }
            .count{
                position: absolute;
                left: 7rem;
                top: -1rem;
                color:#b7bdc3;
                font-size: .5rem;
            }
            .discusion{
                position: absolute;
                right: 0;
                bottom: .3rem;
                border-radius: 40%;
                border: none;
                width: 3rem;
                height: 1.7rem;
                border: .05rem #5862f1dc solid;
                background-color: #fff;
                font-size: .7rem;
            }
        }
    }
</style>
