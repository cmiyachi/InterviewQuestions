function wordCountEngine(document) {
    // your code goes here
    let objStorage = {};
    let returnArray = [];

    // set everything to lower case and remove punctionations
    document = document.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, "").split(" ");

    // Find word count and store it in an object
    document.forEach(function (val) {
        if (objStorage[val]) {
            objStorage[val]++;
        } else {
            objStorage[val] = 1;
        }
    });


    // convert object to an array
    for (var key in objStorage) {
        returnArray.push([key, objStorage[key].toString()]);
    }

    // Sort the array in descending order
    returnArray.sort(function (a, b) {
        return b[1] - a[1]
    });
    return returnArray;
}

var input1 =
    "Practice makes perfect, you'll get perfecT by practice. just practice! just just just!!";

var count = wordCountEngine(input1);
console.log(count);


/*
 Expected For Input1
 [["just","4"],["practice","3"],["perfect","2"],["makes","1"],["youll","1"],["get","1"],["by","1"]]
 */

var input2 =
    "To be, or not to be, that is the question:";
/*
Expected for Input 2
[["to","2"],["be","2"],["or","1"],["not","1"],["that","1"],["is","1"],["the","1"],["question","1"]]
*/

var input3 =
    "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";
/*
Expected For Input 3

[["and","4"],["every","3"],["is","3"],["a","3"],["quotation","3"],["all","2"],["book","1"],["house","1"],["out","1"],["of","1"],["forests","1"],["mines","1"],["stone","1"],["quarries","1"],["man","1"],["from","1"],["his","1"],["ancestors","1"]]
*/
