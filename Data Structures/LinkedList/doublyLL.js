//First We will create a node with the following parameters:
//1. Data
//2. Previous
//3. Next

function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
};

function DoublyLL() {
    this.head = null;
    this.tail = null;
    this.numberOfVals = 0;
};

DoublyLL.prototype.add = function (data) {
    var node = new Node(data);
    //If the current node is not the head
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    this.numberOfVals++;
};

DoublyLL.prototype.remove = function (data) {
    var current = this.head;
    while (current) {
        if (current.data === data) {
            if (current === this.head && current === this.tail) {
                this.head = null;
                this.tail = null;
            } else if (current === this.head) {
                this.head = this.head.next;
                this.head.previous = null;
            } else if (current === this.tail) {
                this.tail = this.tail.previous;
                this.tail.next = null;
            } else {
                current.previous.next = current.next;
                current.next.previous = current.previous;
            }
            this.numberOfValues--;
        }
        current = current.next;
    }



};

DoublyLL.prototype.insertAfter = function (data, toNodeData) {
    var current = this.head;
    while (current) {
        if (current.data === toNodeData) {
            var node = new Node(data);
            if (current === this.tail) {
                this.add(data);
            }
            else {
                current.next.previous = node;
                node.previous = current;
                node.next = current.next;
                current.next = node;
                this.numberOfVals++;
            }
        }
        current = current.next;
    }
};

DoublyLL.prototype.traverse = function (callback) {
    var current = this.tail;
    while (current) {
        if (callback) {
            callback(current);
        }
        current = current.next;
    }
};

DoublyLL.prototype.traverseReverse = function (callback) {
    var current = this.tail;
    while (current) {
        if (callback) {
            callback(current);
        }
        current = current.previous;
    }
};

DoublyLL.prototype.length = function () {
    return this.numberOfVals;
};

DoublyLL.prototype.print = function () {
    var string = '';
    var current = this.head;
    while (current) {
        string += current.data + ' ';
        current = current.next;
    }
    console.log(string.trim());
};

var dll = new DoublyLL();
dll.print(); // => ''
dll.add(1);
dll.add(2);
dll.add(3);
dll.add(4);
dll.print(); // => 1 2 3 4
console.log('length is 4:', dll.length()); // => 4
dll.remove(3); // remove value
dll.print(); // => 1 2 4
dll.remove(9); // remove non existing value
dll.print(); // => 1 2 4
dll.remove(1); // remove head
dll.print(); // => 2 4
dll.remove(4); // remove tail
dll.print(); // => 2
console.log('length is 1:', dll.length()); // => 1
dll.remove(2); // remove tail, the list should be empty
dll.print(); // => ''
console.log('length is 0:', dll.length()); // => 0
dll.add(2);
dll.add(6);
dll.print(); // => 2 6
dll.insertAfter(3, 2);
dll.print(); // => 2 3 6
dll.traverseReverse(function (node) { console.log(node.data); });
dll.insertAfter(4, 3);
dll.print(); // => 2 3 4 6
dll.insertAfter(5, 9); // insertAfter a non existing node
dll.print(); // => 2 3 4 6
dll.insertAfter(5, 4);
dll.insertAfter(7, 6); // insertAfter the tail
dll.print(); // => 2 3 4 5 6 7
dll.add(8); // add node with normal method
dll.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', dll.length()); // => 7
dll.traverse(function (node) { node.data = node.data + 10; });
dll.print(); // => 12 13 14 15 16 17 18
dll.traverse(function (node) { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length is 7:', dll.length()); // => 7
dll.traverseReverse(function (node) { console.log(node.data); }); // => 18 17 16 15 14 13 12
dll.print(); // => 12 13 14 15 16 17 18
console.log('length is 7:', dll.length()); // => 7

