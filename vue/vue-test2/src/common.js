Vue.component("pubtitle",{
	props:["title","Rval","num"],
	template:`<header>
				<h1>{{title}}</h1>
				<div class="back" @click="Lfun()"></div>
				<div class="register" @click="Rfun()" v-if="isNull">{{Rval}}</div>
			 </header>`,
	methods:{
		Rfun:function(){
			if(this.Rval == "注册"){
				this.$router.push("/register")
			}
		},
		Lfun:function(){
			if(this.num){
				window.history.go(-2)
			}else{
				window.history.go(-1)
			}
		}
	},
	computed:{
		isNull:function(){
			return this.Rval ? true : false;
		}
	}
});
