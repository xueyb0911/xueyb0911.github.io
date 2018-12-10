<template>
	<div class="temp" :style="hgt">
		<LoginTitle/>
		<div class="yhm">
			<input type="text" placeholder="请输入地址" v-model="addr">
			<button @click="submit">确定</button>
		</div>
		<div>输入匹配地址暂时未实现</div>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	export default{
		name:"DetailedAddress",
		components:{
			LoginTitle
		},
		data:function(){
			return{
				hgt:{
					height:window.innerHeight + "px"
				},
				addr:""
			}
		},
		methods:{
			submit:function(){
				this.$router.push({name:"addAddress",params:{addr:this.addr}})
			}
		}
	}
</script>
<style>
	.temp{
			background-color: #e5e5e5;
		}
	.yhm{
		width: 100%;
		height: 60px;
		background-color: #fff;
		text-align: center;
		line-height: 60px;
		box-sizing: border-box;

	}
	.yhm input{
		width: 60%;
		margin-left: 16px;
		border: 1px solid #fff;
		border-radius: 15px;
		background-color: #e5e5e5;
		height: 30px;
		padding-left: 10px;
		outline:none;
	}
	.yhm button{
		width: 60px;
		height: 30px;
		color: #000;
		background-color: #fff;
		border: 1px solid #000;
		border-radius: 15px;
		margin-left: 10px;
	}
</style>