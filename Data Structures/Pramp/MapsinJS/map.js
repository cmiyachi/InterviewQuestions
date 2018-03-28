var myMap = new Map();
var keyString = 'a string',
    keyObj = {},
    keyFunc = function () { };

//Setting The Values
myMap.set(keyString, "Value Associated with a String");
myMap.set(keyObj, 'Value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');
myMap.size;


//Getting the values
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));
console.log(myMap.get('a string'));
console.log(myMap.get({}));
console.log(myMap.get(function () { }));