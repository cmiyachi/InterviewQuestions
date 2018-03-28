function PriorityQueue() {
    let items = [];
    function QueueElement(elem, priority) {
        this.elem = elem;
        this.priority = priority;
    }
    this.enqueue = function (elem, priority) {
        let queueElement = new QueueElement(elem, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement);
        }

    };
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].elem} - ${items[i].priority}`);
        }
    };
}

let priority = new PriorityQueue();
priority.enqueue("John", 2);
priority.enqueue("Jack", 1);
priority.enqueue("Camila", 1);
priority.print();