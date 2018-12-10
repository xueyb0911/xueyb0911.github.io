<template>
	<div class="yhm">
		<input type="text" placeholder="请输入优惠码">
		<button>兑换</button>
	</div>
</template>
<script>
	export default{
		name:"yhm",
	}
</script>
<style>
	.yhm{
		width: 100%;
		height: 60px;
		background-color: #fff;
		text-align: center;
		line-height: 60px;
		box-sizing: border-box;

	}
	.yhm input{
		width: 60%;
		margin-left: 16px;
		border: 1px solid #fff;
		border-radius: 15px;
		background-color: #e5e5e5;
		height: 30px;
		padding-left: 10px;
		outline:none;
	}
	.yhm button{
		width: 60px;
		height: 30px;
		color: #000;
		background-color: #fff;
		border: 1px solid #000;
		border-radius: 15px;
		margin-left: 10px;
	}
</style>