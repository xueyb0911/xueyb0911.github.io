<template>
	<div>
		<LoginTitle title="关于我们"/>
		<img src="../assets/image/about.png" class="aboutimg">
		<span class="aboutleft">当前版本</span>
		<span class="aboutright">2.0.2</span>
	    <div class="footerdiv">
			<p class="row">Copyright @ 2014-2015</p>
			<p class="row">北京每日优鲜电子商务有限公司</p>
			<p class="row">beijing missfresh ecommerce Co.,Ltd</p>
	    </div>
	</div>
</template>
<script>
	import LoginTitle from "./LoginTitle"
	export default{
		name:"about",
		components:{
			LoginTitle
		}
	}
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	.aboutimg{
		width: 100px;
		height: 100px;
		margin: 40px auto;
		display: block;
	}
	.aboutleft{
		font-size: 14px;
		margin-left: 15px;
		position: absolute;
	}
	.aboutright{
		font-size: 14px;
		margin-right: 15px;
		float: right;
	}
	.footerdiv{
		width: 100%;
		position: absolute;
		bottom: 0px;
		text-align: center;
	}
	.row{
		position: relative;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: #444;
	}
</style>