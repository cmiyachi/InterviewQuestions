/**
 * @name Stack
 * @description Contains different functionality of the stack
 * @example Stack.pop()
 */
function Stack() {
    let items = [];

    //First We Need to Push Elements
    this.push = function (elem) {
        items.push(elem);
        //console.log(`${elem} was pushed`);
    };

    //We need to Pop out elements
    this.pop = function () {
        return items.pop();
        //console.log('Item Poped');
    };

    //We need to peek at the first element
    this.peek = function () {
        return items[items.length - 1];
    };

    //Check if stack is empty
    this.isEmpty = function () {
        if (items.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    //Clear the stack
    this.clear = function () {
        items = [];
        //console.log('All Items Removed');
    }

    //Check th size of the stack
    this.size = function () {
        return items.length;
    }

    //Print the whole stack
    this.printStack = function () {
        return items;
    }

}
module.exports = Stack;

/*
var stack = new Stack();
console.log("isEmpty : ", stack.isEmpty());
stack.push(2);
stack.push(3);
console.log("isEmpty : ", stack.isEmpty());
console.log("first Element is : ", stack.peek());
stack.push(4);
console.log("Size of Stack :", stack.size());
console.log(stack.printStack());
stack.clear();
console.log("After Clearing: ", stack.printStack());
*/
