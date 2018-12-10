<template>
	<footer>
		<div class="set" @click="toNextPage('set')">
			<img src="../assets/image/user_setting.png" alt="">
			<span>设置</span>
		</div>
		<div class="message" @click="toNextPage('message')">
			<img src="../assets/image/icon_user_messages.png" alt="">
			<span>消息</span>	
		</div>
		<div class="service" @click="toNextPage('service')">
			<img src="../assets/image/user_call.png" alt="">
			<span>客服</span>
		</div>
	</footer>
</template>
<script>
	export default{
		name:"UserFooter",
		methods:{
			toNextPage:function(url){
				this.$router.push("/" + url)
			}
		}
	}
</script>