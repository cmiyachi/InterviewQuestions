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


function hotPotato(nameList, num) {
    let queue = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while (queue.size() > 1) {
        for (let j = 0; j < num; j++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(`${eliminated} was eliminated from hot potato game`);
    }
    return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The Winner is :' + winner);
