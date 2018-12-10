<template>
	<div style="background-color: #F0F0F0;">
		<LoginTitle title="我的订单"/>
		<ul class="order-ul">
			<li class="order-li displayFlex" v-for="(data,key) in imgList" v-bind:class="{orderSelected:data.selected}" @click="changeItems(key)">
				<img v-bind:src="data.name | selectedImg(data.selected,data.selectedName)" alt="">
				<span>{{data.text}}</span>
			</li>
		</ul>
		<div class="empty" v-bind:style="emptyStyle"></div>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	import myorder_0 from "./../assets/image/myorder_0.png"
	import myorder_1 from "./../assets/image/myorder_1.png"
	import myorder_2 from "./../assets/image/myorder_2.png"
	import myorder_0_select from "./../assets/image/myorder_0_select.png"
	import myorder_1_select from "./../assets/image/myorder_1_select.png"
	import myorder_2_select from "./../assets/image/myorder_2_select.png"
	export default{
		name:"myOrder",
		components:{
			LoginTitle
		},
		data:function(){
			return{
				imgList:[
					{name:myorder_0,selectedName:myorder_0_select,selected:true,text:"代付款"},
					{name:myorder_1,selectedName:myorder_1_select,selected:false,text:"代收款"},
					{name:myorder_2,selectedName:myorder_2_select,selected:false,text:"已完成"}
				],
				emptyStyle:{
		        	height: (window.innerHeight - 90) + "px"
		        }
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
	.empty{
		width: 100%;
		background-image: url(../assets/image/myorder_empty.png);
		background-size: 100px;
		background-position: center;
		background-repeat: no-repeat;
	}
	.orderSelected{
		font-weight: bolder;
        color: #e3007f;
        border-bottom: 2px solid #e3007f;
	}
</style>