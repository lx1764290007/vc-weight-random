const VC_fn = require('../index');

// value is a positive integer only, key can be any
const example = new Map([
        [{time: new Date()}, 3],
        ['A', 6],
        ['B', 1],
        ['C', 3],
        [Symbol('lanlan'), 4]
    ]);
// If the second parameter is not used, the default value will be used
console.log(VC_fn(example));

// option, return key[]
const option = {
    continuous: true, // Whether to take values continuously until it is finished 是否连续取值，直到取完
    showErrorMsg: true // Parameter check whether the error message is printed when an error occurs 参数检查出现错误时是否打印错误信息
}
console.log(VC_fn(example, option));
