<template>
    <div class="home-section msite">
        
        <!-- 头部 -->
        <comm-head :title="dress">
            <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </comm-head>
        
        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container" v-if="categorys.length">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(arr, n) in categorysArray" :key="n">
                        <a href="javascript:" class="link_to_food" v-for="(item, k) in arr" :key="k">
                            <div class="food_container">
                                <img :src="baseImageUrl+item.image_url">
                            </div>
                            <span v-text="item.title+n"></span>
                        </a>
                    </div>
                </div>
                
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <div v-else>
                <img src="./images/msite_back.svg" alt="">
            </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>y
                <span class="shop_header_title">附近商家</span>
            </div>
            <shopList></shopList>
        </div>
      
        <div id="XSDFXPage" class="XSDFXPage"></div>
    </div>
    
</template>

<script>

import commHead from '../../components/headTop/headTop.vue'
import shopList from '../../components/shopList/shopList.vue'
import {mapState, mapActions} from 'vuex'

import BMap from 'BMap'
import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'

console.log(BMap, '引入地图成功！')

import  'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
    data() {
        return {
            baseImageUrl: 'https://fuss10.elemecdn.com',
            swiper: null,
            dress: ''
        };
    },

    components: {
        commHead,
        shopList
    },

    

    created() {
        this.getCategorys();
        
    },
    mounted(){
        setTimeout(()=>{
            this.setMap();
        }, 2000)
    },

    watch: {
        categorys(v){
            this.$nextTick( () => {   // 页面更新完成调用
                this.swiper = new Swiper('.swiper-container',{
                    loop: false,
                    grabCursor : true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                })
            })
        }
    },

    computed: {
        ...mapState(['address', 'categorys']),
        categorysArray(){
            const {categorys} = this;
            var arr = [], minarr=[];
            categorys.forEach(c => {
                minarr.push(c);
                if(minarr.length===7+1){
                    arr.push(minarr);
                    minarr=[]; 
                }
            });

            if(minarr.length!== 7+1){
                arr.push(minarr);
            }

            // this.$nextTick( () => {   // 页面更新完成调用
            //     this.swiper = new Swiper('.swiper-container',{
            //         loop: false,
            //         grabCursor : true,
            //         pagination: {
            //             el: '.swiper-pagination'
            //         },
            //     })
            // })
            return arr;
        }


    },
    
    methods: {
        ...mapActions(['getCategorys']),
        setMap(){
            let {map} = this;
            var _this = this;
            // 百度地图API功能
            map = new BMap.Map("XSDFXPage");
            var point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(point, 12);
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    // _this.dress = (r.address.city + r.address.district + r.address.street + r.address.street_number);
                    _this.dress = (r.address.district + r.address.street + r.address.street_number);
                }else {
                    alert('failed'+this.getStatus());
                }        
            },{enableHighAccuracy: true})
            // this.map = map;
        }
        
    },
    destroyed(){
        document.documentElement.scrollTop=document.body.scrollTop=0
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
        @import "../../common/stylus/mixins.styl"
        .msite  
          width 100%
          .msite_nav
            // bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px


</style>












