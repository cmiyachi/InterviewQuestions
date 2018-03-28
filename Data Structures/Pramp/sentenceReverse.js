/**
 * @name Reverse Words In A Sentence
 * @param {Characters} arr 
 * @description You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

* @example
input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]

 */
function reverseWords(arr) {
    //Convert Array to String
    var string = arr.toString();
    //Remove the Comma
    string = string.replace(/,/g, "");
    //Split the words and store it in array
    var array = string.split(" ");
    //Reverse the words
    array.reverse();
    //Join them to a string
    string = array.join(" ");
    //A new variable to output the array
    var stringArray = new Array();
    //Iterate through the string and push each element into array
    for (var i = 0; i < string.length; i++) {
        stringArray.push(string[i]);
    }
    return stringArray;
}
var input = ['p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
    'm', 'a', 'k', 'e', 's', '  ',
    'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'];
reverseWords(input);

/*
var string = "Text 1 - Text 2 - Text 3 - Text 4"; // "Text 1 - Text 2 - Text 3 - Text 4"
var array = string.split(' - ') // ["Text 1", "Text 2", "Text 3", "Text 4"]
array.reverse() // ["Text 4", "Text 3", "Text 2", "Text 1"]
array.join(' - ') // "Text 4 - Text 3 - Text 2 - Text 1"
*/


/*
Test Case #6
Input:

["g","r","e","a","t","e","s","t"," ","n","a","m","e"," ","f","i","r","s","t"," ","e","v","e","r"," ","n","a","m","e"," ","l","a","s","t"]
Expected:

["l","a","s","t"," ","n","a","m","e"," ","e","v","e","r"," ","f","i","r","s","t"," ","n","a","m","e"," ","g","r","e","a","t","e","s","t"]

*/


/*
Reverse a Sentence
var str  = "SAMPLE STRING";

var arr = str.split(" ");

arr.reverse();

str = arr.join(" ");
*/