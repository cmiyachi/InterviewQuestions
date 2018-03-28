/**
 * Given an array of n integers and a number,d, perform d left rotations on the array. Then print the updated array as a single line of space-separated integers.
 * 
 * 
 * Input Format

The first line contains two space-separated integers denoting the respective values of n (the number of integers) and d (the number of left rotations you must perform).
The second line contains n space-separated integers describing the respective elements of the array's initial state.


Sample Input
5 4
1 2 3 4 5
//Need to perform d rotations , d = 4
//After 4 Rotations we get the below:
Sample Output
5 1 2 3 4


 */

function rightRotation(n, d, a) {
    var elem;
    for (var i = 1; i < d; i++) {
        elem = a.pop();
        a.unshift(elem);

    }
    console.log(a);

}
function leftRotation(n, d, a) {
    var elem;
    for (var i = 0; i < d; i++) {
        elem = a.shift();
        a.push(elem);
    }
    console.log(a);

}



var lengthOfArray = 5;
var numberOfRotations = 4;
var array = [1, 2, 3, 4, 5];
//rightRotation(lengthOfArray, numberOfRotations, array);
leftRotation(lengthOfArray, numberOfRotations, array);