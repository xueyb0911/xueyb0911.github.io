<template>
	<div>
		<div class="list" v-for="data in dataList" @click="goToNext(data.id)">
			<img v-bind:src="data.thumbnail.url" class="left-img">
			<div class="info">
				<p class="name">{{data.name}}</p>
				<p class="description">{{data.description}}</p>
				<p class="price"><span>￥{{data.price}}</span><span class="num">/{{data.unit}}</span></p>
				<p class="price-tag">超市：<span>{{data.originPrice}}</span></p>
			</div>
			<div class="right">
				<div class="panel" :id="'panel_' + data.id" v-show="isShow(data.id)">
					<img src="../assets/image/minus.png" class="right-img minus" alt="" @click="delCount(data.id)">
					<div class="count" :id="'count_' + data.id">{{buyCount | showBuyCount(data.id)}}</div>
				</div>
				<img src="../assets/image/add.png" class="right-img" @click="addCount(data.id,data.price)">
			</div>
			<div class="line"><div class="line2"></div></div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"List",
		props:["dataList"],
		data:function(){
			return{
				buyCount:this.$store.state.buyCount
			}
		},
		methods:{
			isShow:function(id){
				for(var key in this.buyCount){
					if(this.buyCount[key].id == id && this.buyCount[key].count > 0){
						return true
					}
				}
				return false
			},
			addCount:function(id,price){
				// event.stoppropagation阻止事件向下传播
				event.stopPropagation();
				let having = true;
				for(var key in this.buyCount){
					if(this.buyCount[key].id == id){
						this.buyCount[key].count++;
						having = false
					}
				}
				if(having){
					this.buyCount.push({id:id,price:price,count:1})
				}
				this.$store.commit("setBuyCount",this.buyCount)
				window.localStorage.setItem("buyCountList",JSON.stringify(this.buyCount))
			},
			delCount:function(id){
				event.stopPropagation();
				for(var key in this.buyCount){
					if(this.buyCount[key].id == id){
						this.buyCount[key].count--
					}
				}
				this.$store.commit("setBuyCount",this.buyCount)
				window.localStorage.setItem("buyCountList",JSON.stringify(this.buyCount))
			},
			goToNext:function(id){
				this.$router.push({name:"productDetails",params:{id:id}})
			}
		},
		filters:{
			showBuyCount:function(val,id){
				for(var key in val){
					if(val[key].id == id){
						return val[key].count
					}
				}
			}
		}
	}
</script>