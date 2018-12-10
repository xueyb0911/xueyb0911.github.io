<template>
	<div class="temp">
		<LoginTitle title="我的优惠卷"/>
		<yhm/>
		<div v-bind:style="hgt">
			<div class="yhj">
				<span class="yhj-span"><span>优惠卷</span></span>
				<div class="yhj-money"><span>50.0</span><span>￥</span></div>
				<div class="yhj-right">
					<p>app新客户50元体验卷</p>
					<p>满99元使用（含运费）</p>
					<p>有效期至2016年10月1日</p>
				</div>
			</div>
			<div class="yhj">
				<span class="yhj-span"><span>优惠卷</span></span>
				<div class="yhj-money"><span>50.0</span><span>￥</span></div>
				<div class="yhj-right">
					<p>app新客户50元体验卷</p>
					<p>满99元使用（含运费）</p>
					<p>有效期至2016年10月1日</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import yhm from "./yhm"
	import LoginTitle from "./LoginTitle"
	export default{
		name:"Discounts",
		components:{
			yhm,LoginTitle
		},
		data:function(){
			return{
				hgt:{
					height:(window.innerHeight - 120) + "px"
				}
			}
		}
	}
</script>
<style>
	.temp{
		background-color:#e5e5e5;
	}
	.yhj{
		width: 90%;
		height: 100px;
		background-image: url(../assets/image/coupon_background.png);
		background-size: 100% 100px;
		background-position: left top;
		background-repeat: no-repeat;
		margin:10px 5% 0px 5%;
		position: relative;
	}
	.yhj .yhj-span{
		color: #E3007F;
		font-size: 12px;
		position: absolute;
		left: 0px;
		top: 0px;
		height: 100px;
		width: 6.4%;
		text-align: center;
	}
	.yhj .yhj-span span{
		display: inline-block;
		width: 13px;
		margin-top: 25px;
	}
	.yhj-money{
		height: 100px;
		margin-left: 8%;
		color: #fff;
		line-height: 100px;
	}
	.yhj-money span:first-child{
		font-size: 25px;			
	}
	.yhj-money span:last-child{
		font-size: 12px;
		position: relative;
		bottom: 10px;
	}
	.yhj .yhj-right{
		color: #fff;
		position: absolute;
		right: 20px;
		top: 0px;
		font-size: 15px;
	}
	.yhj .yhj-right p:first-child{
		font-weight: bold;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.yhj .yhj-right p:last-child{
		margin-top: 10px;
		font-size: 12px;
	}
</style>