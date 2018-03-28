/**
 * Given an integer size, return an array containing each integer from 1 to size in the following order:

1, size, 2, size - 1, 3, size - 2, 4, ...
 */

function consArray(size) {
    var i = 1;
    var arr = [];
    while (i < size) {
        arr.push(i++, size--);
        //console.log(i++, ",", size--);
    }
    if (size == i) {
        arr.push(size);
    }

    return arr;
}

var size = 7;
//consArray(size);
consArray(size);