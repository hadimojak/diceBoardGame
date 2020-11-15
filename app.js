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

window.addEventListener("click", (event) => {
  if (event.target.className === "diceButton") {
    diceButtonHandler(event.target);
  } else if (event.target.className === "saveButton") {
    savaButtonHandler(event.target);
  }
});

function diceButtonHandler(element) {
  const pId = element.parentElement.id;
  const roll = parseInt(Math.floor(Math.random() * 6) + 1);
  console.log(pId, roll);
  if (pId === "p1") {
    if (roll === 1) {
      p1DicePic.src = `/dicePictures/Dice-1-b.svg`;
      player1ChangeTurn = true;
      player2ChangeTurn = false;
      changeUi(player1ChangeTurn, player2ChangeTurn, pId);
    } else {
      p1DicePic.src = `/dicePictures/Dice-${roll}-b.svg`;
      document.getElementById("p2").querySelectorAll("button")[1].style =
        "display:none;";
      _p1CurScore += roll;
      p1CurScore.textContent = _p1CurScore;
    }
  } else if (pId === "p2") {
    if (roll === 1) {
      p2DicePic.src = `/dicePictures/Dice-1-b.svg`;
      player2ChangeTurn = true;
      player1ChangeTurn = false;
      changeUi(player1ChangeTurn, player2ChangeTurn, pId);
    } else {
      p2DicePic.src = `/dicePictures/Dice-${roll}-b.svg`;
      document.getElementById("p1").querySelectorAll("button")[1].style =
        "display:none;";
      _p2CurScore += roll;
      p2CurScore.textContent = _p2CurScore;
    }
  }
}

function changeUi(p1, p2, id) {
  console.log(id);
  flag = true;
  switch (flag) {
    case p1 && !p2:
      document.getElementById("p1").querySelectorAll("button")[1].style =
        "display:none;";
      document.getElementById("p2").querySelectorAll("button")[1].style =
        "display:block;";
      p1CurScore.textContent = 0;
      _p1CurScore = 0;
      console.log("p1 ride");
      break;
    case p2 && !p1:
      document.getElementById("p2").querySelectorAll("button")[1].style =
        "display:none;";
      document.getElementById("p1").querySelectorAll("button")[1].style =
        "display:block;";
      p2CurScore.textContent = 0;
      _p2CurScore = 0;
      console.log("p2 ride");
      break;
    case p1 && p2:
      console.log("code broke");
      break;
    case !p1 && !p2:
      console.log("code broke");
      break;
    default:
      break;
  }
}

function savaButtonHandler(element) {
  const pId = element.parentElement.parentElement.id;
  if (pId === "p1") {
    p1Ttl += _p1CurScore;
    p1TtlScore.textContent = p1Ttl;
    p1CurScore.textContent = 0;
    _p1CurScore = 0;
    if (p1Ttl >= 100) {
      showTheWinner("بازیکن اول");
    }
  } else {
    p2Ttl += _p2CurScore;
    p2TtlScore.textContent = p2Ttl;
    p2CurScore.textContent = 0;
    _p2CurScore = 0;
    if (p2Ttl >= 100) {
      showTheWinner("بازیکن دوم");
    }
  }
}

function showTheWinner(player) {
  alert(`winner is player : ${player}`);
}
