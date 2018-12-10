<template>
	<div class="routerView">
		<p class="sel_city">选择所需服务的地区</p>
		<div class="line-red"></div>
		<div class="cityList" v-for="city in cityList" @click="selCity(city.id,city.name)">
			{{city.name}}
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:"city",
		data:function(){
			return{
				cityList:""
			}
		},
		methods:{
			getCityList:function(){
				var city = this;
				var params = {
			        fields: {
			            createdAt: false,
			            updatedAt: false
			        },
			        where: {},
			        skip: 0,
			        limit: 50
			    }
			    var url = 'http://d.apicloud.com/mcm/api/supportArea?filter=' + JSON.stringify(params);
			    axios.get(url,{headers: {
	            "X-APICloud-AppId": "A6921544633372",
	            "X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
		        }}).then(function(res){
		        		//console.log(res.data)
		        		city.cityList = res.data
		        	},function(){
		        		console.log("请求失败")
		        	}
	        	)
			},
			selCity(id,name){
				var cityInfo = {cityName:name,cityId:id}
				this.$store.commit("setCityInfo",cityInfo)
				window.localStorage.setItem("cityInfo",JSON.stringify(cityInfo))
				//this.$router.push({name:"main",params:{cityName:name,cityId:id}});
				this.$router.push("/");
			}
		},
		created:function(){
			this.getCityList();
			document.body.style.overflow = "hidden"
		},
		beforeDestroy:function(){
			document.body.style.overflow = "auto"
		}
	}
</script>
<style>
	@import "../css/City.css"
</style>