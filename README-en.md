### [中文](./README.md)  &#124;  English

# Weighted random value

#### Introduction
The weighted random value based on ES6 + supports single value and continuous non repeated value. This application has no third-party dependency package and can be used out of the box. Common application scenarios include: lottery with different probability, etc。


#### Installation

#### Node.js environment
##### use ```npm``` or ```yarn``` or ```pnpm```
```shell script
npm i vc-weighted-random

yarn add vc-weighted-random

pnpm install vc-weighted-random
```
##### Browser environment
```shell script
git clone https://github.com/lx1764290007/vc-weight-random.git
```
copy ```index.js``` to your project, use as ```script``` tags
```shell script
window.VC_weight_random
```

#### How to use
```shell script
const VC_fn = require('vc-weighted-random')

VC_fn(params, option);
```
|  field   | Introduction  | explain |
|  ----  | ----  | --- |
| VC_fn  | return value probably null &#124; key &#124; key[] | if ```params```not good,get ```null```.see ```example/index.js``` |
| params  | Map data-structure,key can be any，value is weight | value is a positive integer in Map data-structure |
| option  | Object | -    |

```shell script
// default
const option = {
    continuous: false, // boolean,Whether to take values continuously until they are taken. When it is true, the array is returned, and when it is false, the key of map is returned
    showErrorMsg: true // boolean,Parameter check whether the error message is printed when an error occurs
```
#### Test
Clone this project under the root directory of this project (node.js environment is required)
```shell
node example/index.js
```
