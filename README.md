# 加权随机取值

#### 介绍
基于 es6+ 的加权随机取值，支持单一取值和连续不重复取值。本应用无第三方依赖包，开箱即用。常见应用场景有：概率不等的抽奖 等。


#### 安装教程

##### 使用 npm
```shell script
npm install vc-weight-random
```
个人推荐使用 [pnpm](https://pnpm.io/) 代替 npm 作为包管理器
##### 使用 pnpm
```shell script
pnpm install vc-weight-random
```

##### 在浏览器环境中直接使用
先克隆项目至本地
```shell script
git clone https://gitee.com/Vencentlum/weighted-random.git
```
随后将本地目录下的index.js拷贝至你的项目中，最后通过script标签引入即可。
```shell script
// 全局变量
window.VC_weight_random
```

#### 使用说明
```shell script
const VC_fn = require('vc-weight-random')

VC_fn(params, option);
```
|  参数   | 说明  | 补充说明 |
|  ----  | ----  | --- |
| VC_fn  | 可能返回的值 null &#124; key &#124; key[] | 详情请查看example的测试用例 |
| params  | Map数据结构,key可以是任意类型，value是权重值 |  Map的value只接受正整数 |
| option  | Object | 见下方    |
```shell script
// default
const option = {
    continuous: false, // boolean,是否连续取值，直到取完,为true时返回数组，为false时返回Map的key
    showErrorMsg: true // boolean,参数检查出现错误时是否打印错误信息
}
```
