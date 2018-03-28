//Given two string return true if they are anagrams of each other
var first = "Mari";
var second = "Army";

function isAnagram(first, second) {
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

var anagram = isAnagram(first, second);
console.log(anagram);