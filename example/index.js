const VC_fn = require('../index');

// Map 结构里的 value 即权重值，只能是正整数, key 可以是任意合法类型
// default option, return key
const example = new Map([[{year: new Date()},3], ['A',6], ['B',1], ['C',3], [Symbol('lanlan'), 4]]);
console.log(VC_fn(example));

// option, return key[]
const option = {
    continuous: true, //是否连续取值，直到取完
    showErrorMsg: true // 参数检查出现错误时是否打印错误信息
}
// console.log(VC_fn(example, option));