//链表需要包含的属性
//1.head属性 2.各个节点（两部分组成，1元素，2指向下一节点的指针）

export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

//单向链表的封装
export class LinkedList {
    //内部节点类
    constructor() {
        this.head = null;
        this.length = 0; //记录链表的长度

    }
    //链表常见操作
    //append方法
    append(data) {
        var newNode = new Node(data);
        //判断是否第一个节点
        if (!this.length) {
            this.head = newNode;
        } else {
            //current指向head
            var current = this.head;
            //循环查找知道current为空停止查找
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length += 1;
    }
    //toString方法
    toString() {
        var current = this.head;
        var listString = '';
        while (current) {
            listString += current.data + ' ';
            current = current.next;
        }
        return listString;
    }
    //insert方法
    //position插入的元素位置 data插入的元素
    insert(position, data) {
        //1.对position进行边界判断
        if (position < 0 || position > this.length) return false;
        //2.详细的插入操作
        var newNode = new Node(data);
        //2.1判断插入条件是否是第一个
        if (position == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            var index = 0;
            var current = this.head;
            var previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length += 1;
        return true;
    }
    //get方法
    get(position) {
        //越界判断
        if (position < 0 || position >= this.length) return null;
        var current = this.head;
        var index = 0;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }
    //indexOf方法
    indexOf(data) {
        var index = 0;
        var current = this.head;
        while (current) {
            if (current.data == data) {
                return index;
            }
            current = current.next;
            index += 1;
        }
        return -1
    }
    //upData方法
    upData(position, element) {
        if (position < 0 || position >= this.length) return false;
        var current = this.head;
        var index = 0;
        while (index++ < position) {
            current = current.next;
        }
        current.data = element;
        return true;
    }
    //removeAt方法
    removeAt(position) {
        //越界判断
        if (position < 0 || position >= this.length) return null
        //判断是否删除的第一个
        var current = this.head;
        if (position == 0) {
            this.head = this.head.next
        } else {
            var index = 0;
            var previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length -= 1;
        return current.data;
    }
    //remove
    remove(data) {
        var position = this.indexOf(data);
        return this.removeAt(position)
    }
    //isEmpty
    isEmpty() {
        return this.length == 0;
    }
    //size
    size() {
        return this.length;
    }
}

// 测试代码
var list = new LinkedList();
list.append('abc')
list.append('abc')
list.append('abc')
list.insert(1, 'bbb')
console.log(list.toString())