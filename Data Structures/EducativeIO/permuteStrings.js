/*
Implement a method to print all permutations of a given string.
*/
/*
Heap(S, n)
 10: IF n > 2 THEN
 20:   Heap(S, n - 1)
 30: FOR i := 1 TO n - 1
 40:   IF n is even THEN
 50:     swap S[i] and S[n]
 60:   ELSE
 70:     swap S[1] and S[n]
 80:   process S
 90:   IF n > 2 THEN
100:     Heap(S, n - 1)
*/
var heapsPermute = function (array, output, n) {
    n = n || array.length; // set n default to array.length
    if (n === 1) {
        output(array);
    } else {
        for (var i = 1; i <= n; i += 1) {
            heapsPermute(array, output, n - 1);
            if (n % 2) {
                var j = 1;
            } else {
                var j = i;
            }
            swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
        }
    }
};

var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

// For testing:
var print = function (input) {
    console.log(input);
}

heapsPermute(['a', 'b', 'c', 'd'], print);
// heapsPermute([1, 2, 3], print)