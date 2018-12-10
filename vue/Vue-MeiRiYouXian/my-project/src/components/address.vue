<template>
	<div>
		<LoginTitle title="收货地址" Rval="添加" url="/addAddress" backUrl="/userinfo"/>
		<div class="address_empty"></div>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	export default{
		name:"addressVue",
		components:{
			LoginTitle
		}
	}
</script>
<style>
	.address_empty{
		width: 100%;
		height: 100px;
		margin-top: 50px;
		background-image: url(../assets/image/address_empty.png);
		background-size: 100px;
		background-position: center;
		background-repeat: no-repeat;
	}

</style>