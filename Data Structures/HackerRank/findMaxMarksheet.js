//Not From Hacker rank -- its personal problem

function findMax(marks) {
    if (marks.length == 0) {
        return null;
    }
    var large = marks[0];
    for (var i = 1; i < marks.length; i++) {
        if (marks[i] > large) {
            large = marks[i];
        }
    }
    return large;
}

console.log(findMax([0, -1, 0]));