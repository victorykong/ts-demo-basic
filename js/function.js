"use strict";
// 形参类型
// const showLove = (name: string): void => {
//     console.log(`${name} love you!`);
// }
// const res = showLove("victorykong");
// console.log(res); // undefined
// 可选参数
// const showLove = (name: string, age?: number): void => {
//     console.log(`${name} love you!`);
// }
// showLove("victorykong");
// 默认值
// const showLove = (name: string, age: number = 18): void => {
//     console.log(`${name} love you! age ${age}`);
// }
// showLove("victorykong");
// 想使用函数第一个默认值 使用 undefined
// const showLove = (name: string = "victorykong", age: number): void => {
//     console.log(`${name} love you! age ${age}`);
// }
// showLove(undefined, 18);
// 剩余参数
// ...rest 可以不传
// rest    必须要传(非剩余参数)
function add(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(a);
    console.log(rest);
}
add(1); // 1, []
add(1, 2); // 1, [2]
add(1, 2, 3, 4, 5); // 1, [2, 3, 4, 5]
