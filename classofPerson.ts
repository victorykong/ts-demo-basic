// 类
class Person {
    // 成员
    // 可以初始化给值, 可以在构造函数给值
    // public name: string = "default value";
    public name: string;
    public age: number;
    private gender: boolean;

    constructor(name: string, age: number, gender: boolean) {
        this.name = name;
        this.age = age;
        this.gender = gender;

        // 在此处声明的方法, 不是被添加到原型上的, 而是在每个实例化出来的对象上都有一块内存空间在存储
    }
    // public 公有的(default)
    // private 实例化出来的对象禁止访问, 只能在类的内部调用
    // protected 受保护的, 不允许继承
    sayHi(): void {
        console.log(`${this.name} sayHi~`);
    }

    private logName(): void {
        console.log('私有方法');
    }

    protected logAge(): void {
        console.log(this.age);
    }

}

// const p1 = new Person('victorykong', 18, true);
// console.log(p1);
// console.log(p1.gender); // 属性“gender”为私有属性，只能在类“Person”中访问。
// p1.sayHi(); // victorykong sayHi~
// p1.logName(); // 属性“logName”为私有属性，只能在类“Person”中访问。


class Man extends Person {
    hobby: string

    constructor(name: string, age: number, gender: boolean, hobby: string) {
        super(name, age, gender);
        this.hobby = hobby;
    }

    sayHello(): void {
        console.log('sayHello');
    }
}

const m1 = new Man('victorykong', 18, true, 'basketball');
console.log(m1);
// m1.sayHi(); // 父类的方法
// m1.sayHello(); // 自身的方法
// m1.logAge(); // 属性“logAge”受保护，只能在类“Person”及其子类中访问。