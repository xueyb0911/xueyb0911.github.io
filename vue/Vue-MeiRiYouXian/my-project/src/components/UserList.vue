<template>
	<ul class="userlist">
		<li @click="toNextPage('myorder')">
			<div class="left">
				<img src="../assets/image/img_item_myorder.png" class="leftimg">
				<span class="myorder">我的订单</span>
			</div>
			<div class="right">
				<span class="orderdetail">查看所有订单详情</span>
				<img src="../assets/image/arrow_right.png" class="rightimg">
			</div>
		</li>
		<li @click="toNextPage('myaccount')">
			<div class="left">
				<img src="../assets/image/img_item_myorder.png" class="leftimg">
				<span class="myorder">我的账户</span>
			</div>
			<div class="right">
				<span class="orderdetail">充值有礼</span>
				<img src="../assets/image/arrow_right.png" class="rightimg">
			</div>
		</li>
		<li @click="toNextPage('discounts')">
			<div class="left">
				<img src="../assets/image/img_item_myorder.png" class="leftimg">
				<span class="myorder">优惠卷</span>
			</div>
			<div class="right">
				<span class="orderdetail">查看我的优惠卷</span>
				<img src="../assets/image/arrow_right.png" class="rightimg">
			</div>
		</li>
		<li @click="toNextPage('address')">
			<div class="left">
				<img src="../assets/image/img_item_myorder.png" class="leftimg">
				<span class="myorder">收货地址</span>
			</div>
			<div class="right">
				<span class="orderdetail">管理我的收货地址</span>
				<img src="../assets/image/arrow_right.png" class="rightimg">
			</div>
		</li>
	</ul>
</template>
<script>
	export default{
		name:"UserList",
		methods:{
			toNextPage:function(url){
				this.$router.push("/" + url)
			}
		}
	}
</script>