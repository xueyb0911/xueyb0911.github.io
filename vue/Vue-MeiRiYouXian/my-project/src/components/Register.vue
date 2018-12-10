<template>
	<div>
		<LoginTitle title="会员注册"/>
		<div class="login-div">
			<input type="text" class="logininput" placeholder="用户名" v-model="username">
			<input type="password" class="logininput" placeholder="密码" v-model="password">
			<div class="Lbtn"@click="onRegister()">注册</div>
		</div>
	</div>
			
</template>
<script>
	import axios from 'axios'
	import LoginTitle from "./LoginTitle"
	export default{
		name:"Register",
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
			onRegister:function(){
				if(this.username == "" || this.password == ""){
					alert("请输入用户名和密码！");
					return
				}
				let url = "https://d.apicloud.com/mcm/api/user";
				let data = {"username": this.username,"password": this.password};
				axios({
					method: 'post',
					url: 'https://d.apicloud.com/mcm/api/user',
					headers: {
						"X-APICloud-AppId": "A6921544633372",
						"X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
					},
					data: data
				}).then((res)=>{
					if(res.data && res.data.id){
						alert("注册成功");
						this.$router.push("/login")
					}else if(res.data.status == "202"){
						alert("用户名已被注册，请重新输入");
					}else{
						alert("注册失败");
					}
					//console.log(res.data)
				},()=>{
					alert("注册失败");
				});
			}
		}
	}
</script>
<style>
	@import "../css/Login"
</style>