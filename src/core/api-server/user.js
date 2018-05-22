/**
 * Created by xiaoconghu on 2018/5/21.
 */
import axios from 'axios';

export default {
    /**
     * 登陆接口
     * @param body
     */
    login(body){
        return new Promise((resolve, reject) => {
            axios.post(`/music/users/login`,body).then(result=>{
                result.data.code === 0 ? resolve(result) : reject(result);
            }, error => {
                throw new Error(error)
            })
        })

    }
}