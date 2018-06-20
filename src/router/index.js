import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/Home/Home.vue'
import search from '../pages/Search/Search.vue'
import order from '../pages/Order/Order.vue'
import profile from '../pages/Profile/Profile.vue'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'


Vue.use(Router)



export default new Router({
    routes: [
        {path: '/home',	component: home, meta: { footShow: true } },
        {path: '/search',	component: search, meta: { footShow: true } },
        {path: '/order',	component: order, meta: { footShow: true } },
        {path: '/profile',	component: profile, meta: { footShow: true } },
        {path: '/login',	component: Login},
        
        {path:'/', redirect:'/home'}  	//重定向  
        
    ],
    linkActiveClass: 'on'		//路由高亮类   

})
