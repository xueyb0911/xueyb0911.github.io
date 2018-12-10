
// 登录
Vue.component("login-input",{
	template:"#login-input",
	data:function(){
		return{
			username:"",
			password:""
		}
	},
	methods:{
		onLogin:function(){
			// console.log("username=" + this.username)
			// console.log("password=" + this.password)
			// var loginInfo = {username:this.username,password:this.password}
			var registerInfo = window.localStorage.getItem("registerInfo");
			registerInfo = JSON.parse(registerInfo);
			if(registerInfo){
				for(i = 0; i < registerInfo.length; i++){
					if(registerInfo[i].username == this.username && registerInfo[i].password == this.password){
						alert("登录成功！");
						var loginInfo = {loginName:this.username,loginPassword:this.password}
						window.localStorage.setItem("loginInfo",JSON.stringify(loginInfo))
						window.localStorage.setItem("isLogin",true)
						window.history.go(-2);
					}else{
						alert("登录失败，请重新输入")
					}
				}
			}else{
				alert("登录失败，请重新输入")
			}
		}
	}
})
// 注册
Vue.component("register",{
	template:"#register",
	data:function(){
		return{
			username:"",
			password:""
		}
	},
	methods:{
		onRegister:function(){
			// console.log("username=" + this.username)
			// console.log("password=" + this.password)
			if(this.username == "" || this.password == ""){
				alert("请输入用户名和密码");
				return
			}
			var registerInfo = JSON.parse(window.localStorage.getItem("registerInfo")) || [];	
			for(i = 0; i < registerInfo.length; i++){
				if(registerInfo[i].username == this.username){
					alert("用户名已注册，请重新输入");
					return
				}
			}
			registerInfo.push({username:this.username,password:this.password});
			window.localStorage.setItem("registerInfo",JSON.stringify(registerInfo));
			alert("注册成功");
			// this.$router.push("/login")
			window.history.go(-1);
			
		}
	}
})
Vue.component("userInfo",{
	template:"#userinfo",
	data:function(){
		return{
			imgUrl:"",			
		}
	},
	methods:{
		toNextPage:function(val){
			this.$router.push("/" + val);
		},
		selectLocationImg:function(){
			document.getElementById("selectImg").click();
		},
		getFile:function(){
			// console.log(document.getElementById("selectImg").files[0])
			var file = document.getElementById("selectImg").files[0];
			if(file && (file.type.indexOf("image")) < 0){
				alert("请选择图片！");
				return
			}
			// var url = "";   
			if (file && window.createObjectURL!=undefined) {  
				this.imgUrl = window.createObjectURL(file);  
			} else if (file && window.URL!=undefined) { // mozilla(firefox)  
			    this.imgUrl = window.URL.createObjectURL(file);  
			} else if (file && window.webkitURL!=undefined) { // webkit or chrome  
			    this.imgUrl = window.webkitURL.createObjectURL(file);  
			}
			// console.log(url)
			// this.imgUrl = url
			var loginInfo = JSON.parse(window.localStorage.getItem("loginInfo"));
			var headImg = JSON.parse(window.localStorage.getItem("headImg")) || []; 
			for(i = 0; i < headImg.length; i++){
				if(loginInfo.loginName == headImg[i].loginName){
					headImg[i].url = this.imgUrl;
					window.localStorage.setItem("headImg",JSON.stringify(headImg))
					return
				}
			}
			headImg.push({loginName:loginInfo.loginName,url:this.imgUrl});
			window.localStorage.setItem("headImg",JSON.stringify(headImg))
		}
	},
	filters:{
		isNull:function(url){
			// console.log(url)
			return url == "" ? {} : {"background-image":"url(" + url + ")"}
		}
	},
	mounted:function(){
		var loginInfo = JSON.parse(window.localStorage.getItem("loginInfo"));
		var headImg = JSON.parse(window.localStorage.getItem("headImg")) || []; 
		// for(i = 0; i < headImg.length; i++){
		// 	if(loginInfo.loginName == headImg[i].loginName){
		// 		this.imgUrl = headImg[i].url
		// 	}
		// }
	}
})
Vue.component("set",{
	template:"#set",
	methods:{
		exitLogin:function(){
			var isLogin = confirm("是否退出登录");
			// console.log(isLogin)
			if(isLogin){
				window.localStorage.removeItem("loginInfo");
				window.localStorage.setItem("isLogin",false);
				window.history.go(-3)
			}
		}
	}
})
var login = new Vue({
	el:"#login",
	router,
	mounted:function(){
		var isLogin = window.localStorage.getItem("isLogin") || false;
		console.log(isLogin)
		if(isLogin == "true"){
			this.$router.push("/userInfo")
		}else{
			this.$router.push("/login")
		}
	}
}).$mount('#app')