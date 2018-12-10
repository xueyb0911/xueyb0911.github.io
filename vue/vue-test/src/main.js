
Vue.component("alert",{
	props:['msg'],
	template:'<button @click="alertMsg()">{{msg}}</button>',
	methods:{
		alertMsg:function(){
			alert(this.msg)
		}
	}
});
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});
Vue.component("btn-counter",{
	template:"<button v-on:click='incrementHandler'>{{counter}}</button>",
	data:function(){
		return {
			counter:0
		}
	},
	methods:{
		incrementHandler:function(){
			this.counter +=1;
			this.$emit('increment')
		}
	}
});
// 定义外部Vue对象
var Event = new Vue();
Vue.component("said",{
	template:'<div>花花：<input type="text" v-model="i_said" @keyup="said"></div>',
	data:function(){
		return{
			i_said:""
		}
	},
	methods:{
		said:function(){
			// console.log(this.i_said);
			Event.$emit('huahua_said',this.i_said);
		}
	}
});
Vue.component("h-said",{
	template:'<div>花花说：<input type="text" v-model="h_said"></div>',
	data:function(){
		return{
			h_said:""
		}
	},
	// mounted,初始化完成就触发，
	mounted(){
		// var me=this;
		// Event.$on('huahua_said',function(val){
		// 	me.h_said = val;
		// });
		// es6箭头函数
		Event.$on('huahua_said',(val)=>{
			this.h_said = val;
		});
	}
});
Vue.component("test",{
	template:"#test2"
});
Vue.directive("upper",{
	bind:function(el,binding){
		if(binding.modifiers.color){
			el.style.color = "#0055ff";
		}
		if(binding.modifiers.fs){
			el.style.fontSize = "30px";
		}
		el.innerHTML = binding.value;
		if(binding.arg){
			el.style.backgroundColor = "#e5e5e5";
		}
		console.log(binding.arg)
	}
});
Vue.directive('runoob', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
});

var myMixin = {
	// 初始化执行
	// created:function(){
	// 	this.startmixin()
	// },
	methods:{
		startmixin:function(){
			alert("mixin")
		}
	}
}

var child = {template:'<p>局部组件</p>'};


var app = new Vue({
	el:"#app",
	router,
	components:{
		'child':child,
		methods:{

		}
	},
	mixins:[myMixin],
	data: {
		total:0,
		sites: [
			      { text: 'Runoob' },
			      { text: 'Google' },
			      { text: 'Taobao' }
			    ],
		selectVal:"",
		rtext:"A",
		checked:false,
		checkedNames:[],
		isActive:true,
		hasErr:true,
		msg:"Abcdefg",
		html_msg:"<span>哈哈哈</span>",
		className: true,
		url:"https://www.baidu.com",
		type: "B",
		info:{
				name:"小明",
				sex:"male",
				age:18
			},
		meters:0,
		kilmeters:0,
		Ip_Json: [{
			      id: 1,
			      name: 'iphone 8',
			      price: 5099,
			      count: 1
			    },
              {
                id: 2,
                name: 'iphone xs',
                price: 8699,
                count: 1
              },
              {
                id: 3,
                name: 'iphone xr',
                price: 6499,
                count: 1
              }]
	},
	// 监听
	watch:{
		meters:function(val){
			this.meters = val;
			this.kilmeters = val*1000;
		},
		kilmeters:function(val){
			this.kilmeters = val;
			this.meters = val/1000;
		}
	},
	// 方法
	methods:{
		setName:function(){
			this.name = "小红";
			return this.name
		},
		totalPrice : function(){
	      var totalP = 0;
	      for (var i = 0,len = this.Ip_Json.length;i<len;i++) {
	        totalP+=this.Ip_Json[i].price*this.Ip_Json[i].count;
	      }
	      return totalP;
    	},
    	incrementTotal:function(){
    		this.total +=1;
    	}
	},
	// 过滤器
	filters:{
		toChinese:function(value){
			var sex;
			if (value == "male" ){
				sex = "男";
			}else{
				sex = "女";
			}
			return sex;
		}
	},
	// 计算属性
	computed:{
		reverseStr:{
			// return this.msg.split('').reverse().join('');
			set:function(newVal){
				this.msg = newVal;
			},
			get:function(){
				return this.msg.split('').reverse().join('');
			}
		},
		toUpperCaseStr:function(){
			return this.msg.toUpperCase();
		},
		toLowerCaseStr:function(){
			return this.msg.toLowerCase();
		}
	}

}).$mount('#app');
