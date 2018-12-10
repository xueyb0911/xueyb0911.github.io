<template>
	<nav>
		<div v-for="(data,key) in wareTypeList" v-bind:class="{selected:data.selected}" @click="setMenuIndex(key)">{{data.name}}</div>
	</nav>
</template>
<script>
	export default {
	    name: 'Nav',
	    props:["wareTypeList"],
	    methods:{
	    	setMenuIndex:function(key){
	    		for(var index in this.wareTypeList){
	    			if(key == index){
	    				this.wareTypeList[index].selected = true;
	    				this.$emit("sendSelectedId",this.wareTypeList[index].id)
	    			}else{
	    				this.wareTypeList[index].selected = false
	    			}
	    		}
	    	}
	    },
	    created:function(){
    		this.setMenuIndex(0)
    	}
	}
</script>