/**
 * Sample Code before solving the sudoku problem
 * @name window3
 * @description Go Through the array to get the 3 values in a row
 *  
 */

function window3(row) {
    var win = 2;
    var middle = (row.length - 1) - 2;
    var str = "";
    for (var i = 0; i <= row.length; i++) {
        if (i <= win) {
            str += `${row[i]}`;

        } else if (i <= win + 3) {
            str += `${row[i]}`;
        }

    }
    console.log(str);
}

var row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
window3(row);