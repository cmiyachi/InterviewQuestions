/**
 * Zig Zag Challenge By Code Fights
 * @description
 * A Sequence of integers is called zigzag sequence if each of its elements is either strictly less than all of its neighbours or striclty greater than all its neighbours.
 * 
 * @example
 * [4,2,3,1,5,3]
 * 4 is Strictly Greater than 2
 * 2 is Strictly Less than (4,3)
 * 3 is Strictly Greater than (2,1)
 * 1 is Strictly Less than (3,5)
 * 5 is Strictly Greater Than (1,3)
 * 3 Is Strictly Less than 3
 * 
 * @example
 * [7,3,5,5,2]
 * 7 is Strictly Greater than 3
 * 3 is Strictly Less than (7,5)
 * 5 is Not Strictly Greater or Less than (5)
 * 5 is Not Strictly Greater or Less than (5)
 * 2 is Strictly Greater than 5
 * 
 * 
 * @example
 * 
 */

function zigZag(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) !== arr.length) {
            if (arr[i] != arr[i + 1]) {
                console.log(arr[i]);
            }

        }
    }
}

var zz = [4, 2, 2, 1, 5, 3];
zigZag(zz);