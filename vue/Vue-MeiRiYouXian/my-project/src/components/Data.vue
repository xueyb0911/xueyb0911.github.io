<template>
	<div class="app">
		<WareType v-on:sendSelectedIdToData="getSelectedId"/>
		<List v-bind:dataList="dataList"/>
		<div class="more_data">{{message}}</div>
		<Minicart @click.native="goToNext"/>
	</div>
</template>
<script>
	import axios from 'axios'
	import WareType from "./WareType"
	import List from "./List"
	import Minicart from "./Minicart"

	export default {
	    name: 'Data',
	    props:["cityId"],
	    components:{
			WareType,List,Minicart
		},
		data:function(){
			return{
		        selectedId:"", //选中产品类型id
		        dataList:[],
				skip:0,   //开始笔数
				message:"加载更多...",
			}
		},
		methods:{
			getSelectedId:function(id){
				this.selectedId = id
				this.getData()
			},
			getData:function(loadMore){
				var me = this;
				if(loadMore){
					this.skip += 5
				}else{
					this.skip = 0
				}
				var params = {
			        fields: {},
			        where: {
			            supportAreaId: this.$store.state.cityInfo.cityId,
			            wareTypeId: this.selectedId
			        },
			        skip: this.skip,
			        limit: 5
			    };
			    var url = "http://d.apicloud.com/mcm/api/ware?filter=" + JSON.stringify(params);
			    //console.log(url);
			    axios.get(url,{headers: {
	            "X-APICloud-AppId": "A6921544633372",
	            "X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
	       		}}).then(function(res){
			    	//console.log(res.data);
			    	if(loadMore){
			    		me.dataList = me.dataList.concat(res.data);
			    	}else{
				    	me.dataList = res.data;
			    	}
			    	if (res.data.length < 5){
			    		me.message = "没有啦！"
			    	}
			    },function(){
			    	console.log("请求失败")
			    })
			},
			goToNext:function(){
				this.$router.push("/shoppingCart")
			}
		},
		mounted:function(){
			let self = this;
			window.addEventListener("scroll",function(){
				let scrollTop = document.documentElement.scrollTop; //滚动高度
				let innerH = window.innerHeight; //窗口高度
				let scrollH = document.documentElement.scrollHeight; //所有内容高度
				if(scrollH - innerH - scrollTop == 0){
					self.getData(true) 
				}
			})
			this.getData()
		},
		watch:{
			cityId:function(to,from){
				//console.log(to)
				this.getData()
				
			}
		}
	}
	
</script>
<style>
	@import "../css/Data.css"
</style>