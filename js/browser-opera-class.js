"use strict";
// 实现一个操作 localStorage 的类
var DataHelper = /** @class */ (function () {
    function DataHelper(localName) {
        this.localName = localName;
    }
    // 读取所有数据
    DataHelper.prototype.getData = function () {
        var dataStr = window.localStorage.getItem(this.localName); // 有则 [], 无则 null
        // 断言: 我已经确认是什么类型的值了
        return JSON.parse(dataStr);
    };
    // 读取指定 id 的数据
    DataHelper.prototype.getOneofData = function (id) {
        var array = this.getData();
        var obj = null;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var val = array_1[_i];
            if (val && val.id && val.id === id) {
                obj = val;
                break;
            }
        }
        return obj;
    };
    // 增加一条数据, 并返回增加数据后的 id
    DataHelper.prototype.addData = function (content) {
        var id = -1, array;
        if (this.getData() instanceof Array) {
            array = this.getData();
            id = array[array.length - 1]["id"] + 1;
        }
        else {
            array = [];
            id = 0;
        }
        var obj = {};
        obj["id"] = id;
        obj["content"] = content;
        array.push(obj);
        localStorage.setItem(this.localName, JSON.stringify(array));
        return id;
    };
    return DataHelper;
}());
var helper = new DataHelper("tsData");
// const id = helper.addData('我是第一条数据');
// console.log(id)
