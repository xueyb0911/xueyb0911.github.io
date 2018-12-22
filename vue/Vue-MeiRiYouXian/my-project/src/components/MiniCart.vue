<template>
<div class="minicart">
	<span>￥</span>
	<span>{{allPrice}}</span>
	<span class="num" v-if="allBuyCount > 0">{{allBuyCount}}</span>
</div>
</template>
<script>
	export default{
		name:"Minicart",
		computed:{
			allPrice:function(){
				let allPrice = 0;
				var buyCount = this.$store.state.buyCount;
				for(var key in buyCount){
					allPrice += buyCount[key].count * buyCount[key].price
				}
				allPrice = Math.round(allPrice * 10)/10
				return allPrice
			},
			allBuyCount:function(){
				let allBuyCount = 0;
				var buyCount = this.$store.state.buyCount;
				for(var key in buyCount){
					allBuyCount += buyCount[key].count
				}
				return allBuyCount
			}
		}
	}
</script>
<style scoped>
	.minicart {
		background-color: red;
		border: 3px solid #fff;
		border-radius: 0px 15px 15px 0px;
		/*width: 40px;*/
		min-width: 40px;
		height: 30px;
		color: #fff;
		text-align: center;
		position: fixed;
		bottom: 60px;
		left: 0px;
		z-index: 2;
	}
	.minicart span {
		height: 30px;
		line-height: 30px;
	}
	.minicart .num {
		background-color: #fff;
		border: 1px solid #fff;
		border-radius: 50%;
		color: red;
		padding-right: 5px;
		padding-left: 5px;
		margin-right: 3px;
		width: 20px;
		height: 20px;
		font-size: 13px;
	}
</style>