<template>
    <section class="loginContainer">
        <div class="loginInner">
            <div class="login_header">
                <h2 class="login_logo">外卖</h2>
                <div class="login_header_title">
                    <a href="javascript:;" @click="loginType=1" :class="{on : loginType==1}">短信登录</a>
                    <a href="javascript:;" @click="loginType=0" :class="{on : loginType==0}">密码登录</a>
                </div>
            </div>
            <div class="login_content">
                <form @submit.prevent="login">
                    <div :class="{on : loginType==1}">
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="手机号" v-model="phonenum">
                            <button @click="getCode" :disabled="!right_phone" class="get_verification" :class="{right_phone}" >{{codeTime? '还有'+codeTime+'s':'获取验证码'}}</button>
                        </section>
                        <section class="login_verification">
                            <input v-model="code" type="tel" maxlength="8" placeholder="验证码">
                        </section>
                        <section class="login_hint">
                            温馨提示：未注册外卖帐号的手机号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">《用户服务协议》</a>
                        </section>
                    </div>
                    <div :class="{on : loginType==0}">
                        <section>
                            <section class="login_message">
                            <input v-model="name" type="text" maxlength="11" placeholder="手机/邮箱/用户名">
                            </section>
                            <section class="login_verification">
                            <input v-model="pwd" :type="ispassword" maxlength="8" placeholder="密码">
                            <div @click="password = !password" class="switch_button " :class=" password? 'off': 'on'">
                                <div class="switch_circle"></div>
                                <span class="switch_text">...</span>
                            </div>
                            </section>
                            <section class="login_message">
                            <input v-model="captcha" type="text" maxlength="11" placeholder="验证码">
                            <img class="get_verification" src="./images/captcha.svg" alt="captcha">
                            </section>
                        </section>
                    </div>
                    <button class="login_submit">登录</button>
                </form>
                <a href="javascript:;" class="about_us">关于我们</a>
            </div>
            <a href="javascript:" class="go_back" @click="$router.back()">
                <i class="iconfont icon-jiantou2"></i>
            </a>
        </div>

        <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>

    </section>
  
</template>

<script>

import AlertTip from '../../components/AlertTip/AlertTip.vue'

export default {
    data () {
        return {
            alertText: '',
            alertShow: false,

            loginType: 1,   // 1短信登录  0密码登录

            password: true,
            codeTime: 0,

            phonenum: '',
            code: '',
            pwd: '',
            name: '', //手机/邮箱/用户名
            captcha: '', //验证码
            
        }
    },

    computed: {
        right_phone(){
            const {phonenum} = this;
            return /^1\d{10}$/.test(phonenum) 
        },
        ispassword(){
            if(this.password){
                return 'password'
            }else{
                return 'number'
            }
        }
    },

    watch: {
        phonenum (newv, oldv){      //限制只能输入数字
            if( /\D+/g.test(newv) ){
                this.phonenum = newv.replace(/\D+/g, '')
            }
        }


    },

    methods: {

        closeTip(){
            this.alertText ='';
            this.alertShow =false;
        },
        showTip(txt){
            this.alertText =txt;
            this.alertShow =true;
        },

        login(){
            let sendBolean = this.canSend();
            console.log(sendBolean)
        },

        // 数据验证
        canSend(){
            
            if(this.loginType){  // 短信登录
                const {phonenum, code} = this;

                if(!phonenum){
                    this.showTip('请填写手机号码')
                    return false;
                }else if( code.trim().length != 4 ){
                    this.showTip('请填写4位数验证码')
                    return false;
                }
            }else{      //密码登录
                const {name, pwd, captcha} = this;
                

            }
            return true;
        },

        getCode(){     // 发短信
            // 倒计时
            if(!this.codeTime){
                this.codeTime = 30;
                let codeTimeId = setInterval( () => {
                    this.codeTime -- ;
                    if(!this.codeTime){
                        clearInterval(codeTimeId);
                    }
                }, 1000 )

                //发短信

            }
            
        }
    },

    components: {
        AlertTip
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition all .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                  >.switch_circle
                    left 26px
                >.switch_circle
                  transition all .3s
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>