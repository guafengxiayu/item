<template>
<div id="head">
    <div class="headimg">
        <img src="../../../assets/head2.jpg">
    </div>
    <button class="upload" @click="submit">更改头像</button>
    <input type="file" accept="image/*" @change="fileHandle" class="hidden">
    </div>    
</template>
<script>
export default {
    name:"head",
    data(){
        return {
            files: ["../../../assets/head1.jpg"],
        }   
    },
    methods:{
        //上传
        submit: function(){
            this.$el.querySelector('hidden').click()
        },
        //头像显示（后面对接时写保存）
        fileHandle: function(e){
            let $target = e.target || e.srcElement//调用属性，兼容ie和移动端
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
                this.user.imges = res.result
            }
            reader.readAsDataURL(file)//FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。 FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL。
        }
        //ps：裁剪方法还有残缺回头修改~
    }
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
#head{
     width: 100px;
     position: relative;
    .upload{
        width: 100%;
        background: transparent;
        border: none;
        font-size: 20px;
        position: relative;
    }
    .hidden{
        display: none;
    }
    .headimg{
        height: 100%;
    }
     img{
            width: 100%;
            border-radius: 50%;
        } 
}
</style>


