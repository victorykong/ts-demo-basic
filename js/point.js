"use strict";
// 类型推断
// 1. 如果变量声明和初始化是统一行, 可以省略变量类型的声明(省略的步骤由 ts 完成)
// 2. 并且在之后这个变量只能是这个类型
// let age = 18;
// age = '十八'; // 报错
// 联合类型
// 1. 取值可以是指定类型的任意一种
// let res: string = prompt('点击'); // 只能点确定
// let res2: null = prompt('点击'); // 只能点取消
// let res3: string | null = prompt('点击');
// console.log(res3)
