/**
 * Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.


grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
 */

function sudoku2(grid) {
    // Check the rows and columns of the grid
    for (let i = 0; i < 9; i++) {
        const usedRow = [],
            usedColumn = [];
        for (let j = 0; j < 9; j++) {
            const numRow = +grid[i][j];
            if (numRow) {
                if (usedRow[numRow]) return false;
                usedRow[numRow] = true;
            }
            const numColumn = +grid[j][i];
            if (numColumn) {
                if (usedColumn[numColumn]) return false;
                usedColumn[numColumn] = true;
            }
        }
    }

    // Check the squares
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const used = [];
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    const num = +grid[y][x];
                    if (num) {
                        if (used[num]) return false;
                        used[num] = true;
                    }
                }
            }
        }
    }

    return true;
}

var grid = [[".", ".", ".", "1", "4", ".", ".", "2", "."],
[".", ".", "6", ".", ".", ".", ".", ".", "."],
[".", ".", ".", ".", ".", ".", ".", ".", "."],
[".", ".", "1", ".", ".", ".", ".", ".", "."],
[".", "6", "7", ".", ".", ".", ".", ".", "9"],
[".", ".", ".", ".", ".", ".", "8", "1", "."],
[".", "3", ".", ".", ".", ".", ".", ".", "6"],
[".", ".", ".", ".", ".", "7", ".", ".", "."],
[".", ".", ".", "5", ".", ".", ".", "7", "."]];


console.log(sudoku2(grid));