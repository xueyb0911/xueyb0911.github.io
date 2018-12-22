<template>
	<div>
		<LoginTitle title="商品详情" Rval="分享" />
		<div :style="hgt">
			<img src="../assets/image/order_ware.gif" class="productImg">
			<p class="productName">{{data.name}}</p>
			<p class="productInfo">{{data.description}}</p>
			<div class="productInfoDiv">
				<p>￥{{data.price}}</p>
				<span>原价：{{data.originPrice}}</span><span>数量：{{data.unit}}</span><span>产地：中国</span>
			</div>
			<div class="yhhdDiv">
				<span>优惠活动：</span><span>全场满49包邮</span>
			</div>
			<p class="text">“亚当和夏娃都无法抵挡的禁果诱惑”</p>
			<p class="text">下滑查看商品详情</p>
		</div>
		<footer>
			<div class="right">
				<div class="panel" id="panel">
					<img src="../assets/image/minus.png" class="right-img minus" @click="delCount(data.id)" >
					<div class="count" id="count">{{getCount}}</div>
				</div>
				<img src="../assets/image/add.png" class="right-img" @click="addCount(data.id,data.price)">
			</div>
			<img src="../assets/image/buynow.png" class="buyImg">
		</footer>
		<Minicart />
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	import Minicart from "./Minicart"
	import axios from "axios"
	export default{
		name:"productDetails",
		components:{
			LoginTitle,Minicart
		},
		props:["id"],
		data:function(){
			return{
				hgt:{
					height:window.innerHeight + "px"
				},
				data:[],
				buyCount:this.$store.state.buyCount,
			}
		},
		methods:{
			getData:function(){
				var params = {
					fields: {},
					where: {
					    id: this.id
					},
					skip: 0,
					limit: 1,
					include: ['wareInfoPointer']
				}
				params = JSON.stringify(params);
				axios({
					url:'http://d.apicloud.com/mcm/api/ware?filter=' + params,
					method: 'get',
					headers: {
					    "X-APICloud-AppId": "A6921544633372",
					    "X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
					}
				}).then((res => {
					// console.log(res.data)
					this.data = res.data[0]
				}))
			},
			addCount:function(id,price){
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
				for(var key in this.buyCount){
					if(this.buyCount[key].id == id){
						this.buyCount[key].count--
						if(this.buyCount[key].count == 0){
							return
						}
					}
				}
				this.$store.commit("setBuyCount",this.buyCount)
				window.localStorage.setItem("buyCountList",JSON.stringify(this.buyCount))
			}
		},
		computed:{
			getCount:function(){
				let count = 0;
				for(let key in this.buyCount){
					if(this.buyCount[key].id == this.data.id){
						count = this.buyCount[key].count
					}
				}
				return count
			}
		},
		created:function(){
			this.getData()
		}
	}
</script>
<style scoped>
	.productImg{
		width: 300px;
		height: 300px;
		margin:10px auto;
		display: block;
	}
	.productName{
		font-style: 14px;
		color: #000;
		padding-left: 15px;
		margin-bottom: 5px;
		box-sizing: border-box;
	}
	.productInfo{
		font-style: 12px;
		color: #888;
		padding-left: 15px;
		border-bottom: 1px solid #888;
		padding-bottom: 10px;
		box-sizing: border-box;
	}
	.productInfoDiv{
		width: 100%;
		padding-left: 15px;
		box-sizing: border-box;
		padding-bottom: 10px;
		border-bottom: 1px solid #888;
		margin-top: 10px;
	}
	.productInfoDiv p{
		font-style: 20px;
		color: red;
		margin-bottom: 5px;
	}
	.productInfoDiv span{
		font-style: 12px;
		color: #888;
		margin-left: 35px;
	}
	.productInfoDiv span:nth-of-type(1){
		margin-left: 0px;
	}
	.yhhdDiv{
		padding: 10px 15px;
		font-style: 12px;
		border-bottom: 1px solid #888;
	}
	.yhhdDiv span:first-child{
		color: #888;
	}
	.yhhdDiv span:last-child{
		color: #fff;
		background-color: red;
		border-radius: 15px;
		padding: 5px;
	}
	.text{
		font-style: 12px;
		color: #888;
		width: 100%;
		text-align: center;
		margin-top: 10px;
	}
	footer{
		background-color: #000;
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
	}
	.right{
		margin-top: 15px;
	}
	.panel,.right {
		display: inline-block;
	}
	.right-img {
		width: 20px;
		height: 20px;	
		margin-left: 5px;	
	}
	.minus {
		margin-right: 5px;
	}
	.count {
		width: 40px;
		height: 20px;
		display: inline-block;
		border: 1px solid #000;
		border-radius: 15px;
		text-align: center;
		line-height: 20px;
		background-color: #fff;
		position: relative;
		bottom: 4px;
	}
	footer .buyImg{
		height: 30px;
		float: right;
		margin-top: 10px;
	}
</style>