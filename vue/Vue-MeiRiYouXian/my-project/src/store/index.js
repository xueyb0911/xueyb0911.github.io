import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let cityInfo = JSON.parse(window.localStorage.getItem("cityInfo")) || []
let buyCountList = JSON.parse(window.localStorage.getItem("buyCountList")) || []
let userName = window.localStorage.getItem("username") || ""
let store = new Vuex.Store({
	state:{
		buyCount:buyCountList,
		cityInfo:cityInfo,
		userName:userName,
		addressInfo:[]
	},
	mutations:{
		setBuyCount:function(state,buyCount){
			state.buyCount = buyCount
		},
		setCityInfo:function(state,cityInfo){
			state.cityInfo = cityInfo
		},
		setUserName:function(state,payload){
			state.userName = payload.username
		},
		setAddressInfo:function(state,addressInfo){
			state.addressInfo = addressInfo
		},
		clearState:function(state,payload){
			state.buyCount = []
			state.cityInfo = []
			state.userName = []
		}
	},
	getters:{
		getBuyCount:function(state){
			return state.buyCount
		}
	}
});
export default store