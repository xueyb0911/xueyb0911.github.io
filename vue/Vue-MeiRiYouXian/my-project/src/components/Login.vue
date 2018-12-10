<template>
	<div>
		<LoginTitle title="会员登录" Rval="注册" url="/register" backUrl="/"/>
		<div>
			<input type="text" class="logininput" placeholder="用户名" v-model="username">
			<input type="password" class="logininput" placeholder="密码" v-model="password">
			<div class="Lbtn"@click="onLogin()">登录</div>
			<div class="wx-login">
				<img src="../assets/image/share_friend.png" alt="">
				<span>使用微信登录</span>
			</div>
		</div>		
	</div>
</template>
<script>
	import axios from 'axios'
	import LoginTitle from "./LoginTitle"
	export default{
		name:"Login",
		components:{
			LoginTitle
		},
		data:function(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			onLogin:function(){
				axios({
					method:"post",
					url:"http://d.apicloud.com/mcm/api/user/login",
					headers:{
						"X-APICloud-AppId": "A6921544633372",
						"X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
					},
					data:{
						"username": this.username,
						"password": this.password
					}
				}).then((res) => {
					//console.log(res.data)
					this.$store.commit("setUserName",{username:this.username});
					window.localStorage.setItem("username",this.username)
					alert("登录成功");
					this.$router.push("/");
				},()=>{
					alert("登录失败，用户名或密码错误")
				})
			}
		}
	}
</script>
<style>
	@import "../css/Login"
</style>