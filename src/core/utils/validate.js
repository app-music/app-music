/**
 * Created by xiaoconghu on 2018/5/22.
 */
import Vue from 'vue'
import VeeValidate from 'vee-validate';
const dict = {
    zh_CN: {
        messages: {
            required: function(field){
                return '请输入' + field ;
            },
            confirmed: function(field) {
                return '两次输入的密码不一致';
            },
            min:function (field,number) {
                return `${field}不小于${number}位`
            },
            max:function (field, number) {
                return `${field}不大于${number}位`
            },
            alpha_dash:function (field) {
                return `${field}只能包含英文、数字、下划线、破折号`
            }
        },
        attributes: {
            userName:'昵称',
            userCode:'账号',
            password: '密码',
            confirmPassword: '确认密码',
        }
    }
};
VeeValidate.Validator.localize('zh_CN', dict.zh_CN);
Vue.use(VeeValidate);

