<template>
	<div>
		<header>
			<div class="back" @click="Lfun()"></div>
			<div class="register2" @click="Rfun()"></div>
		</header>
		<div class="money">
			<div class="top">优鲜余额</div>
			<div class="btm">￥0</div>
		</div>
	</div>
	
</template>
<script>
	export default{
		name:"myAccountTitle",
		methods:{
			Lfun:function(){
				this.$router.go(-1)
			},
			Rfun:function(){
				this.$router.push('/accountHelp')
			}
		}
	}
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	header {
		width: 100%;
		height: 50px;
		background-color: #e1017e;
	}
	.back {
		width: 50px;
		height: 50px;
		background-image: url(../assets/image/back.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 10px;
		position: absolute;
	    top: 0px;
	    left: 0;
	}
	header .register2{
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0px;
		right: 0px;
		/*border: 1px solid #000;*/
		font-size: 16px;
		color: #fff;
		line-height: 50px;
		cursor: pointer;
		background-image: url(../assets/image/accounthelp.png);
		background-size: 20px;
		background-position: center;
		background-repeat: no-repeat;
	}
	.money{
		width: 100%;
		height: 120px;
		background-color: #e1017e;
		text-align: center;
		color: #fff;
	}
	.top{
		padding-top: 30px;
		margin-bottom: 20px;
		font-size: 12px;
	}
	.btm{
		font-weight: bolder;
		font-size: 16px;
	}
</style>