
export class CommonUtil {


  /**
   * 生成大写字母  A的Unicode值为65
   * @returns {Array}
   */
   static generateBig_1(){
    let str = [];
    for(let i=65;i<91;i++){
      str.push(String.fromCharCode(i));
    }
    return str;
  };
  /**
   * 生成小写字母  a的Unicode值为97
   * @returns {Array}
   */
   static generateSmall_1(){
    let str = [];
    for(let i=97;i<123;i++){
      str.push(String.fromCharCode(i));
    }
    return str;
  };

}

