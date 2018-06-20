<template>
    <div id="app">
        <!--内容区-->
		<transition appear name="ani" mode="out-in">
			<router-view></router-view>
		</transition>

        <!-- 底部 -->
        <footer-guide v-show="$route.meta.footShow"></footer-guide>
    </div>
</template>

<script>

import footerGuide from './components/Footer/Footer.vue'

export default {
    data(){
        return {

        }
    },
    components: {
        footerGuide
    },
    created(){
        this.getFoods();
    },
    methods: {
        getFoods (){
            this.$store.dispatch('getAddress');
            // reqFoodCategorys().then(function(data){
            //     console.log(1)
            // }).catch(function(data){     //没有服务走这里
            //     console.log(2)
            // })
        }
    },
    mounted(){
        
    }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app 
    height 100%
    width 100%
    background #fff
    position relative
    // border 1px solid #333
</style>
