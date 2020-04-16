"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
        var e_1, _a;
        var array = this.getData();
        var obj = null;
        try {
            for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var val = array_1_1.value;
                if (val && val.id && val.id === id) {
                    obj = val;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_1) throw e_1.error; }
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
