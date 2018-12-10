<template>
	<div class="banner"> 
		<img v-for="data in wareTypeList" v-if="data.selected" v-bind:src="data.banner.url">
	</div>
</template>
<script>
	export default {
	    name: 'Banner',
	    props:["wareTypeList"]
	}
</script>