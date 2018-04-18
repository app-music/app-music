export class CommonUtil {


    /**
     * 生成大写字母  A的Unicode值为65
     * @returns {Array}
     */
    static generateBig_1() {
        let str = [];
        for (let i = 65; i < 91; i++) {
            str.push(String.fromCharCode(i));
        }
        return str;
    };

    /**
     * 生成小写字母  a的Unicode值为97
     * @returns {Array}
     */
    static generateSmall_1() {
        let str = [];
        for (let i = 97; i < 123; i++) {
            str.push(String.fromCharCode(i));
        }
        return str;
    };

    static createSong(musicData) {
    }

    /**
     * 获取Uid
     * @returns {string|*}
     */
    static getUid() {
        let _uid;
        const t = new Date().getUTCMilliseconds();
        _uid = '' + Math.round(2147483647 * Math.random()) * t % 1e10;
        return _uid
    }

    /**
     * 获取指定范围的随机数
     * @param Min
     * @param Max
     * @returns {*}
     */
    static getRandomNumBoth(Min, Max) {
        let Range = Max - Min;
        let Rand = Math.random();
        let num = Min + Math.round(Rand * Range); //四舍五入
        return num;
    }

    static dateFmt(fmt, date) {
        let o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds(),                 //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;

    }
}

