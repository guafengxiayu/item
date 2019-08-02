<template>
<div id="address">
<select name="province" v-model="selectedProvince">
<option v-for="(item,index) in provinces" :key="index" 
:value="item">{{item.name}}</option>
</select>
<select name="city" v-model="selectedCity">
<option v-for="(item,index) in cities" :key="index" 
:value="item">{{item.name}}</option>
</select>
<select name="area" v-model="selectedArea">
<option v-for="(item,index) in areas" :key="index" 
:value="item">{{item.name}}</option>
</select><br>
<textarea class="text" placeholder="请输入详细地址~"></textarea><br>
<button>确认地址</button>
</div> 
</template>

<script>
// import Vue from 'vue'
export default {
name:"Receive",
//知识点：filter对适当数据过滤返回true
//知识点：slice从两个参数截取数组(不改变原数组)使用splice会改变原数组不用
created(){
let beijing = this.provinces.slice(0,19)
this.cities = beijing.filter(item=>{
if(item.value == 2){
return true
}
})
this.selectedCity = this.cities[0]
this.areas = beijing.filter(item=>{
if(item.value == 3){
return true
}
})
this.selectedArea = this.areas[0]
},
watch:{
selectedProvince(newV){
//港澳台当成省写
if(newV.s == '71'||newV.s == '81'||newV.s == '82'){
this.cities = [newV]
this.areas = [newV]
}
else{
this.areas = this.provinces.filter(item=>{
if(item.level == 3&&item.s&&item.s == newV.s&&item.c == newV.c&&item.name!=='市辖区'){
return true
}
})
}
Vue.nextTick(()=>{
this.selectedArea = this.areas[0]
//知识点：父子组件通信
// 子组件
//this.$emit('test',this.param)
// 父组件
// @test='test($event,userDefined)'
this.$emit('input',this.infor)
})
}
},
computed:{
infor(){
return {
provinces: this.selectedProvince,
city: this.selectedCity,
area: this.selectedArea
}
}
},
data: function(){
return {
selectedProvince: {
    name: "陕西",
    },
selectedCity: {
    name:"西安",
    },
selectedArea: {
    name:"长安",
    },
cities:  1,
provinces:1,
areas: 1,
}
}
}
</script>
<style lang="scss">
select {
border: none;
padding-left: 10px;
width: 100px;
height: 100%;
}
textarea{
width: 300px;
height: 35px;
}
button{
margin-left: 200px;
}
</style>