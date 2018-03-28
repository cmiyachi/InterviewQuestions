/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Sam’s two children, Larry and Rob, decide to play a game in which they each climb a tree and throw fruit at their (Sam’s) house. Each fruit that lands on the house scores one point for the one who threw it. Larry climbs the tree on the left (the apple), and Rob climbs the one on the right (the orange).
 * 
 * For simplicity, we’ll assume all of the landmarks are on a number line. Larry climbs the apple tree at point , and Rob climbs the orange tree at point . Sam’s house stands between points  and . Values increase from left to right.

You will be given a list of distances the fruits are thrown. Negative distances indicate travel left and positive distances, travel right. Your task will be to calculate the scores for Larry and Rob and report them each on a separate line.


Sample Input 
7 11
5 15
3 2
-2 2 1
5 -6

s= 7
t= 11
a= 5
b= 15
apples= [ -2, 2, 1 ] use the length if you want number of apples
oranges= [ 5, -6 ]

Sample Output 
1 1

Explanation
The first apple falls at position 5-2 = 3
The second apple falls at position 5+2 = 7
The third apple falls at position 5+1 = 6
The first orange falls at position 15+5 = 20
The second orange falls at position 15-6 = 9

The apple -> 7 and the orange ->9 
Comes in the range 7 and 11
therefore its 1 1
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var larry = 0;
    var rob = 0;
    var calcApples;
    var calcOranges;
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] < 0) {
            calcApples = a - Math.abs(apples[i]);

            if (calcApples >= s && calcApples <= t) {
                larry = larry + 1;
            }
        }
        else {
            calcApples = a + Math.abs(apples[i]);
            if (calcApples >= s && calcApples <= t) {
                larry = larry + 1;
            }
        }


    }

    for (let j = 0; j < oranges.length; j++) {
        if (oranges[j] < 0) {
            calcOranges = b - Math.abs(oranges[j]);

            if (calcOranges >= s && calcOranges <= t) {
                rob++;
            }
        }
        else {
            calcOranges = b + Math.abs(oranges[j]);
            if (calcOranges >= s && calcOranges <= t) {
                rob++;
            }
        }
    }

    console.log(larry);
    console.log(rob);
}





countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);


