let turn = "x";
let clickAudio = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
);
let music = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
);
let overMusic = new Audio(
  "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3"
);
let funnyMusic = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
);

const changeTurn = () => {
  return turn === "x" ? "o" : "x";
};
const checkWin = () => {
  let boxText = document.querySelectorAll(".test");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[1]].innerText === boxText[e[2]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".win-popover-background").style.display = "block";
      document.getElementById("winner-message").innerText =
        "Hurray!! " + `"${boxText[e[0]].innerText}"` + " Won";
      music.pause();
      setTimeout(() => {
        overMusic.play();
        // funnyMusic.play();
      }, 500);
    }
  });
};

let gameBoxes = document.querySelectorAll(".game-box");
let text = Array.from(document.querySelectorAll(".test"));
Array.from(gameBoxes).forEach((gameBox, index) => {
  gameBox.addEventListener("click", () => {
    clickAudio.play();
    text[index].innerHTML = turn;
    turn = changeTurn();
    checkWin();
  });
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  text.forEach((element) => {
    element.innerHTML = "";
  });
});

let PopOver = document.querySelector(".popover-background");
let popover = document.querySelector(".popover");
PopOver.style.display = "none";
setTimeout(() => {
  PopOver.style.display = "block";
  popover.classList.add("show-popover");
}, 500);

let play = document.getElementById("music-btn");
play.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    play.innerText = "Pause Music";
  } else {
    music.pause();
    play.innerText = "Play Music";
  }
});

let start = document.getElementById("start");
start.addEventListener("click", () => {
  PopOver.style.display = "none";
  music.play();
});

let Playagain = document.getElementById("play-again");
let winPopover = document.querySelector(".win-popover-background");
Playagain.addEventListener("click", () => {
  winPopover.style.display = "none";
  text.forEach((element) => {
    element.innerHTML = "";
  });
  overMusic.pause();
  // funnyMusic.pause();
  setTimeout(() => {
    music.play();
  }, 500);
});
