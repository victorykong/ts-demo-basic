// 数组
// let array: string[] = ["1", "2", "3"]
// let array2: Array<number> = [1, 2, 3]


// 元祖 - 规定每个元素的类型
// let array: [string, number, boolean] = ["1", 2, true];


// 枚举 - 枚举值只能是 number
// 可以使用默认枚举值, 但是从 0 开始的
// enum Sexy {
//     men = 1,
//     women = 2
// }
// let men: Sexy = Sexy.men
// console.log(men);

// any 任意类型
// const res = prompt('点击'); // 确认是 "" 取消是 null
// console.log(res)


// void 函数返回值类型, 无任何返回值 void
// function returnString(): string {
//     return 'string';
// }
// console.log(returnString())

// const testVoid = (): void => {
//     console.log('void')
// }
// testVoid();


// never 不存在的值, 例如: 抛出异常 或 死循环的函数
// 所有类型都是 never 类型的父类 ==> never 类型的值可以赋给任意变量
// function test(): never {
//     while (true) {
//     }
// }

// function test2(): never {
//     throw new Error('never');
// }

// test2();