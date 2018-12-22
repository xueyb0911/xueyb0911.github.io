<template>
	<div :style="hgt">
		<LoginTitle title="购物车"/>
		<div class="list" v-for="(data,key) in dataList" v-show="isShow(data.id)">
			<img :src="key | selectImg(select)" class="select" @click="changeSelect(key)">
			<img :src="data.thumbnail.url" class="left-img">
			<div class="info">
				<p class="name">{{data.name}}</p>
				<p class="price"><span>￥{{data.price}}</span><span class="num">/{{data.unit}}</span></p>
			</div>
			<div class="right">
				<div class="panel" :id="'panel' + data.id" v-show="isShow(data.id)">
					<img src="../assets/image/minus.png" class="right-img minus" alt="" @click="delCount(data.id)">
					<div class="count" :id="'count' + data.id">{{buyCount | showBuyCount(data.id)}}</div>
				</div>
				<img src="../assets/image/add.png" class="right-img" @click="addCount(data.id,data.price)">
			</div>
		</div>
		<footer>
			<div class="all" @click="getAll">
				<img :src="selectAll" class="select">
				<span>全选</span><br/>
				<span>已选{{allBuyCount}}件</span>
			</div>
			<div class="money">
				<p>
					<span>总金额：</span>
					<span>￥{{allPrice}}</span><br/>
					<span>不含运费</span>
				</p>
				<img src="../assets/image/buy.png" alt="">
			</div>
		</footer>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	import axios from "axios"
	import select_on from "./../assets/image/select_on.png"
	import select_off from "./../assets/image/select_off.png"
	export default{
		name:"shoppingCart",
		components:{
			LoginTitle
		},
		data:function(){
			return{
				hgt:{
					height:window.innerHeight + "px",
					"background-color":"#e5e5e5"
				},
				buyCount:[],
				dataList:"",
				select:[]
			}
		},
		methods:{
			getData:function(){
				let idList = [];
				for(let key in this.buyCount){
					idList.push(this.buyCount[key].id)
				}
				var params = {
			        fields: {},
			        where: {
			            id: {
			                inq: idList
			            }
			        },
			        skip: 0,
			        limit: idList.length
			    }
			    params = JSON.stringify(params);
			    axios({
			    	url: 'http://d.apicloud.com/mcm/api/ware?filter=' + params,
			        method: 'get',
			        headers: {
			            "X-APICloud-AppId": "A6921544633372",
			            "X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
			        }
			    }).then((res) => {
			    	// console.log(res.data)
			    	this.dataList = res.data;
			    	this.isSelect()
			    })
			},
			isShow:function(id){
				for(let key in this.buyCount){
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
			isSelect:function(){
				for(var key in this.dataList){
					this.select.push(true)
				}
			},
			changeSelect:function(key){
				// this.select[key] = !this.select[key];
				this.select.splice(key, 1, !this.select[key])
			},
			getBuyCount:function(){
				let list = this.$store.state.buyCount;
				for(let key in list){
					if(list[key].count > 0){
						this.buyCount.push(list[key])
					}
				}
			},
			getAll:function(){
				for(var key in this.select){
					this.select.splice(key, 1, true)
				}
			}
		},
		computed:{
			allBuyCount:function(){
				let allBuyCount = 0;
				for(var key in this.buyCount){
					if(this.select[key]){
						allBuyCount += this.buyCount[key].count
					}
				}
				return allBuyCount
			},
			selectAll:function(){
				return this.allBuyCount == 0 ? select_off : select_on;
			},
			allPrice:function(){
				let price = 0;
				for(let key in this.select){
					if(this.select[key]){
						price += this.buyCount[key].count * this.buyCount[key].price
					}
				}
				price = Math.round(price * 10)/10
				return price
			}
		},
		filters:{
			showBuyCount:function(val,id){
				for(var key in val){
					if(val[key].id == id){
						return val[key].count
					}
				}
			},
			selectImg:function(key,list){
				return list[key] ? select_on : select_off;
			}
		},
		created:function(){
			this.getBuyCount();
			this.getData();
		}
	}
</script>
<style scoped>
	.list {
		width: 100%;
		background-color: #fff;
		height: 150px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin-bottom: 10px;
	}
	.container {
		height: 200px;
		width: 100%;
		/*border-bottom: 1px solid #e5e5e5;*/
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.select{
		margin-left: 10px;
		width: 25px;
		height: 25px;
	}
	.left-img {
		width: 100px;
		height: 100px;
		/*margin-left: 10px;*/
	}
	.name {
		font-size: 16px;	
		position: relative;
		top: -25px;	
	}
	.price {
		font-size: 14px;
		color: red;	
		position: relative;
		top: -20px;		
	}
	.price .num {
		font-size: 10px;
		color: #888;
	}
	.list .right {
		margin-right: 10px;
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/*width: 200px;*/
		/*border: 1px solid #000;*/
	}
	.panel {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	}
	footer{
		width: 100%;
		height: 50px;
		background-color: #fff;
		position: fixed;
		bottom: 0px;
	}
	footer div{
		height: 50px;
		display: inline-block;
	}
	footer .all img{
		width: 20px;
		height: 20px;
		margin-top: 13px;
		margin-left: 10px;
	}
	footer .all span:nth-of-type(1){
		position: relative;
		top: -10px;
		font-size: 14px;
	}
	footer .all span:nth-of-type(2){
		position: relative;
		top: -10px;
		left: 33px;
		font-size: 12px;
		color: #888;
	}
	footer .money{
		float: right;
		text-align: right;
	}
	.money p{
		display: inline-block;
	}
	.money p span:nth-of-type(1){
		font-size: 14px;
	}
	.money p span:nth-of-type(2){
		font-size: 14px;
		color: red;
	}
	.money p span:nth-of-type(3){
		font-size: 10px;
		color: #888;
		position: relative;
		bottom: 5px;
	}
	.money img{
		width: 100px;
		height: 40px;
		margin-top: 5px;
	}
</style>