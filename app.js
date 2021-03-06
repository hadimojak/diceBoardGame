const p1DicePic = p1.querySelector("img");
const p2DicePic = p2.querySelector("img");
let p1CurScore = p1.querySelector("#curScore");
let p2CurScore = p2.querySelector("#curScore");
let _p1CurScore = 0;
let _p2CurScore = 0;
let p1TtlScore = p1.querySelector("p");
let p2TtlScore = p2.querySelector("p");
p1TtlScore.textContent = 0;
p2TtlScore.textContent = 0;
let p1Ttl = 0;
let p2Ttl = 0;
let player1ChangeTurn = false;
let player2ChangeTurn = false;
document.getElementById("row1").addEventListener("click", (event) => {
  if (event.target.className === "diceButton") {
    diceButtonHandler(event.target);
  } else if (event.target.className === "saveButton") {
    savaButtonHandler(event.target);
  }
});
function diceButtonHandler(element) {
  const pId = element.parentElement.id;
  const roll = parseInt(Math.floor(Math.random() * 6) + 1);
  // console.log(pId, roll, "   from diceHandler");
  if (pId === "p1") {
    p1DicePic.src = `/dicePictures/Dice-${roll}-b.svg`;
    if (roll === 1) {
      changeUi((player1ChangeTurn = true), (player2ChangeTurn = false));
    } else {
      changeUi((player1ChangeTurn = false), (player2ChangeTurn = true));
      _p1CurScore += roll;
      p1CurScore.textContent = _p1CurScore;
    }
  } else if (pId === "p2") {
    p2DicePic.src = `/dicePictures/Dice-${roll}-b.svg`;
    if (roll === 1) {
      changeUi((player1ChangeTurn = false), (player2ChangeTurn = true), pId);
    } else {
      changeUi((player1ChangeTurn = true), (player2ChangeTurn = false), pId);
      _p2CurScore += roll;
      p2CurScore.textContent = _p2CurScore;
    }
  }
}
function changeUi(p1, p2) {
  switch ((flag = true)) {
    case p1 && !p2:
      changeTrunUi("p1", "p2");
      p1CurScore.textContent = 0;
      _p1CurScore = 0;
      break;
    case p2 && !p1:
      changeTrunUi("p2", "p1");
      p2CurScore.textContent = 0;
      _p2CurScore = 0;
      break;
  }
}
function changeTrunUi(p1, p2) {
  document.getElementById(p1).querySelectorAll("button")[1].style =
    "display:none;";
  document.getElementById(p2).querySelectorAll("button")[1].style =
    "display:block;";
  document.getElementById(p1).style.borderColor = "white";
  document.getElementById(p2).style.borderColor = "red";
}
function savaButtonHandler(element) {
  const pId = element.parentElement.parentElement.id;
  if (pId === "p1") {
    p1Ttl += _p1CurScore;
    p1TtlScore.textContent = p1Ttl;
    if (_p1CurScore === 0) {
      return;
    } else {
      changeUi((player1ChangeTurn = true), (player2ChangeTurn = false));
    }
    p1CurScore.textContent = 0;
    _p1CurScore = 0;
    if (p1Ttl >= 20) {
      alert(`winner is :${pId}`);
    }
  } else {
    p2Ttl += _p2CurScore;
    p2TtlScore.textContent = p2Ttl;
    if (_p2CurScore === 0) {
      return;
    } else {
      changeUi((player1ChangeTurn = false), (player2ChangeTurn = true));
    }
    p2CurScore.textContent = 0;
    _p2CurScore = 0;
    if (p2Ttl >= 20) {
      alert(`winner is :${pId}`);
    }
  }
}
