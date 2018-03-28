function birthdayCakeCandles(n, arr) {
    var counts = {};

    ar.forEach(function (x) {
        //Find Duplicate Values
        counts[x] = (counts[x] || 0) + 1;

    });
    var toAr = Object.keys(counts).map(
        function (key) {
            return counts[key];

        });
    var result = Math.max.apply(null, toAr);



    return result;
}

var n = 7;
var ar = [0, 1, 3, 4, 4, 4, 4];
var b = birthdayCakeCandles(n, ar);
//birthdayCakeCandles(n, ar);
console.log(b);