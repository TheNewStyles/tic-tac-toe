(function() {

    var board = [];
    var mainClass = document.getElementsByClassName("main");
    var counter = 0;
    var playerX = "X";
    var playerO = "O";
    var isGameComplete = false;

    initBoard();


    Array.from(mainClass).forEach(function(element) {
            element.addEventListener('click', start);
    });

    function initBoard() {
        for (var i = 0; i <= 2; i++){
            board.push([0,0,0]);
        }
    }

    function start() {
        if(this.innerText != playerX && this.innerText != playerO && !isGameComplete) {
            counter++;

            if (counter % 2 === 0) {
                this.innerText = playerX;
                executePlayersTurn(this.id, playerX);
                checkForWinnerRows();
                checkForWinnerColumns();
                checkForWinnerDiag();
            }
            else {
                this.innerText = playerO;
                executePlayersTurn(this.id, playerO);
                checkForWinnerRows();
                checkForWinnerColumns();
                checkForWinnerDiag();
            }
        }
    }

    function executePlayersTurn(id, player) {
        var row = id.slice(0,1);
        var col = id.slice(2,3);

        board[row][col] = player;
        console.log(board);
    }

    function checkForWinnerRows() {
        for (var i = 0; i < board.length; i++){
            var oCounter = 0;
            var xCounter = 0;
            for (var j = 0; j < board[i].length; j++){
                if (board[i][j] === playerO) {
                    oCounter++;
                    checkWin(oCounter, playerO);
                }else if (board[i][j] === playerX){
                    xCounter++;
                    checkWin(xCounter, playerX);
                }
            }
        }
    }

    function checkForWinnerColumns() {

        for (var i = 0; i < board.length; i++){
            iterateThroughColumn(i);
        }
    }

    function iterateThroughColumn(column) {
        var oCounter = 0;
        var xCounter = 0;

        for (var i = 0; i < board.length; i++)
        {
            if (board[i][column] === playerO){
                oCounter++;
                checkWin(oCounter, playerO);
            }
            else if (board[i][column] === playerX){
                xCounter++;
                checkWin(xCounter, playerX);
            }
        }
    }

    function checkForWinnerDiag() {
        bottomToTopDiag();
        topToBottomDiag();
    }

    function bottomToTopDiag() {
        var counter = 0;
        var oCounter = 0;
        var xCounter = 0;

        for (var j = board.length - 1; j >= 0; j--){


            if (board[j][counter] === playerX){
                xCounter++;
                checkWin(xCounter, playerX);
            } else if (board[j][counter] === playerO){
                oCounter++;
                checkWin(oCounter, playerO);
            }
            counter++;
        }
    }

    function topToBottomDiag() {
        var oCounter = 0;
        var xCounter = 0;

        for (var i = 0; i < board.length; i++){

            if (board[i][i] === playerX){
                xCounter++;
                checkWin(xCounter, playerX);
            } else if (board[i][i] === playerO){
                oCounter++;
                checkWin(oCounter, playerO);
            }
        }
    }

    function checkWin(counter, player) {
        if (counter > 2){
            displayWinnerBox();
            console.log(`${player} PLAYER WON`);
        }
    }

    function displayWinnerBox() {
        var popup = document.getElementById("popup");
        isGameComplete = true;
        popup.style.display = 'inline';
    }
    
})();
