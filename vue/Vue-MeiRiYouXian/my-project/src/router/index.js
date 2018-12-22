import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainTitle from '@/components/MainTitle'
import Data from '@/components/Data'
import City from '@/components/City'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Register from '@/components/Register'
import UserInfo from '@/components/UserInfo'
import myOrder from '@/components/myOrder'
import set from '@/components/Set'
import about from '@/components/About'
import myAccount from '@/components/myAccount'
import AccountHelp from '@/components/AccountHelp'
import Discounts from '@/components/Discounts'
import address from '@/components/address'
import addAddress from '@/components/addAddress'
import DetailedAddress from '@/components/DetailedAddress'
import productDetails from '@/components/productDetails'
import shoppingCart from '@/components/shoppingCart'
Vue.component(addAddress.name, addAddress)
// Vue.component(Data.name, Data);
const addAddressComponent = {
    template: `<addAddress :addr="this.$route.params.addr"/>`
}
Vue.component(productDetails.name, productDetails)
const productDetailsComponent = {
    template: `<productDetails :id="this.$route.params.id"/>`
}

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
            path: 'city',
            name: 'city',
            component: City
        }]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    }, {
        path: '/userinfo',
        component: UserInfo
    }, {
        path: '/myorder',
        component: myOrder
    }, {
        path: '/set',
        component: set
    }, {
        path: '/about',
        component: about
    }, {
        path: '/myAccount',
        component: myAccount
    }, {
        path: '/accountHelp',
        component: AccountHelp
    }, {
        path: '/discounts',
        component: Discounts
    }, {
        path: '/address',
        component: address
    }, {
        path: '/addAddress',
        name: "addAddress",
        component: addAddressComponent
    }, {
        path: '/detailedAddress',
        component: DetailedAddress
    }, {
        path: '/productDetails',
        name: "productDetails",
        component: productDetailsComponent
    }, {
        path: '/shoppingCart',
        name: "shoppingCart",
        component: shoppingCart
    }]
})