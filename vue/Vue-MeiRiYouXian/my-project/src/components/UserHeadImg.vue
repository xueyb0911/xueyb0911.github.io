<template>
	<div>
		<div class="headimg">
			<div @click="selectLocationImg()" v-bind:style="imgUrl | isNull">
				<input type="file" id="selectImg" hidden="true" @change="getFile">
			</div>
		</div>
		<div class="userinfo">
			<p>boread</p>
			<p>积分：0 |余额：￥0</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:"UserHeadImg",
		data:function(){
			return{
				imgUrl:""
			}
		},
		methods:{
			selectLocationImg:function(){
				//调用选择文件控件的点击方法
				document.getElementById("selectImg").click();
			},
			getFile:function(){
				//得到选择的内容
				var file = document.getElementById("selectImg").files[0];
				if(file && (file.type.indexOf("image")) < 0){
					alert("请选择图片！");
					return
				}
				//平台判断
				if (file && window.createObjectURL!=undefined) {  
					this.imgUrl = window.createObjectURL(file);  
				} else if (file && window.URL!=undefined) { // mozilla(firefox)  
				    this.imgUrl = window.URL.createObjectURL(file);  
				} else if (file && window.webkitURL!=undefined) { // webkit or chrome  
				    this.imgUrl = window.webkitURL.createObjectURL(file);  
				}
				var headImgList = JSON.parse(window.localStorage.getItem("headImgList")) || [];
				for(var i = 0; i < headImgList.length; i++){
					if(this.$store.state.userName == headImgList[i].loginName){
						headImg[i].url = this.imgUrl;
						window.localStorage.setItem("headImgList",JSON.stringify(headImg))
						return
					}
				}
				headImgList.push({username:this.$store.state.userName,headImgUrl:this.imgUrl});
				window.localStorage.setItem("headImgList",JSON.stringify(headImgList));
			}
		},
		filters:{
			isNull:function(url){
				return url == "" ? {} : {"background-image":"url(" + url + ")"}
			}
		},
		mounted:function(){
			var headImgList = JSON.parse(window.localStorage.getItem("headImgList")) || []; 
			for(var i = 0; i < headImgList.length; i++){
			 	if(this.$store.state.userName == headImgList[i].username){
						this.imgUrl = headImgList[i].headImgUrl
			 	}
			}
		}
	}
</script>