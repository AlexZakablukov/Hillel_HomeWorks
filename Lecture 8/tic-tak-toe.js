var matrix = [["0", "x", "x"],["0", "x", "0"],["x","0","x"]];
var getWinner = function(gameBoard){
    var result;
    var getWinInColumn = function(gameBoard){
        var isWinInColumn;
        var symbol;
        var countColumns = gameBoard.length;
        var countRows = gameBoard[0].length;
        var result = [];
        for(var i = 0; i<countColumns; i++){
            symbol = gameBoard[i][0];
            isWinInColumn = true;
            for(var j = 0; j<countRows; j++){
                if(symbol!==gameBoard[i][j]){
                    isWinInColumn=false;
                    break;
                }
            }
            if(isWinInColumn){
                result.push(symbol, i + " колонке");
                return result;
            }
        }
    }
    var getWinInRow = function(gameBoard){
        var isWinInRow;
        var symbol;
        var countColumns = gameBoard.length;
        var countRows = gameBoard[0].length;
        var result = [];

        for(var i = 0; i<countRows; i++){
            symbol = gameBoard[0][i];
            isWinInRow = true;
            for(var j = 0; j<countColumns; j++){
                if(symbol!==gameBoard[j][i]){
                    isWinInRow=false;
                    break;
                }
            }
            if(isWinInRow){
                result.push(symbol, i+" строке");
                return result;
            }
        }
    }

    var getWinInDiagonal = function(gameBoard){
        var isWinInMainDiagonal = true;
        var isWinInSecondDiagonal = true;
        var countColumns = gameBoard.length;
        var countRows = gameBoard[0].length;
        var symbol1=gameBoard[0][0];
        var symbol2=gameBoard[0][countRows-1];
        var result = [];
        for(var i = 0, j =0 ; i<countColumns && j<countRows; i++, j++){
            isWinInMainDiagonal *= (symbol1===gameBoard[i][j]);
            isWinInSecondDiagonal *= (symbol2===gameBoard[i][countRows-j-1])
        }
        if(isWinInMainDiagonal){
            result.push(symbol1, "main diagonal");
            return result;
        }
        if(isWinInSecondDiagonal){
            result.push(symbol2, "second diagonal");
            return result;
        }
    }

    result = getWinInColumn(gameBoard) || getWinInRow(gameBoard) || getWinInDiagonal(gameBoard) || null;
    if(result){
        result = ("Выиграли " + result[0] + " в " + result[1]);
    }
    return result;
}

var answer = getWinner(matrix);
console.log(answer);