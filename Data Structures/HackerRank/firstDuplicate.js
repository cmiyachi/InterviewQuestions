//The Question is from code fights
function firstDuplicate(a) {
    let obj = new Object();
    //var count = 1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] in obj) {

        }
        else {
            obj[a[i]] = a[i];
        }
    }
    return count;
}

var c = firstDuplicate([3, 2, 1, 3]);
console.log(c);