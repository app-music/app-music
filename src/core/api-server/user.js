/**
 * Created by xiaoconghu on 2018/5/21.
 */
import axios from 'axios';

export default {
    /**
     * 登陆接口
     * @param body
     * @returns {Promise<any>}
     */
    login(body) {
        return new Promise((resolve, reject) => {
            axios.post(`/nodeApi/users/login`, body).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                console.log('请确认后台服务器是否开启!');
                throw new Error(error)
            }).catch(e=>{

            })
        })

    },
    /**
     * 注册接口
     * @param body
     * @returns {Promise<any>}
     */
    register(body) {
        return new Promise((resolve, reject) => {
            axios.post(`/nodeApi/users/register`, body).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                console.log('请确认后台服务器是否开启!');
                throw new Error(error)
            }).catch(err=>{

            })
        })
    }
}