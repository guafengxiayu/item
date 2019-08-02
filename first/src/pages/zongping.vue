<template>
    <div >
       <div id="geren">
           <img src="../assets/touxiang.jpg" alt="">
           <!--之后改成可以从数据库里读取的用户头像地址-->
           <span>用户名</span>
           <!--之后改成可以从数据库里读取的用户名-->
       </div>
        <div id="pinglun"  v-for="(item,index) in items" :key="index">
            <div id="time"> {{item.time}}</div>
            <div id="name">{{item.name}}</div>
            <div id="pingluns">{{item.pinlun}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"zongping",
    data(){
        return {
            items:
            [
                {
                    time:'2019/7/30',
                    name:'商品名称：订单编号',
                    pinlun:'评论:里哭就一他个发人的成 v 不能11进口韩国脚后跟脚后跟饭脚后跟就会抠脚后跟饭恐惧一天抠 i u 犹太人i u 犹太人空军一号天'
                },
                {
                    time:'2019/7/30',
                    name:'商品名称：订单编号',
                    pinlun:'评论:里哭就一他个发人的成 v 不能11进口韩国脚后跟脚后跟饭脚后跟就会抠脚后跟饭恐惧一天抠 i u 犹太人i u 犹太人空军一号天'
                }

            ],
        }
    }
}
</script>
<style lang="scss" scoped>
     $vm_fontsize: 37.5; 
     // iPhone 6尺寸的根元素大小基准值
    @function rem($px) 
    {
        @return ($px / $vm_fontsize ) * 1rem;
    }
    // 根元素大小使用 vw 单位
    $vm_design: 375;
    html
    {
        font-size: ($vm_fontsize / ($vm_design / 2)) * 100vw; 
        // 同时，通过Media Queries 限制根元素最大最小值
        @media screen and (max-width: 160px) 
        {
        font-size: 32px;
        }
         @media screen and (min-width: 270px)
        {
        font-size: 54px;
        }
    }
#geren
{
    img
    {
        width:50px;
        height:50px;
        border-radius:10px;
        margin-left: 155px;
        margin-top:30px;
    }
    span
    {
        display: block;
        text-align:center;
        font-size:16px;
        margin-top:-10px;
    }
}
#pinglun
{
    margin-left: 33px;
    margin-top: 13px;
    
    #time
    {
        width:100px;
        height:20px;
        border:1px solid black;
        font-size:15px;
        padding-left:20px;
        line-height:25px;
        margin-bottom:-1px;
    }
    #name
    {
        width:270px;
        height:26px;
        font-size:15px;
        border:1px solid black;
        padding-left:20px;
        line-height:35px;
        margin-bottom:-1px;
    }
     #pingluns
     {
        width:270px;
        // height:145px;
        //高会被内容撑开，评论里可能还有图片
        font-size:15px;
        border:1px solid black;
        padding-left:20px;
        padding-top:8px;
        padding-bottom: 8px;
        line-height:18px;
     }
   
}
li
{
    list-style:none;
}
</style>

