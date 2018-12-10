<template>
	<div>
		<div class="distpickerDiv" :style="hgt" @click="hideDistpicker"></div>
		<div class="distpicker">
			<v-distpicker type="mobile" @province="changeProvince" @city="changeCity" @area="changeArea"></v-distpicker>
		</div>
	</div>
</template>
<script>
	import VDistpicker from 'v-distpicker'
	export default{
		name:"distpicker",
		components:{
			VDistpicker
		},
		data:function(){
			return{
				hgt:{
					height:(window.innerHeight - 300) + "px"
				},
				province:'',
				city:''
			}
		},
		methods:{
			hideDistpicker:function(){
				this.$emit("hideDistpicker")
			},
			changeProvince(data) {
                this.province = data.value;
            },
            changeCity(data) {
                this.city = data.value;
            },
            changeArea(data) {
                let distpickerVal = this.province + this.city + data.value;
                //console.log(distpickerVal)
                this.$emit("distpickerVal",distpickerVal)
            }
        }
	}

</script>
<style scoped>
	.distpickerDiv{
		width:100%;
		background-color:#000;
		position:fixed;
		top:0px;
		opacity:0.5;

	}
	.distpicker{
		width:100%;
		height:300px;
		overflow:auto;
		position:fixed;
		bottom:0px;
		opacity:1;
		background-color:#fff;
	}
</style>