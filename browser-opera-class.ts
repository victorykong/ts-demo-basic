// 实现一个操作 localStorage 的类
class DataHelper {
    // 成员
    localName: string;  // localStorage 的键
    dataKey: number; // 每条数据的 id

    constructor(localName: string) {
        this.localName = localName;
    }

    // 读取所有数据
    getData(): object[] | null {
        const dataStr: string | null = window.localStorage.getItem(this.localName); // 有则 [], 无则 null
        // 断言: 我已经确认是什么类型的值了
        return JSON.parse(dataStr as string);
    }

    // 读取指定 id 的数据
    getOneofData(id: number): object {
        const array: Array<any> = this.getData();
        let obj: object = null;
        for (let val of array) {
            if (val && val.id && val.id === id) {
                obj = val;
                break;
            }
        }
        return obj;
    }

    // 增加一条数据, 并返回增加数据后的 id
    addData(content: string): number {
        let id = -1, array: Array<object> | null;

        if (this.getData() instanceof Array) {
            array = this.getData();
            id = array[array.length - 1]["id"] + 1;
        } else {
            array = [];
            id = 0;
        }

        let obj: object = {};
        obj["id"] = id;
        obj["content"] = content;
        array.push(obj);
        localStorage.setItem(this.localName, JSON.stringify(array));
        return id;
    }

}

const helper = new DataHelper("tsData");


// const id = helper.addData('我是第一条数据');
// console.log(id)

