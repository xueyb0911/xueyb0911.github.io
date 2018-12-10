const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const router = new VueRouter({
	routes:[
		{
			path:"/foo",
			component:Foo
		},
		{
			path:"/bar",
			component:Bar
		}
	]
});
// const app2 = new Vue({
//   router
// }).$mount('#app')