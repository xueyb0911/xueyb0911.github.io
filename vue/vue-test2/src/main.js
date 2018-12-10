
var app = new Vue({
	el:"#app",
	router,
	provide(){
		return{
			reload:this.reload
		}
	},
	data:{
		wareTypeList:[{
            "id": "56c80da883af652643474b6b",
            "name": "水果",
            "selected": true,
            "banner": {
                "url": "http://7y0hol.com1.z0.glb.clouddn.com/apicloud/f761997f8fd33af25af5354737e37bcc.png",
                "id": "57f63bdf0d3febfe58585568"
            }
        }, {
            "id": "56c80db78d04c83d3d1dedea",
            "name": "食材",
            "selected": false,
            "banner": {
                "url": "http://7y0hol.com1.z0.glb.clouddn.com/apicloud/be93f9fdeda576ad81d0c728528cef50.png",
                "id": "57f63be70d3febfe5858556c"
            }
        }, {
            "id": "56c80dc031da9e480de1cb49",
            "name": "零食",
            "selected": false,
            "banner": {
                "url": "http://7y0hol.com1.z0.glb.clouddn.com/apicloud/be93f9fdeda576ad81d0c728528cef50.png",
                "id": "57f63bec9592b3fc6a341b59"
            }
        }, {
            "id": "56c80dc383af652643474b6d",
            "name": "牛奶",
            "selected": false,
            "banner": {
                "url": "http://7y0hol.com1.z0.glb.clouddn.com/apicloud/f761997f8fd33af25af5354737e37bcc.png",
                "id": "57f63bf0c6f05d0956108828"
            }
        }, {
            "id": "56c80dc88d04c83d3d1dedf3",
            "name": "蔬菜",
            "selected": false,
            "banner": {
                "url": "http://7y0hol.com1.z0.glb.clouddn.com/apicloud/be93f9fdeda576ad81d0c728528cef50.png",
                "id": "57f63bf39592b3fc6a341b5d"
            }
        }],
        dataList:[], //产品列表
        buyCount:[], //购买产品列表
        message:"加载更多...",
        selectedId:"", //选中产品类型id
        skip:0,   //开始笔数
        routerStyle:{
        	height: window.innerHeight + "px"
        },      
        cityInfo:{
        	cityName:"北京市",
        	cityId:"56c80e0c789b068408ab5a6f"
        }
	},
	methods:{
		reload:function(){
			this.isRouterActive = false;
			this.$nextTick(function(){
				this.isRouterActive = false;
			})
		},
		toLogin:function(){
			// this.$router.push('/login')
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
		            supportAreaId: this.cityInfo.cityId,
		            wareTypeId: this.selectedId
		        },
		        skip: this.skip,
		        limit: 5
		    };
		    var url = "http://d.apicloud.com/mcm/api/ware?filter=" + JSON.stringify(params);
		    // console.log(url);
		    axios.get(url,{headers: {
            "X-APICloud-AppId": "A6921544633372",
            "X-APICloud-AppKey": "2672b5911d8551540c1ea598e01c87fee217a1e5.1482500122476"
       		}}).then(function(res){
		    	// console.log(res.data);
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
		setMenuIndex:function(key){
			var id = "";
			for(i = 0; i < this.wareTypeList.length; i++) {
				if (key == i){
					this.wareTypeList[i].selected = true;
					id = this.wareTypeList[i].id
				}else{
					this.wareTypeList[i].selected = false;
				}
			}
			this.selectedId = id;
			this.getData(false);			
		},
		addCount:function(id,price){
			var having = false;
			for(i = 0; i < this.buyCount.length; i++){
				if(this.buyCount[i].id == id){
					this.buyCount[i].count += 1;
					having = true;
				}
			}	
			if(!having){
				this.buyCount.push({id:id,count:1,price:price});
			}
			// console.log(this.buyCount)
			window.localStorage.setItem("buyCountList",JSON.stringify(this.buyCount))
		},
		delCount:function(id){
			// var having = false;
			for(i = 0; i < this.buyCount.length; i++){
				if(this.buyCount[i].id == id){
					this.buyCount[i].count -= 1;
					// having = true;
				}
			}	
			window.localStorage.setItem("buyCountList",JSON.stringify(this.buyCount))
			// if(!having){
			// 	this.buyCount.push({id:id,count:0});
			// }
		},
		isShow:function(id){
			var having = false;
			for(i = 0; i < this.buyCount.length; i++){
				if(this.buyCount[i].id == id && this.buyCount[i].count > 0){
					having = true;
				}
			}
			return having;	
		},
		loadMore:function(){
			var self = this;
			window.addEventListener('scroll',function(){
				// <!DOCTYPE html>
				// document.body.scrollTop获取滚动的高度,如果指定<!DOCTYPE html>需改为document.documentElement.scrollTop
				let scrollTop = document.documentElement.scrollTop; //滚动高度  
				let windowH = window.innerHeight;   //窗口的文档显示区的高度
				let scrollH = document.documentElement.scrollHeight;  //所有内容的高度
				if(scrollH - windowH - scrollTop == 0){
					self.getData(true);
				}
			})
		},
		// loadMoreUp:function(){
		// 	var self = this;
		// 	window.addEventListener('scroll',function(){
		// 		let scrollTop = document.documentElement.scrollTop; //滚动高度				
		// 		if(scrollTop == 0){
		// 			self.getData(false);
		// 		}
		// 	})
		// }
		// chagneCityName:function(name){
		// 	console.log(name)
		// }
		changeCityName:function(){
			var cityInfo = window.localStorage.getItem("cityInfo") || ""
	    	if (cityInfo == ""){
	    		this.cityInfo = {cityName:"北京市",cityId:"56c80e0c789b068408ab5a6f"}
	    	}else{
		    	this.cityInfo = JSON.parse(cityInfo)
	    	}
	    	this.getData(false)		
		}
	},
	filters:{
		showBuyCount:function(val,id){
			var count = 0;
			// 不能用this
			for(i = 0; i < app.buyCount.length; i++){
				if(app.buyCount[i].id == id){
					count = app.buyCount[i].count;
				}
			}
			return count;
		}
	},
	computed:{
		allBuyCount:function(){
			var allCount = 0;
			for(i = 0; i < this.buyCount.length; i++){
				allCount += this.buyCount[i].count
			}
			return allCount;
		},
		allPrice:function(){
			var allPrice = 0;
			for(i = 0; i < this.buyCount.length; i++){
				allPrice += this.buyCount[i].count * this.buyCount[i].price
			}
			allPrice = Math.round(allPrice * 10)/10;
			return allPrice;
		}
	},
	watch:{
		$route(to,from){
		    console.log(to.path);
		    if (to.path == "/city"){
			    document.body.style.overflow = "hidden";
		    }else if(to.path == "/"){
			    // this.cityName = window.localStorage.getItem("cityName")	|| "北京市"  
			    document.body.style.overflow = "auto";
			    this.changeCityName()
		    }
		}
	},
	// 初始化页面之后
	mounted:function(){
		var buyCountList = window.localStorage.getItem("buyCountList");
		// console.log(buyCountList)
		this.buyCount = JSON.parse(buyCountList) || []
		this.setMenuIndex(0)
		this.loadMore()		
		this.changeCityName()
		// this.loadMoreUp()
		// this.$router.go(0)
		
	},
	// 初始化页面之前
	created:function(){
		// var self = this;
		// window.addEventListener('scroll',function(){
		// 	let scrollTop = document.documentElement.scrollTop; //滚动高度
		// 	let windowH = window.innerHeight;   //窗口的文档显示区的高度
		// 	let scrollH = document.documentElement.scrollHeight;  //所有内容的高度
		// 	if(scrollH - windowH - scrollTop == 0){
		// 		self.getData(true);
		// 	}
		// })
	}
	
}).$mount('#app')
