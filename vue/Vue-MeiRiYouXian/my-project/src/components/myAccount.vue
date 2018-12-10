<template>
	<div>
		<myAccountTitle/>
		<myAccountFrame/>
	</div>
</template>
<script>
	import myAccountTitle from "./myAccountTitle"
	import myAccountFrame from "./myAccountFrame"
	export default{
		name:"myAccount",
		components:{
			myAccountTitle,myAccountFrame
		}
	}
</script>