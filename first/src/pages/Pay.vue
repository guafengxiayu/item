<template>
    <div class="Pay">
        <header class="header">
            <button class="return"><img src="../assets/shop-collection/return.png" alt=""></button>
            <p>快速支付</p>
        </header>
        <div class="Payway">
            <p class="way"><span class="way1">付款方式</span></p>
            <p class="name"><span class="name1">姓名</span><span></span></p>
            <p class="cardnum"><span class="cardnum1">卡号</span><span></span></p>
            <p class="past"><span class="past1">过期日</span><span></span></p>
        </div>
        <div class="receiving">
            <p class="msg"><span class="msg1">收货信息</span></p>
            <p class="phone"><span class="phone1">电话号码</span><span></span></p>
              <p class="num"><span class="num1">订单号</span><span></span></p>
            <p class="selecting">
                <select class="province">
                    <option value="" hidden>--省--</option>
                    <option value="">陕西</option>
                </select>
                <select class="city">
                    <option value="" hidden>--市--</option>
                    <option value="">西安</option>
                </select>
                <select class="county">
                    <option value="">--县/区--</option>
                    <option value="">长安</option>
                </select><br>
                <textarea placeholder="请输入详细地址"></textarea>
            </p>
            <p class="price">
                <span class="price1">总计价格</span>
                <span class="price2">$29</span>
            </p>
        </div>
        <div class="foot">
            <button class="order">支付订单</button>
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
            width: 100%;
            position: relative;
            height: 3.125rem;
            .way1{
                color: #3e3e3e;
                font-size: .575rem;
                display: inline-block;
                position:absolute;
                top:.5rem;
                bottom: 0;
                margin: auto 0;
                left: 1rem;
                font-weight: bold;
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
    }
    .receiving{
        width: 100%;
        border-top: .75rem  #f2f2f2 solid;
        .msg{
            width: 100%;
            position: relative;
            height: 3.125rem;
            .msg1{
                color: #3e3e3e;
                font-size: .575rem;
                display: inline-block;
                position:absolute;
                top:.55rem;
                bottom: 0;
                margin: auto 0;
                left: 1rem;
                font-weight: bold;
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
        .selecting{
            height:4rem;
            position: relative;
            width:100%;
            border-bottom: .05rem #dadada solid;
            .province{
                position: absolute;
                left: 1rem;
                border: none;
            }
            .city{
                position: absolute;
                left: 5rem;
                border: none;
            }
            .county{
                position: absolute;
                left: 9rem;
                border: none;
            }
            textarea{
                position:absolute;
                border: .05rem #efdecc solid;
                width: 13rem;
                height: 50%;
                left:1rem;
                border-radius: .6rem;
                resize:none;
            }
            margin-bottom: 0;
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
        margin-bottom: 0;
    }
    .foot{
            height: 4rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top:0;
            .order{
                height: 70%;
                width: 90%;
                border: transparent;
                background-color: #efdecc;
                color: #937f6b;
                font-size: .55rem;
                border-radius: 1rem;
        }
    }
</style>
