<template>
	<div class="temp" :style="hgt">
		<LoginTitle title="收货地址" backUrl="/address"/>
		<ul>
			<li>
				<img :src="defaultAddrImg" @click="changeDefaultAddrImg(addressInfo.defaultAddrImgKey)" class="select_on">
				<span class="defaultAddr">设为默认地址</span>
			</li>
			<li>
				<span>收货人:</span>
				<input type="text" placeholder="点击输入收货人姓名" v-model="addressInfo.name">
			</li>
			<li>
				<span>手机号码:</span>
				<input type="number" placeholder="点击输入收货人手机号码" v-model="addressInfo.phone">
			</li>
			<li @click="changeDistpicker">
				<span>所在区域:</span>
				<span>{{addressInfo.distpickerVal | isNull('点击选择收货所在的区域')}}</span>
				<img src="../assets/image/item_user_address_right.png" class="item_user_address_right">
			</li>
			<li @click="toNextPage">
				<span>具体地址:</span>
				<span>{{addr | isNull('点击选择具体的小区或写字楼')}}</span>
				<img src="../assets/image/item_user_address_right.png" class="item_user_address_right">
			</li>
			<li>
				<span>楼号门牌:</span>
				<input type="text" placeholder="点击输入楼号门牌（例A座3单元1201）" v-model="addressInfo.lhmp">
			</li>
			<li>
				<span>地址类型:</span>
				<div :class="{selected:addressInfo.addressTypeKey == 0}" @click="changeAddressTypeKey(0)">公司</div>
				<div :class="{selected:addressInfo.addressTypeKey == 1}" @click="changeAddressTypeKey(1)">住宅</div>
				<div :class="{selected:addressInfo.addressTypeKey == 2}" @click="changeAddressTypeKey(2)">学校</div>
				<div :class="{selected:addressInfo.addressTypeKey == 3}" @click="changeAddressTypeKey(3)">其他</div>
			</li>
		</ul>
		<div class="saveAddr" @click="saveAddr">保存</div>
		<distpicker v-show="isShowDistpicker" v-on:hideDistpicker="changeDistpicker" v-on:distpickerVal="getDistpickerVal"/>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	import distpicker from "./Distpicker"
	import select_on from "./../assets/image/select_on.png"
	import select_off from "./../assets/image/select_off.png"
	import axios from 'axios'
	export default{
		name:"addAddress",
		components:{
			LoginTitle,distpicker
		},
		props:["addr"],
		data:function(){
			return{
				hgt:{
					height:window.innerHeight + "px"
				},
				defaultAddrImg:select_on,
				isShowDistpicker:false,
				addressInfo:{
					name:"",
					phone:"",
					lhmp:"",
					detailAddr:"",
					defaultAddrImgKey:true,
					distpickerVal:"",
					addressTypeKey:0,
				}
			}
		},
		methods:{
			changeAddressTypeKey:function(key){
				this.addressTypeKey = key
			},
			changeDefaultAddrImg:function(key){
				//图片地址会被编码，另加一个标志判断
				if(key){
					this.defaultAddrImg = select_off;
				}else{
					this.defaultAddrImg = select_on;
				}
				this.addressInfo.defaultAddrImgKey = !this.addressInfo.defaultAddrImgKey
			},
			toNextPage:function(){
				this.$store.commit("setAddressInfo",this.addressInfo);
				this.$router.push("/detailedAddress")
			},
			changeDistpicker:function(){
				this.isShowDistpicker = !this.isShowDistpicker
			},
			getDistpickerVal:function(val){
				this.distpickerVal = val;
				this.changeDistpicker()
			},
			isNull:function(){
				if(this.addressInfo.name == ""){
					alert("请输入收货人姓名");
					return 
				}if(this.addressInfo.phone == ""){
					alert("请输入手机号码");
					return 
				}if(this.addressInfo.lhmp == ""){
					alert("请输入楼号门牌");
					return 
				}
			},
			saveAddr:function(){
				this.isNull();
				axios({
		            url: 'https://d.apicloud.com/mcm/api/address',
		            method: 'post',
		            headers: {
		                "X-APICloud-AppId": "A6921544633372",
		                "X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476",
		                "Authorization": userInfo.id
		            },
		            data: {
		                values: this.addressInfo
		            },
		        }).then((res) =>{
		        	console.log(res.data)
		        })
			}
		},
		filters:{
			isNull:function(val,str){
				return val ? val : str
			}
		},
		watch:{
			addressInfo:function(to,from){
				console.log(to)
			}
		},
		mounted:function(){
			this.addressInfo.detailAddr = this.addr
		}
		
	}
</script>
<style scoped>
	.temp{
		background-color: #e5e5e5;
	}
	ul{
		width: 100%;
		height: auto;
		background-color: #fff;
	}
	ul li{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #e5e5e5;
		line-height: 60px;
		font-size: 15px;
		color: #000;
		font-family: Serif;
	}
	.select_on{
		width: 15px;
		height: 15px;
		margin-left: 16px;
	}
	.defaultAddr{
		font-size: 20px;
	}
	span:first-child{
		margin-left: 16px;
	}
	ul li input{
		height: 40px;
		width: 240px;
		border: none;
		outline: none;
	}
	.item_user_address_right{
		width: 13px;
		height: 20px;
		float: right;
		margin-top: 20px;
		margin-right: 16px;
	}
	ul li div{
		display: inline-block;
		border: 1px solid #e5e5e5;
		height: 40px;
		width: 50px;
		margin-top: 10px;
		text-align: center;
		line-height: 40px;
		border-radius: 25px;
	}
	ul li .selected{
		border: 1px solid #E3007F;
		color: #E3007F;
	}
	.saveAddr{
		width: 50%;
		height: 40px;
		background-color: #E3007F;
		margin: 20px auto;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 15px;
		border: 1px solid #fff;
		border-radius: 25px;
	}
</style>