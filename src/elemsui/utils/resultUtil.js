/**
 * Created by fmj on 2017/4/26.
 * 返回结果格式化
 */

let resultUtil = (res) => {
    return res.body ? res.body : JSON.parse(res.text);
}


export default resultUtil;