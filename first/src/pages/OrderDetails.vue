<template>
    <div class="Pay">
        <header class="header">
            <button class="return"><img src="../assets/shop-collection/return.png" alt=""></button>
            <p>订单详情</p>
        </header>
        <div class="Payway">
            <p class="way"><span class="way1">收货人姓名</span></p>
            <p class="name"><span class="name1">商品名称</span><span></span></p>
            <p class="cardnum"><span class="cardnum1">卡号</span><span></span></p>
            <p class="past"><span class="past1">支付日期</span><span></span></p>
            <p class="msg"><span class="msg1">收货地址</span></p>
            <p class="phone"><span class="phone1">电话号码</span><span></span></p>
              <p class="num"><span class="num1">订单号</span><span></span></p>
              <p class="img"><img src="../assets/shop-collection/shopshose.jpg" alt=""></p>
            <p class="price">
                <span class="price1">总计价格</span>
                <span class="price2">$29</span>
            </p>
        </div>
    </div>
</template>
<script>
// import Receive from '../compenets/common/Receive/receive.vue'
export default {
    // components: {
    //     Receive,
    // }
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
    .Payway{
        width: 100%;
        border-top: .75rem  #f2f2f2 solid;
        position: relative;
        border-bottom: .05rem #dadada solid;
        .way{
             height: 1.875rem;
            position: relative;
            width:100%;
            .way1{
                color: #777777;
                font-size: .45rem;
                position: absolute;
                left: 1rem;
            }
            border-bottom: .025rem #eeeeee solid;
        }
        .name{
            height: 1.875rem;
            position: relative;
            width:100%;
            .name1{
                color: #777777;
                font-size: .45rem;
                position: absolute;
                left: 1rem;
            }
            border-bottom: .025rem #eeeeee solid;
        }
        .cardnum{
             height: 1.875rem;
            position: relative;
            width:100%;
            .cardnum1{
                color: #777777;
                font-size: .45rem;
                position: absolute;
                left: 1rem;
            }
            border-bottom: .025rem #eeeeee solid;
        }
        .past{
             height: 1.875rem;
            position: relative;
            width:100%;
            .past1{
                color: #777777;
                font-size: .45rem;
                position: absolute;
                left: 1rem;
            }
            border-bottom: 0.5px #eeeeee solid;
        }
        .msg{
            width: 100%;
            position: relative;
           height: 1.875rem;
            .msg1{
                 color: #777777;
                font-size: .45rem;
                   position: absolute;
                left: 1rem;
            }
            border-bottom: .025rem #eeeeee solid;
        }
        .phone{
            height: 1.875rem;
            position: relative;
            width:100%;
            .phone1{
                color: #777777;
                font-size: .45rem;
                   position: absolute;
                left: 1rem;
            }
            border-bottom: .025rem #eeeeee solid;
        }
        .num{
            height: 1.875rem;
            position: relative;
            width:100%;
            .num1{
                color: #777777;
                font-size: .45rem;
                position: absolute;
                left: 1rem;
            }
            border-bottom: .025rem #eeeeee solid;
        }
            .price{
            margin-top:0;
            height: 2.75rem;
            background-color: #f2f2f2;
            position: relative;
            display: flex;
            align-items: center;//弹性盒模型垂直居中
            .price1{
                position: absolute;
                display: inline-block;
                left: 1rem;
                font-size: .5rem;
                color: #777777;
            }
            .price2{
                position:absolute;
                font-size: .9rem;
                right: 1rem;
                color: #777777;
            }
        }   
    }
</style>
