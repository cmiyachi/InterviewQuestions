/*
Matrix Spiral Copy

Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]


function spiralCopy(inputMatrix):
    numRows = inputMatrix.length
    numCols = inputMatrix[0].length

    topRow = 0
    btmRow = numRows - 1
    leftCol = 0
    rightCol = numCols - 1
    result = []

    while (topRow <= btmRow AND leftCol <= rightCol):
        # copy the next top row
        for i from leftCol to rightCol:
            result.push(inputMatrix[topRow][i])
        topRow++

        # copy the next right hand side column
        for i from topRow to btmRow:
            result.push(inputMatrix[i][rightCol])
        rightCol--

        # copy the next bottom row
        if (topRow <= btmRow):
            for i from rightCol to leftCol:
                result.push(inputMatri[btmRow][i])
            btmRow--

        # copy the next left hand side column
        if (leftCol <= rightCol):
            for i from btmRow to topRow:
                result.push(inputMatrix[i][leftCol])
            leftCol++

    return result
*/
function spiralCopy(inputMatrix) {

}