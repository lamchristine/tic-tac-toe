// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
//


//   $(window).on("load", function (){
//     alert("Let's Play!!")
//   });
//
//
//
// // works but hella ugly code!!
//
// var turns = 0;
//
// $(".col-md-4").on("click",function() {
//
// if ( ($(this).text() !== "X") && ($(this).text() !== "O") ) {
//     if (turns % 2 === 0) {
//         $(this).text("X");
//         turns+=1;
//     } else if (turns % 2 !== 0) {
//         $(this).text("O");
//         turns+=1;}
//   }
//   else {
//       alert("Cell already taken, please pick another");}
//
//   if ( $(".box1").text() === "X" && $(".box2").text() === "X"  && $(".box3").text() === "X" ){
//     alert("X is winner!");
//   }
//
//   else if ( $(".box4").text() === "X" && $(".box5").text() === "X"  && $(".box6").text() === "X" ){
//     alert("X is winner!");
//   }
//   else if ( $(".box7").text() === "X" && $(".box8").text() === "X"  && $(".box9").text() === "X" ){
//     alert("X is winner!");
//   }
//
//
//   else if ( $(".box1").text() === "X" && $(".box4").text() === "X"  && $(".box7").text() === "X" ){
//     alert("X is winner!");
//   }
//
//   else if ( $(".box2").text() === "X" && $(".box5").text() === "X"  && $(".box8").text() === "X" ){
//     alert("X is winner!");
//   }
//   else if ( $(".box3").text() === "X" && $(".box6").text() === "X"  && $(".box9").text() === "X" ){
//     alert("X is winner!");
//   }
//
//
//
//   else if ( $(".box1").text() === "O" && $(".box2").text() === "O"  && $(".box3").text() === "O" ){
//     alert("O is winner!");
//   }
//
//   else if ( $(".box4").text() === "O" && $(".box5").text() === "O"  && $(".box6").text() === "O" ){
//     alert("O is winner!");
//   }
//   else if ( $(".box7").text() === "O" && $(".box8").text() === "O"  && $(".box9").text() === "O" ){
//     alert("O is winner!");
//   }
//
//
//   else if ( $(".box1").text() === "O" && $(".box4").text() === "O"  && $(".box7").text() === "O" ){
//     alert("O is winner!");
//   }
//
//   else if ( $(".box2").text() === "O" && $(".box5").text() === "O"  && $(".box8").text() === "O" ){
//     alert("O is winner!");
//   }
//   else if ( $(".box3").text() === "O" && $(".box6").text() === "O"  && $(".box9").text() === "O" ){
//     alert("O is winner!");
//   }
// });
//
// $(".btn").on("click", function() {
//   $(".cell").empty();
//
//
//
// });




var newBoard = [];
var turns = 0;


$(".cell").on("click",function() {

if ( ($(this).text() !== "X") && ($(this).text() !== "O") ) {
    if (turns % 2 === 0) {
        $(this).text("X");
        var xIndex = $(".cell").index(this);
        newBoard[xIndex] = "X";
        turns+=1;
    } else if (turns % 2 !== 0) {
        $(this).text("O");
        var oIndex = $(".cell").index(this);
        newBoard[oIndex] = "O";
        turns+=1;
    }
    else {
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
                        [2,4,6]];


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


for (i = 0; i < winCombinations.length; i++) {
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

  if (xWinCount === 3) {
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




// search newBoard for {index: val}

  //   if ( newBoard.indexOf("X").inArray(winCombinations[i] ) {
  //     alert ("WINNER");
  //   } else if ( newBoard.indexOf("O") === winCombinations[i] ) {
  //     alert ("WINNER");
  //   }
  // }



//   if ( $.inArray( winCombinations[i], $winnerX ) > -1) {
//     alert("winner");
//   }
// }

 // close click function



}); // document close
