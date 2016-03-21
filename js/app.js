// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


var newBoard = [];
var turns = 0;


$(".cell").on("click",function() {
  if ( ($(this).text() !== "X") && ($(this).text() !== "O") ) {
    if (turns % 2 === 0) {
      $(this).text("X");
      var xIndex = $(".cell").index(this);
      newBoard[xIndex] = "X";
      turns += 1;
    } else if (turns % 2 !== 0) {
        $(this).text("O");
        var oIndex = $(".cell").index(this);
        newBoard[oIndex] = "O";
        turns += 1;
    } else {
        alert("Cell already taken, please pick another");
    }
  }

  var winCombinations = [ [0,1,2],
                          [3,4,5],
                          [6,7,8],

                          [0,3,6],
                          [1,4,7],
                          [2,5,8],

                          [0,4,8],
                          [2,4,6] ];

  for (var i = 0; i < winCombinations.length; i++) {
    var xWinCount = 0;
    var oWinCount = 0;
    for (j = 0; j < winCombinations[i].length; j++) {
      var index = winCombinations[i][j];
      if (newBoard[index] === "X") {
        xWinCount += 1;
      } else if (newBoard[index] === "O") {
        oWinCount += 1;
      }
    }

    if (turns === 9 && xWinCount !== 3 && oWinCount !== 3) {
      alert ("Cat's Game");
      break;
    } else if (xWinCount === 3) {
      alert ("X is Winner");
    } else if (oWinCount === 3) {
      alert ("O is Winner");
    }
  }
});

$(".btn").on("click", function() {
  $(".cell").empty();
  turns = 0;
  newBoard = [];
});



// ***ALTERNATIVE METHOD FOR CHECKING FOR WINNING COMBO***
// for (i = 0; i < winCombinations.length; i++) {
//
//     var winCombo =  winCombinations[i];
//
//     var index0 = winCombo[0];
//     var index1 = winCombo[1];
//     var index2 = winCombo[2];
//
//     if( (newBoard[index0] === "X") &&  (newBoard[index1] === "X") && (newBoard[index2] === "X") ) {
//       alert("X is the winer!");
//     } else if ( (newBoard[index0] === "O") &&  (newBoard[index1] === "O") && (newBoard[index2] === "O") ) {
//       alert("O is the winner!");
//     }
//   }
// }
// });

}); // document close
