const VC_fn = require('../index')

// value is a positive integer only, key can be any
// value 只能是正整数，key可以是任意合法类型
let example = new Map([
    [{ time: new Date() }, 3],
    ['A', 6],
    ['B', 2],
    ['C', 3],
    [Symbol('lanlan'), 4]
]);

/**
 * more data
 */
// for (let i = 0; i < 500; i++) {
//     example.set(i, i+1)
// }

/**
 * @property-read If the second parameter is not used, the default value will be used
 * @default {
 *   continuous: false, // boolean,是否连续取值，直到取完,为true时返回数组，为false时返回Map的key
 *   showErrorMsg: true // boolean,参数检查出现错误时是否打印错误信息
 * }
 * @return key
 **/
console.time('time_key');
console.log('key: ', VC_fn(example));
console.timeEnd('time_key');

// option
const option = {
    continuous: true, // Whether to take values continuously until it is finished 是否连续取值，直到取完
    showErrorMsg: true // Parameter check whether the error message is printed when an error occurs 参数检查出现错误时是否打印错误信息
};
console.time('time_key[]');
console.log('key[]: ', VC_fn(example, option));
console.timeEnd('time_key[]');
