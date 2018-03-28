function Queue() {
    let items = [];

    //Add Elements in the queue
    this.enqueue = function (elem) {
        items.push(elem);
    };

    //Remove Elements
    this.dequeue = function () {
        return items.shift();
    };

    //Get The First Elements
    this.front = function () {
        return items[0];
    }

    //Check if the queue is empty
    this.isEmpty = function () {
        return items.length == 0;
    };


    //Get The size of the queue
    this.size = function () {
        return items.length;
    };

    //Print The Queue
    this.printQueue = function () {
        return items.toString();
    }
}

var queue = new Queue();

queue.enqueue('Siddharth');
console.log(queue.front());
queue.enqueue('Dude');
queue.dequeue();
queue.enqueue('Uri');
console.log(queue.size());

console.log(queue.printQueue());
