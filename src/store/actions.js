/*
通过mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
  } from './mutation-types'
  import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopRatings,
    reqShopGoods,
    reqShopInfo,
    reqSearchShop
  } from '../api'
  
  export default {

    // 异步获取地址
    getAddress({commit, state}) {
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        reqAddress(geohash).then(function(){

        }).catch(function(data){
            data = {
                "address": "北京市昌平区337省道",
                "city": "北京市",
                "geohash": "40.10038,116.36867",
                "latitude": "40.10038",
                "longitude": "116.36867",
                "name": "昌平区北七家宏福科技园(337省道北)"
            }
            const address = data;
            commit(RECEIVE_ADDRESS, {address})
        })
        
        // // 提交一个mutation
        // if (result.code === 0) {
        //     const address = result.data
        //     commit(RECEIVE_ADDRESS, {address})
        // }
    },
  
    // 异步获取食品分类列表
    getCategorys({commit}) {
        // 发送异步ajax请求
        reqFoodCategorys().then(function(){

        }).catch(function(result){
            result = {
                data: [
                    {
                      id: 1,
                      is_in_serving: true,
                      description: "0元早餐0起送，每天都有新花样。",
                      title: "预订早餐",
                      link: "",
                      image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                      icon_url: "",
                      title_color: "",
                      __v: 0
                    },
                    {
                      id: 65,
                      is_in_serving: true,
                      description: "",
                      title: "土豪推荐",
                      image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                      link: "",
                      icon_url: "",
                      title_color: "",
                      __v: 0
                    },
                    {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 1,
                        is_in_serving: true,
                        description: "0元早餐0起送，每天都有新花样。",
                        title: "预订早餐",
                        link: "",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                      {
                        id: 65,
                        is_in_serving: true,
                        description: "",
                        title: "土豪推荐",
                        image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
                        link: "",
                        icon_url: "",
                        title_color: "",
                        __v: 0
                      },
                  ]
            }
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        })
        // 提交一个mutation
        //   if (result.code === 0) {
        //     const categorys = result.data
        //     commit(RECEIVE_CATEGORYS, {categorys})
        //   }
    },
  
    // 异步获取商家列表
    getShops({commit, state}) {
        // 发送异步ajax请求
        const {longitude, latitude} = state;
        reqShops(longitude, latitude).then().catch(function(result={}){
            let shops = result.data
            shops = [
                {
                  name: "肯德基",
                  address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
                  id: 1,
                  latitude: 31.38098,
                  longitude: 121.50146,
                  location: [
                    121.50146,
                    31.38098
                  ],
                  phone: "1232313124324",
                  category: "快餐便当/简餐",
                  supports: [
                    {
                      description: "已加入“外卖保”计划，食品安全有保障",
                      icon_color: "999999",
                      icon_name: "保",
                      id: 7,
                      name: "外卖保",
                      _id: "591bec73c2bbc84a6328a1e5"
                    }
                  ],
                  status: 0,
                  recent_order_num: 615,
                  rating_count: 389,
                  rating: 4.6,
                  promotion_info: "他依然有人有人有人有人有人",
                  piecewise_agent_fee: {
                    tips: "配送费约¥5"
                  },
                  opening_hours: [
                    "8:30/20:30"
                  ],
                  license: {
                    catering_service_license_image: "",
                    business_license_image: ""
                  },
                  is_new: true,
                  is_premium: true,
                  image_path: "/img/shop/15c1513a00615.jpg",
                  identification: {
                    registered_number: "",
                    registered_address: "",
                    operation_period: "",
                    licenses_scope: "",
                    licenses_number: "",
                    licenses_date: "",
                    legal_person: "",
                    identificate_date: null,
                    identificate_agency: "",
                    company_name: ""
                  },
                  float_minimum_order_amount: 20,
                  float_delivery_fee: 5,
                  distance: "19.5公里",
                  order_lead_time: "40分钟",
                  description: "好吃的",
                  delivery_mode: {
                    color: "57A9FF",
                    id: 1,
                    is_solid: true,
                    text: "蜂鸟专送"
                  },
                  activities: [
                    {
                      icon_name: "减",
                      name: "满减优惠",
                      description: "满30减5，满60减8",
                      icon_color: "f07373",
                      id: 1,
                      _id: "591bec73c2bbc84a6328a1e7"
                    }
                  ],
                }
              ]
            commit(RECEIVE_SHOPS, {shops})
        })
        // 提交一个mutation
        // if (result.code === 0) {
        //     const shops = result.data
        //     commit(RECEIVE_SHOPS, {shops})
        // }
    },
  
    // 同步记录用户信息
    recordUser({commit}, userInfo) {
      commit(RECEIVE_USER_INFO, {userInfo})
    },
  
    // 异步获取用户信息
    async getUserInfo({commit}) {
      const result = await reqUserInfo()
      if (result.code === 0) {
        const userInfo = result.data
        commit(RECEIVE_USER_INFO, {userInfo})
      }
    },
  
    // 异步登出
    async logout({commit}) {
      const result = await reqLogout()
      if (result.code === 0) {
        commit(RESET_USER_INFO)
      }
    },
  
    // 异步获取商家信息
    async getShopInfo({commit}) {
      const result = await reqShopInfo()
      if (result.code === 0) {
        const info = result.data
        commit(RECEIVE_INFO, {info})
      }
    },
  
    // 异步获取商家评价列表
    async getShopRatings({commit}, callback) {
      const result = await reqShopRatings()
      if (result.code === 0) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})
        // 数据更新了, 通知一下组件
        callback && callback()
      }
    },
  
    // 异步获取商家商品列表
    async getShopGoods({commit}, callback) {
      const result = await reqShopGoods()
      if (result.code === 0) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        // 数据更新了, 通知一下组件
        callback && callback()
      }
    },
  
    // 同步更新food中的count值
    updateFoodCount({commit}, {isAdd, food}) {
      if (isAdd) {
        commit(INCREMENT_FOOD_COUNT, {food})
      } else {
        commit(DECREMENT_FOOD_COUNT, {food})
      }
    },
  
    // 同步清空购物车
    clearCart({commit}) {
      commit(CLEAR_CART)
    },
  
    // 异步获取商家商品列表
    async searchShops({commit, state}, keyword) {
  
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqSearchShop(geohash, keyword)
      if (result.code === 0) {
        const searchShops = result.data
        commit(RECEIVE_SEARCH_SHOPS, {searchShops})
      }
    },
  }