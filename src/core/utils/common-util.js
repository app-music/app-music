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
  static getRandomNumBoth(Min,Max){
    let  Range = Max - Min;
    let Rand = Math.random();
    let num = Min + Math.round(Rand * Range); //四舍五入
    return num;
  }
}

