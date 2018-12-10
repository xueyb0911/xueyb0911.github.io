<template>
	<div>
		<LoginTitle title="余额帮助"/>
		<div class="account">
			关于余额
	        <br/> 1）优鲜余额是可以在每日优鲜进行支付的货币；
	        <br/>2）可以通过每日签到、自助充值、卡卷兑换、红包分享等方式获得；
	        <br/>3）永久有效，不支持提现；
	        <br/>4）如有疑问可以通过微信公众号“每日优鲜会员店”进行咨询。
	        <br/>
		</div>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	export default{
		name:"AccountHelp",
		components:{
			LoginTitle
		}
	}
</script>
<style>
	.account{
		margin:10px;
		font-size: 12px;
	}
</style>