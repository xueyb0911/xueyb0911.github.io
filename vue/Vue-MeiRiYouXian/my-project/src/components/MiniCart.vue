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