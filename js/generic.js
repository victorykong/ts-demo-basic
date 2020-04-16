"use strict";
/**
 * 泛型
 */
// 使用any将会丢失一些信息，但是使用泛型的话，我们知道：参数类型与返回值类型是相同的了
// function identity<T>(arg: T): T {
//   return arg;
// }
// 破坏：编译不通过
// function identity<T>(arg: T): T {
//   let tmp = String(arg);
//   return tmp;
// }
// 类型推论
// console.log(identity(123));
// 会报错，因为此处已经指定了输出的类型  number ==> data: number
// interface NotEmpty<T> {
//   data: T;
// }
// let x: NotEmpty<number>;
// let y: NotEmpty<string>;
// x = y; // Error, because x and y are not compatible
