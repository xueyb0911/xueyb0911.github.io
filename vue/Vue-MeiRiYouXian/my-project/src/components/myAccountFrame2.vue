<template>
	<div v-bind:style="hgt" style="background-color:#e5e5e5">
		<div v-if="selected == 0">
			<div class="czyl-div">
				<div class="czyl-img-top">
					<div class="czyl-money">
						<span>999</span>
						<div><p>￥</p><p>余额</p></div>
						<span>另送100元</span>
					</div>
					<div class="czyl-img-rgt"><div>充就送</div></div>
				</div>
				<div class="czyl-img-btm"><div>购买</div></div>
			</div>
			<div class="czyl-div">
				<div class="czyl-img-top">
					<div class="czyl-money">
						<span>999</span>
						<div><p>￥</p><p>余额</p></div>
						<span>另送100元</span>
					</div>
					<div class="czyl-img-rgt"><div>充就送</div></div>
				</div>
				<div class="czyl-img-btm"><div>购买</div></div>
			</div>
		</div>
		<yhm v-if="selected == 1" />
		<div  v-if="selected == 2">
			aaaa
		</div>
	</div>
</template>
<script>
	import yhm from "./yhm"
	export default{
		name:"myAccountFrame2",
		props:["selected"],
		components:{
			yhm
		},
		data:function(){
			return{
				hgt:{
					height:(window.innerHeight - 210) + "px"
				}
			}
		}
	}
</script>
<style>
	.czyl-div{
		width: 50%;
		float: left;
		padding: 10px;
		box-sizing: border-box;
	}
	.czyl-img-top .czyl-money{
		position: absolute;
		top: 0px;
		margin:25px;
		color: #fff;
		text-align: center;
	}
	.czyl-img-top .czyl-money span:first-child{
		font-size: 25px;
		font-weight: bold;
		margin-right: 0px;
		vertical-align: middle;
	}
	.czyl-img-top .czyl-money span:last-child{
		font-size: 15px;
		display: block;
		margin-top: 10px;
	}
	.czyl-img-top .czyl-money div{
		font-size: 12px;
		display: inline-block;
		vertical-align: middle;
		text-align: left;
	}
	.czyl-img-rgt div{
		position: absolute;
		top: 10px;
		right: 2px;
		color: #FE6100;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		font-size: 12px;
	}
	.czyl-img-top{
		width: 100%;
		height: 120px;
		background-image: url(../assets/image/recharge_top.png);
		background-position: left top;
		background-size: 100% 120px;
		background-repeat: no-repeat;
		position: relative;
	}
	.czyl-img-btm{
		width: 100%;
		height: 40px;
		background-image: url(../assets/image/recharge_bottom.png);
		background-position: left top;
		background-size: 100% 40px;
		background-repeat: no-repeat;
		position: relative;
	}
	.czyl-img-btm div{
		position: absolute;
		bottom: 0px;
		width: 80%;
		height: 30px;
		margin: 5px 10%;
		background-image: url(../assets/image/recharge_button.png);
		background-position: center;
		background-size: 100%;
		background-repeat: no-repeat;
		text-align: center;
		color: #fff;
		font-size: 15px;
		line-height: 30px;
	}
	.czyl-img-rgt{
		width: 100%;
		height: 50px;
		background-image: url(../assets/image/recharge_tag.png);
		background-position: right top;
		background-size: 50px;
		background-repeat: no-repeat;
		position: absolute;
		top: 0px;
		right: 0px;
	}
</style>