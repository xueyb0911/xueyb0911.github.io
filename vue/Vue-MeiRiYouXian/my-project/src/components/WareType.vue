<template>
	<div>
		<Nav v-bind:wareTypeList="wareTypeList" v-on:sendSelectedId="getSelectedId" />
		<Banner v-bind:wareTypeList="wareTypeList" />
	</div>
</template>
<script>
	import Nav from "./Nav"
	import Banner from "./Banner"
	export default {
	    name: 'WareType',
	     components:{
			Nav,Banner
		},
	    data:function(){
	    	return{
	    		wareTypeList:[{
		            "id": "56c80da883af652643474b6b",
		            "name": "水果",
		            "selected": false,
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
		        }]
	    	}
	    },
	    methods:{
	    	getSelectedId:function(id){
	    		this.$emit("sendSelectedIdToData",id)
	    	}
	    }
	}
	
</script>