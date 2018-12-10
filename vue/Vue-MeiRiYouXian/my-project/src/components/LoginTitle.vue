<template>
	<header>
		<h1>{{title}}</h1>
		<div class="back" @click="Lfun()"></div>
		<div class="register" @click="Rfun()" v-if="isNull">{{Rval}}</div>
	</header>
</template>
<script>
	export default{
		name:"LoginTitle",
		props:["title","Rval","url","backUrl"],
		methods:{
			Lfun:function(){
				if(this.backUrl){
					this.$router.push(this.backUrl)
				}else{
					this.$router.go(-1)
				}
			},
			Rfun:function(){
				this.$router.push(this.url)
			}
		},
		computed:{
			isNull:function(){
				return this.Rval ? true : false;
			}
		}
	}
</script>
<style>
	header {
		width: 100%;
		height: 50px;
		background-color: #e1017e;
	}
	.back {
		width: 50px;
		height: 50px;
		background-image: url(../assets/image/back.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 10px;
		position: absolute;
	    top: 0px;
	    left: 0;
	}
	header h1 {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 50px;
		text-align: center;
		font-size: 18px;
		color: #fff;
		line-height: 50px;
	}
	header .register{
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0px;
		right: 0px;
		/*border: 1px solid #000;*/
		font-size: 16px;
		color: #fff;
		line-height: 50px;
		cursor: pointer;
	}
</style>