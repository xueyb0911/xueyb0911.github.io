<template>
	<div>
		<LoginTitle backUrl="/"/>
		<UserHeadImg/>
		<UserList/>
		<UserFooter/>
	</div>
</template>
<script>
	import UserHeadImg from "./UserHeadImg"
	import LoginTitle from "./LoginTitle"
	import UserList from "./UserList"
	import UserFooter from "./UserFooter"
	export default{
		name:"UserInfo",
		components:{
			UserHeadImg,LoginTitle,UserList,UserFooter
		}
	}
</script>
<style>
	@import "../css/UserInfo"
</style>