interface PersonConstructor {
  new (name: string, age: number): PersonInterface; // 实例化返回的对象要满足该接口
}

interface PersonInterface {
  sayHello(str: string): void;
}

// 一个类实现了一个接口
// class Person implements PersonConstructor {
//   constructor(name: string, age: number) {}
//   sayHello(str: string) {
//     console.log(str);
//   }
// }
// const p1 = new Person("zs", 18);
// console.log(p1);
// p1.sayHello("class implements interface~~");

// 接口继承类

