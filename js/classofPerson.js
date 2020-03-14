"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        // 在此处声明的方法, 不是被添加到原型上的, 而是在每个实例化出来的对象上都有一块内存空间在存储
    }
    // public 公有的(default)
    // private 实例化出来的对象禁止访问, 只能在类的内部调用
    // protected 受保护的, 不允许继承
    Person.prototype.sayHi = function () {
        console.log(this.name + " sayHi~");
    };
    Person.prototype.logName = function () {
        console.log('私有方法');
    };
    Person.prototype.logAge = function () {
        console.log(this.age);
    };
    return Person;
}());
// const p1 = new Person('victorykong', 18, true);
// console.log(p1);
// console.log(p1.gender); // 属性“gender”为私有属性，只能在类“Person”中访问。
// p1.sayHi(); // victorykong sayHi~
// p1.logName(); // 属性“logName”为私有属性，只能在类“Person”中访问。
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age, gender, hobby) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.hobby = hobby;
        return _this;
    }
    Man.prototype.sayHello = function () {
        console.log('sayHello');
    };
    return Man;
}(Person));
var m1 = new Man('victorykong', 18, true, 'basketball');
console.log(m1);
// m1.sayHi(); // 父类的方法
// m1.sayHello(); // 自身的方法
// m1.logAge(); // 属性“logAge”受保护，只能在类“Person”及其子类中访问。
