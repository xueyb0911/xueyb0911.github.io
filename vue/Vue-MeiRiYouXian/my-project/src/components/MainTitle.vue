<template>
	<header class="mainheader">
		<div class="left">
			<img src="../assets/image/arrow_down.png">
			<router-link to="/city" class="router">
				<span>{{this.$store.state.cityInfo.cityName}}</span>
			</router-link>
		</div>
		<h1>每日优鲜</h1>
		<router-link :to="routerUrl" class="router">
			<div class="right"></div>
		</router-link>
	</header>
</template>
<script>
	export default {
	    name: 'MainTitle',
	    computed:{
	    	routerUrl:function(){
	    		return this.$store.state.userName ? "/userinfo" : "/login"
	    	}
	    },
		mounted:function(){
			if (!this.$store.state.cityInfo.cityName){
				this.$router.push("city")
			}
		}
	}
	
</script>
<style>
	@import "../css/MainTitle.css"
</style>