
const city = {template: '<citylist></citylist>'}
const logins = {template: 
					`<div>
						<pubtitle title="会员登录" Rval="注册" num="2"></pubtitle>	
					    <login-input></login-input>
				    </div>`
				}
const register = {template: 
	`<div>
		<pubtitle title="会员登录"></pubtitle>	
	    <register></register>
    </div>`
}
const userInfo = {template: 
	`<div>
		<pubtitle num="2"></pubtitle>
		<userInfo></userInfo>	
    </div>`
}
const myorder = {template: 
	`<div>
		<pubtitle title="我的订单"></pubtitle>
    </div>`
}
const myaccount = {template: 
	`<div>
		<pubtitle title="我的账户"></pubtitle>
    </div>`
}
const discounts = {template: 
	`<div>
		<pubtitle title="我的优惠"></pubtitle>
    </div>`
}
const address = {template: 
	`<div>
		<pubtitle title="我的地址"></pubtitle>
    </div>`
}
const set = {template: 
	`<div>
		<pubtitle title="设置"></pubtitle>
		<set></set>
    </div>`
}
const message = {template: 
	`<div>
		<pubtitle title="消息"></pubtitle>
    </div>`
}
const service = {template: 
	`<div>
		<pubtitle title="客服"></pubtitle>
    </div>`
}
const shoppingcart = {template: 
	`<div>
		<pubtitle title="购物车"></pubtitle>
    </div>`
}
const router = new VueRouter({
	routes:[
		{
			path:"/city",
			component:city
		},
		{
			path:"/login",
			component:logins
		},
		{
			path:"/register",
			component:register
		},
		{
			path:"/userInfo",
			component:userInfo
		},
		{
			path:"/myorder",
			component:myorder
		},
		{
			path:"/myaccount",
			component:myaccount
		},
		{
			path:"/discounts",
			component:discounts
		},
		{
			path:"/set",
			component:set
		},
		{
			path:"/message",
			component:message
		},
		{
			path:"/address",
			component:address
		},
		{
			path:"/service",
			component:service
		},
		{
			path:"/shoppingcart",
			component:shoppingcart
		}
	]
})
// const cityRouter = new Vue({
//   router
// }).$mount('#app').
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };
// const router = new VueRouter({
// 	routes:[
// 		{
// 			path:"/foo",
// 			component:Foo
// 		},
// 		{
// 			path:"/bar",
// 			component:Bar
// 		}
// 	]
// });
// const app2 = new Vue({
//   router
// }).$mount('#app')