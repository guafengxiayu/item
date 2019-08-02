<template>
	<div id="app">
	<!-- <div id="a"><Collection></Collection></div> -->
	<!-- <div id="b"><Discusion></Discusion></div>
	<div><Registion></Registion></div> -->
	<!-- <ShopCollection/> -->
	<!-- <Pay/> -->
	<!-- <shop-car/> -->
	<!-- <shop-details/> -->
		<!-- <Discuse/> -->
	<!-- <add-discuse/> -->
	<order/>
	<!-- <OrderDetails/> -->
	<!-- <router-view></router-view> -->
	<!-- <Nav/> -->
	</div>
</template>
<script>
	// import Collection from './compenets/common/Collection/Collection.vue'
	// import Discusion from './compenets/common/Discusion/Discusion.vue'
	// import Registion from './compenets/common/Registion/Registion.vue'
	// import ShopCollection from './pages/ShopCollection.vue'//收藏页面
	// import Pay from './pages/Pay.vue'
	// import ShopCar from './pages/ShopCar.vue'
	// import ShopDetails from './pages/ShopDetails.vue'
	// import Discuse from './pages/Discuse'
	// import AddDiscuse from './pages/AddDiscuse.vue'
	import Order from './pages/Order.vue'
	// import MainPage from '../src/pages/MainPage'
	// import Nav from './compenets/common/Nav/Nav.vue'
	// import OrderDetails from './pages/OrderDetails';
	export default{
		name:"app",
		components: {
			// Collection,
			// Discusion,
			// Registion,	
			// ShopCollection,//收藏页面
			// Pay,//支付页面
			// ShopCar,
			// ShopDetails,
			// Discuse,
			// AddDiscuse,
			Order,
			// OrderDetails,
			// Nav,
}
	}
</script>