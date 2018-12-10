<template>
	<div>
		<LoginTitle title="设置"/>
		<div class="setpage"@click="clearCacle()">
			<span>清除缓存</span>
			<img src="../assets/image/arrow_right.png" class="">
		</div>
		<div class="setpage" @click="about()">
			<span>关于</span>
			<img src="../assets/image/arrow_right.png" class="">
		</div>
		<div class="Lbtn"@click="exitLogin()">退出登录</div>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	export default{
		name:"Set",
		components:{
			LoginTitle
		},
		methods:{
			exitLogin:function(){
				var isLogin = confirm("是否退出登录");
				if(isLogin){
					this.$store.state.userName= "";
					window.localStorage.removeItem("loginInfo");
					this.$router.push("/")
				}
			},
			clearCacle:function(){
				this.$store.commit("clearState");
				window.localStorage.clear();
				this.$router.push("/")
			},
			about(){
				this.$router.push("/about")
			}
		}
	}
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	.setpage {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #888;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.setpage span {
		margin-left: 15px;
	}
	.setpage img {
		margin-right: 15px;
	}
	.Lbtn {
		width: 80%;
		height: 50px;
		box-sizing: border-box;
		background-color: #e1017e;
		border: 1px solid #fff;
		margin: 30px 10% 0px 10%;
		border-radius: 15px;
		color: #fff;
		font-size: 18px;
		text-align: center;
		line-height: 50px;
	}
</style>