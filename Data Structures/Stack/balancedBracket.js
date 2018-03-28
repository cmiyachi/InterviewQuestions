/**
 * @name Balanced Parenthesis
 * @param {string} parenthesis 
 */



var balancedParens = function (str) {
    var stack = [];
    var open = { '{': '}', '[': ']', '(': ')' };
    var closed = { '}': true, ']': true, ')': true };

    for (var i = 0; i < str.length; i++) {
        var chr = str[i];
        if (open[chr]) {
            stack.push(chr);
        } else if (closed[chr]) {
            if (open[stack.pop()] !== chr) return false;
        }
    }

    return stack.length === 0;
};

console.log(balancedParens('{]'));
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
