/**
 * Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

Example

For number = 'G', the output should be
newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].

Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].


A=> 0
B=> 1
C=> 2
D=> 3
E=> 4
F=> 5
G=> 6
H=> 7
I=> 8
J=> 9
K=> 10
L=> 11
M=> 12
N=> 13
O=> 14
P=> 15
Q=> 16
R=> 17
S=> 18

 */

function informatics(number) {
    var alpha = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25
    };
    let n;
    let i = 0;
    let str;
    let strA = [];
    if (number in alpha) {
        n = alpha[number];
    }
    while (i <= n) {
        var key1 = Object.keys(alpha)[i];
        var key2 = Object.keys(alpha)[n];
        value1 = alpha[key1];
        value2 = alpha[key2];
        i++;
        n--;
        str = `${key1} + ${key2}`
        strA.push(str);

    }
    return strA;
    //console.log(Object.values(alpha)[n]);
    //n--;
    //console.log(Object.values(alpha)[n]);
}

var number = "G";
informatics(number);
/*
Expected Output:
["A + E",
 "B + D",
 "C + C"]
*/

var number2 = "W";
/**
 * Expected Output:
["A + W",
 "B + V",
 "C + U",
 "D + T",
 "E + S",
 "F + R",
 "G + Q",
 "H + P",
 "I + O",
 "J + N",
 "K + M",
 "L + L"]
 */