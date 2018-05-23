<template>
    <div class="login-bg">
        <div class="main-pic">
            <a href="javascript:;" class="main-icon">
                <img src="../../assets/login_icon.png" class="img" style="border-radius:50%;">
            </a>
        </div>

        <div class="logo-info">
            <div class="user-name">
                <!--<span v-show="showMsg" class="msg">{{msg}}</span>-->
            </div>
            <div class="user-name">
                <input type="text" name="userCode"
                       v-validate="'required|min:3|max:9|alpha_dash'"
                       @focus="inputFocus" placeholder="请输入账号" v-model="userCode"/>
                <span v-show="errors.has('userCode')" class="help is-danger">{{ errors.first('userCode') }}</span>
            </div>
            <div class="user-name">
                <input type="password"
                       name="password"
                       v-validate="'required|min:3|max:9'"
                       @focus="inputFocus" placeholder="请输入密码" v-model="password"/>
                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
            </div>
            <div style="font-size: .2rem;
                padding: .2rem .2rem 0;
                color:#e63636;position: relative;z-index: 100" class="fr" @click="register">注册账号
            </div>
            <div class="user-name">
                <div class="btn" @click="login">登&nbsp;&nbsp;录</div>
            </div>

        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                userCode: '',
                password: '',
                data: {},
            }
        },
        created() {
        },
        methods: {
            register() {
                this.$router.push('/register')
            },
            login() {
                this.$validator.validateAll().then((result) => {
                    if (!result) {
                        Toast('请正确填完信息!');
                        return;
                    }
                    let body = {
                        userCode: this.userCode,
                        password: this.password
                    };
                    this.$userService.login(body).then(res => {
                        Toast({
                            message: res.msg,
                            iconClass: 'icon iconfont icon-yiliao'
                        });
                        sessionStorage.setItem('loginInfo', JSON.stringify(body));
                        this.$router.push('/recommend');
                    }, error => {
                        Toast({
                            message: error.msg,
                            iconClass: 'icon iconfont icon-shanchu2'
                        });

                    });
                    // node 后台没有启动时候用
                    //sessionStorage.setItem('loginInfo', JSON.stringify(body))
                })
            },
            //获得焦点-----------------------------------
            inputFocus() {
                this.showMsg = false;
            },
        },

    }
</script>
<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>

    .login-bg {
        height: 100%;
        background: url("../../assets/sp_bg_C.jpg") no-repeat;
        background-size: 100% 100%;
        margin-top: px2rem(0px);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 88;
    }

    .img {
        width: 100%;
        display: inline-block;
        height: 100%;
    }

    .logo-header {
        width: 100%;
        padding: .5rem .5rem 0rem;
        background-color: #fff;
        box-sizing: border-box
    }

    .logo-img {
        width: 100%;
    }

    .main-pic {
        width: 100%;
        padding: 1.5rem .3rem 0rem;
        text-align: center;
        box-sizing: border-box
    }

    .main-pic .main-icon {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
    }

    .logo-info {
        width: 100%;
        padding: 0rem .5rem;
        box-sizing: border-box;
    }

    .user-name {
        width: 100%;
        text-align: center;
        padding: .1rem 0rem;
        box-sizing: border-box;
        position: relative;
    }

    .user-pic {
        font-size: 20px;
    }

    .user-name input { /* margin-left:.1rem; */
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #e1e8e7;
        padding: .08rem; /* border-radius: 5px; */
        display: inline-block; /* width:4rem; */
        height: .8rem; /* max-width: 350px; */
        font-size: .35rem;
        -webkit-appearance: none;
        border-radius: 0px !important
    }

    /* .sub {width: 100%;text-align: center;padding:.1rem 0;box-sizing:border-box;}
    .sub input {border: 1px solid #e1e8e7;padding:.05rem;border-radius: 5px;display: inline-block;width:3rem;max-width: 350px;color:#fff;} */
    .user-name .btn { /* padding:.08rem; */
        /* border-radius: 5px; */
        width: 100%;
        box-sizing: border-box;
        display: inline-block; /* width:4rem; */
        height: .8rem; /* max-width: 350px; */
        font-size: .3rem;
        background-color: #2dab9e;
        color: #fff;
        line-height: .8rem;
        margin-top: .4rem;
    }

    .user-name .msg {
        /* margin-left:.1rem; */
        width: 100%;
        padding: .08rem; /* border-radius: 5px; */
        display: inline-block; /* width:4rem; *//* max-width: 350px; */
        font-size: .28rem;
        color: red
    }

    .footer {
        position: fixed;
        bottom: .3rem;
        text-align: center;
        font-size: .24rem;
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    /* .num {border:1px solid #e1e8e7;}
    .num-center {
      font-size: .35rem;
    } */

    /* 验证码的 */
    .usre-img {
        width: 25%;
        height: .8rem;
    }

    .usre-img img {
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    .wx-img-width {
        width: 50%;
    }

    .wx-img-height {
        line-height: .8rem;
        text-align: center;
        font-size: .3rem;
        background-color: #cdc7c7;
        color: #fff;
    }

    .slider-box {
        width: 100%;
        height: 3px;
        border-radius: 10px;
        background: #e9eaec;
        display: inline-block;
        position: relative;
        .slider-drg {
            position: absolute;
            left: 0px;
            top: 0;
            transform: translateY(-50%);
            width: 10px;
            height: 40px;
            background: red;
            z-index: 10;
        }
        .slider-w {
            position: absolute;
            left: 0px;
            top: 0px;
            height: 100%;
            z-index: 9;
            border-radius: 10px;
            background: #57a3f3;
            display: inline-block;
        }
    }

    .is-danger {
        color: red;
    }
</style>
