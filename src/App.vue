<template>
    <div id="app">
        <!--内容区-->
		<transition appear name="ani" mode="out-in">
			<router-view></router-view>
		</transition>

        <!-- 底部 -->
        <footer-guide></footer-guide>
    </div>
</template>

<script>

import footerGuide from './components/Footer/Footer.vue'
// console.log(footerGuide)
export default {
    data(){
        return {

        }
    },
    components: {
        footerGuide
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
