<template>
	<div>
		<MainTitle/>
		<Data v-bind:cityId="this.$store.state.cityInfo.cityId"/>
		<router-view style="position:fixed"></router-view>
	</div>
</template>
<script>
	import MainTitle from "./MainTitle"
	import Data from "./Data"
	export default{
		name:"Main",
		components:{
			MainTitle,Data
		}
	}
</script>