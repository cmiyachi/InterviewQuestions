/*
Pairs with Specific Difference

Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

In your solution, try to reduce the memory usage while maintaining time efficiency. Prove the correctness of your solution and analyze its time and space complexities.

Note: the order of the pairs in the output array should maintain the order of the y element in the original array.

input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]
*/
function findPairsWithGivenDifference(arr, k) {
    var number = new Object();
    let answer = new Array();
    //Create a Object to store values from array into the object
    for (var i = 0; i < arr.length; i++) {
        number[arr[i]] = arr[i];
    }
    //Find a pair x-y = k
    // find a X that for each (x = k+y)
    for (var i = 0; i < arr.length; i++) {
        var x = k + arr[i];
        //console.log(x, "=", k, " + ", arr[i]);
        if (x in number) {
            answer.push([x, arr[i]]);
        }
    }
    //console.log('Number: ', number);
    return answer;
}
var array = [0, -1, -2, 2, 1];
var k = 1;
console.log(array);
findPairsWithGivenDifference(array, k);
//console.log('Expected : [[1, 0], [0, -1], [-1, -2], [2, 1]]');

