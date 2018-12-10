<template>
	<div>
		<ul class="order-ul">
			<li class="order-li displayFlex" v-for="(data,key) in imgList" v-bind:class="{orderSelected:data.selected}" @click="changeItems(key)">
				<img v-bind:src="data.name | selectedImg(data.selected,data.selectedName)" alt="">
				<span>{{data.text}}</span>
			</li>
		</ul>
		<myAccountFrame2  :selected = "selectedKey"/>
	</div>
</template>
<script>
	import myAccountFrame2 from "./myAccountFrame2"
	import account_0 from "../assets/image/account_0.png"
	import account_1 from "../assets/image/account_1.png"
	import account_2 from "../assets/image/account_2.png"
	import account_0_select from "../assets/image/account_0_select.png"
	import account_1_select from "../assets/image/account_1_select.png"
	import account_2_select from "../assets/image/account_2_select.png"
	export default{
		name:"myAccountFrame",
		components:{
			myAccountFrame2
		},
		data:function(){
			return{
				imgList:[
					{name:account_0,selectedName:account_0_select,selected:true,text:"充值有礼"},
					{name:account_1,selectedName:account_1_select,selected:false,text:"卡卷兑换"},
					{name:account_2,selectedName:account_2_select,selected:false,text:"账单记录"}
				],
				Style:{
		        	height: (window.innerHeight - 90) + "px"
		        },
		        selectedKey:0
			}
		},
		methods:{
			changeItems:function(id){
				for(var key in this.imgList){
					if(id == key){
						this.imgList[key].selected = true
					}else{
						this.imgList[key].selected = false
					}
				}
				this.selectedKey = id;
			}
		},
		filters:{
			selectedImg:function(name,sel,selName){
				return sel ? selName : name
			}
		}
	}
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	.order-ul{
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		background-color: #F0F0F0;
		padding-left: 16px;
    	padding-right: 16px;
    	text-align: center;
    	display: -webkit-box;
        display: -webkit-flex;
        display: flex;
	}
	.displayFlex{
		display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items:center;
		-moz-align-items:center;
		-ms-align-items:center;
		-o-align-items:center;
		align-items:center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-ms-justify-content: center;
		-o-justify-content: center;
		justify-content: center;
	}
	.order-li{
		-webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
		height: 40px;
		font-size: 13px;
		color: #000;
		list-style: none;
		text-align: center;
		line-height: 40px;
		/*border-bottom: 2px solid red;*/
		
	}
	.order-li img{
		width: auto;
		height: 14px;
		margin-right: 20px;
	}
	.orderSelected{
		font-weight: bolder;
        color: #E52992;
        border-bottom: 2px solid #E52992;
	}
</style>