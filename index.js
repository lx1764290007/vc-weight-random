/**
 * author: VencentLum
 */

/**
 * 求最大公约数
 * @param n1 number
 * @param n2 number
 * @returns {number}
 */
const VC_gcm = (n1, n2) => {
    return n1 % n2 === 0 ? n2 : VC_gcm(n2, n1 % n2);
};
/**
 * 洗牌算法，打乱数组排序
 * @param arr: Array
 * @returns {Array}
 */
const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
/**
 * 约分权重
 * @param target: Map
 * @returns {Map}
 */
const to_gcm = (target) => {
    let array_gcm = [...target.values()];
    let array = [...target.values()];
    let dataSourceClone = new Map(target);
    let m = new Map();
    while (array_gcm.length > 1) {
        array_gcm.push(VC_gcm(array_gcm.pop(), array_gcm.pop()));
    }
    let array_gcm_after = array.map(it => it / array_gcm[0]);
    [...dataSourceClone.keys()].forEach((it, i) => m.set(it, array_gcm_after[i]))
    return m;
}

/**
 * map -> array
 * @param target: Map
 * @return Array
 */
const to_array = (target) => {
    let data = [];
    Array.from(target).forEach((it) => {
        for(let index = 0; index < it[1]; index++) {
            data.push(it[0])
        }
    })
    return data;
}

/**
 * 取随机数
 * @param [Min ,Max] number
 * @param Max
 * @return {number}
 */
const random_source = (Min, Max) => {
    const Range = Max - Min;
    const Rand = Math.random();
    return Min + Math.floor(Rand * Range);
}

/**
 * 是否正整数
 * @param str
 * @returns {boolean}
 */
const is_positive_integer = (str) => /^[0-9]*[1-9][0-9]*$/g.test(str);

/**
 * 简单参数类型检查
 * @param params
 */
const check_params = (params) => {
    if(params instanceof Map) {
        const p = new Map(params);
        if(!Array.from(p.values()).every(it => typeof it === 'number' && is_positive_integer(String(it)))) {
           throw new Error('VC-weight-random: 权重参数只接受正整数，若是浮点数请自行处理成正整数', 'weighted-randow/index', 88);
        }
        return true
    }
     throw new Error('VC-weight-random: 参数类型错误，期望的是Map类型', 'weighted-randow/index', 92)
}

const VC_main_fn = (param) => {
    let result = null;
    const container = shuffle(to_array(to_gcm(param)));
    result = container[random_source(0, container.length)];
    return result;
}

const defaultOptions = Object.freeze({
    continuous: false, //是否连续取值，直到取完
    showErrorMsg: true // 参数检查出现错误时是否打印错误信息
})

/**
 * 入口函数
 * @param param: Map
 * @option defaultOptions
 * @returns {null | $Keys}
 */
const VC_main = (param, option = defaultOptions) => {
    let result = null;
    try {
        if (check_params(param)){
            const p = new Map(param);
            if (option.continuous) {
                result = [VC_main_fn(p)];
                let index = 0;
                for (let i = p.size + 1; i>=0; i--) {
                    p.delete(result[index]);
                    result.push(VC_main_fn(p));
                    ++ index;
                    --i;
                }
            } else {
                result = VC_main_fn(p);
            }
        }
    }catch (e) {
        option.showErrorMsg && console.error(e);
    }
    return result;
}
typeof window !== 'undefined' ? window.VC_weight_random = VC_main : module.exports = VC_main;
