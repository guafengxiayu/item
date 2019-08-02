<template>
    <div>
        <header>
            <button class="return">
                <img src="../assets/shop-collection/return.png" alt="">
            </button>
            <p>购物车</p>
        </header>
        <div>
            <ul>
                <li class="list-item">
                <div class="list-box">
                    <input type="checkbox" name="" id="check" @click="yes=!yes">
                    <label for="check"></label>
                    <img class="list-img"  src="../assets/shop-collection/shopshose.jpg" alt="">
                    <p class="price">${{price}}</p>
                    <p class="title">时尚潮流白色休闲鞋</p>
                    <p class="size">37</p>
                    <button class="reduce" @click='minus()' type="submit"><img src="../assets/jian.png" alt=""></button>
                    <input class="count" value="0"  v-model="number" >
                    <button class="increase" type="submit" @click='plus()'><img src="../assets/jia.png" alt=""></button>
                </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <button class="delete">删除</button>
            <button class="checkout">结算</button>
            <span class="tatal1">合计：</span>
            <span class="tatal2" v-if="yes">${{price*number}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data (){
       return{
           number:1,
           price:59,
           yes:false
       }
    },
       methods:{
       plus(){
           this.number++;
        //    alert(this.number);
       },
       minus(){
            if(this.number<=0){
                alert("不能再减少啦！");
                this.number = 0;
            }
            else{
                this.number --;
            }
       }
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
        height: 4.35rem;
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
            #check{
                width: 1rem;
                height: 1rem;
                opacity: 0;
            }
            label {
                position: absolute;
                // left: .25rem;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                border: 1px solid #999;
                top:0;
                bottom: 1rem;
                margin:auto 0;
            }
            #check:checked+label { 
                background-color: #87c7e9;
                border: .05rem solid #87c7e9;
                
            }

            #check:checked+label::after {
                position: absolute;
                content: "";
                width: .25rem;
                height: .5rem;
                top: .15rem;
                left: .3rem;
                border: .1rem solid #fff;
                border-top: none;
                border-left: none;
                transform: rotate(45deg)
            }
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
            .count{
                display: block;
                font-size: 12px;                    color: #494949;
                line-height: 20px;
                text-overflow: ellipsis;
                white-space: nowrap;
                position:absolute;
                top:2.8rem;
                right:.45rem;
                border:transparent;
                background-color:transparent;
                border-radius: 50%;
                width: 1.3rem;
                height: 1.3rem;
                z-index: 1;
            }
            .reduce{
                position:absolute;
                top:2.8rem;
                right: 3rem;
                border-radius: 50%;
                width: 1.3rem;
                height: 1.3rem;
                border: transparent;
                background-color:transparent;
                img{
                    width: 1.3rem;
                    height: 1.3rem;
                }
                z-index: 2;
            }
            .increase{
                position: absolute;
                right: 0;
                top:2.8rem;
                border-radius: 50%;
                width: 1.3rem;
                height: 1.3rem;
                border: transparent;
                background-color:transparent;
                img{
                    width: 1.3rem;
                    height: 1.3rem;
               }
                z-index: 2;

            }
        }
    }
    .footer{
        height: 3rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        border-top:.2rem  #e8e8e8 solid;
        .delete{
            position: absolute;
            left: .5rem;
            border-radius: 50%;
            border:transparent;
            width: 5rem;
            height: 2rem;
            background-color: #87c7e9;
            color: white;
        }
        .tatal1{
            position: absolute;
            right: 8rem;
            color: #87c7e9;
        }
        .tatal2{
            position: absolute;
            right: 6.6rem;
            color: #f7751e;
            font-size: 1rem;
        }
        .checkout{
            position:absolute;
            right: 1rem;
            border-radius: 50%;
            border:transparent;
            width: 5rem;
            height: 2rem;
            background-color:  #efdecc;
            color:#937f6b;
        }
    }
</style>

