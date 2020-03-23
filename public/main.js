var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var heart = document.getElementsByClassName("fa-heart");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var wagerUp = document.getElementsByClassName("fa-dollar-sign");
var arrowDown = document.getElementsByClassName("fa-arrow-down");
var trophy = document.getElementsByClassName("fa-trophy");

Array.from(wagerUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

//THUMBS DOWN
Array.from(arrowDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        console.log(thumbUp)
        fetch('thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
/// TRASH
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
Array.from(trophy).forEach(function(element) {
  element.addEventListener('click', function(){
  var x = document.createElement("IMG");
  x.setAttribute("src", "./img/winner-winner.png");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "Winner Winner");
  document.getElementById('winner').src = x.src
  const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
  document.getElementById('winnerTester').innerHTML = `You have won ${thumbUp} dollars! `
})
});
// <span><%= messages[i].thumbUp -= messages[i].thumbDown %> dollars bet</span>







let counter = 0;
const box0= document.getElementById('box0')
const box1= document.getElementById('box1')
const box2= document.getElementById('box2')
const box3= document.getElementById('box3')
const box4= document.getElementById('box4')
const box5= document.getElementById('box5')
const box6= document.getElementById('box6')
const box7= document.getElementById('box7')
const box8= document.getElementById('box8')
let winLose = document.getElementById("result")


function win(which){
  let winnerStatement = `The winner is: ${which} , click on the throphy Icon down Below`;

  winLose.innerHTML = winnerStatement
  // alert ("winner"+ " " + which)
  // document.querySelectorAll(".box").forEach( box => {
  //     box.innerHTML = " "
  // })
}

function clearBoard (){
  document.querySelectorAll(".box").forEach( box => {
      box.innerHTML = " "
  })
  document.querySelectorAll("#result").forEach( box => {
      box.innerHTML = " "
  })
  counter = 0
  winLose.innerHTML = ""
}

reset.addEventListener('click', clearBoard)

undo.addEventListener('click', noGo)

function noGo(){
  alert("NO TAKE BACKS!!")
}

function checkWin(){
  if(box0.innerHTML !== " " &&  box0.innerHTML === box1.innerHTML && box1.innerHTML === box2.innerHTML){
    win(box0.innerHTML) // after alert call a function that clears the board &  //speciify if x win or O win  /// try to make both happen in one function /// remember to update the counter to 0
  }if(box3.innerHTML !== " " &&  box3.innerHTML === box4.innerHTML && box4.innerHTML === box5.innerHTML){
    win(box3.innerHTML)
  }if(box6.innerHTML !== " " &&  box6.innerHTML === box7.innerHTML && box7.innerHTML === box8.innerHTML){
    win(box6.innerHTML)
  }if(box4.innerHTML !== " " &&  box0.innerHTML === box4.innerHTML && box4.innerHTML === box8.innerHTML){
    win(box4.innerHTML)
  }if(box2.innerHTML !== " " &&  box2.innerHTML === box4.innerHTML && box4.innerHTML === box6.innerHTML){
    win(box2.innerHTML)
  }if(box0.innerHTML !== " " &&  box0.innerHTML === box3.innerHTML && box3.innerHTML === box6.innerHTML){
    win(box0.innerHTML)
  }if(box1.innerHTML !== " " &&  box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML){
    win(box1.innerHTML)
  }if(box2.innerHTML !== " " &&  box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML){
    win(box2.innerHTML)
  }
}

function markBoxAndCheckWin(event){
  const box = event.target

  if(box.innerHTML === "O" || box.innerHTML === "X"){
    alert("NO!")
    return;
  }

  counter += 1
  if(winLose.innerHTML===""){
  if (counter % 2 == 0 ){
    // game.gameState[box] = 'O'
    box.innerHTML= "O"
    // console.log ("0")
  }else{
    // console.log ("X")
    box.innerHTML= "X"
  // }if (totalBoxes === "X" || totalBoxes === "O"){
  //   alert("Tie")
  }
}
  if (counter === 9){
    document.getElementById("result").innerHTML = 'Draw, You Both Lose?'
  }
  checkWin()
  // console.log(counter, box)
}

function processBox(box){
  box.addEventListener('click', markBoxAndCheckWin)
}

const totalBoxes = document.querySelectorAll('.box') // array of a box with miniboxes inside of it
// console.log(totalBoxes)
totalBoxes.forEach(processBox) // apply processBox to each Element of totalBoxes... does the same thing to each box on an individual basis.think of it like totalBoxes and forEach are handing each box to the function processBox.
