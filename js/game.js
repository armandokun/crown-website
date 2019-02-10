// Getting users from localStorage
var users = getUsers();

function getUsers() {
  var _localStorage = localStorage.getItem("users"); // string

  if (_localStorage) {
    return JSON.parse(_localStorage);
  }

  return [];
}
// if not loged in, redirect from game page to login,
// if there's no users redirect to register
for (var i = 0; i < users.length; i++) {
  var count = 0;
  if (users[i].isOn == false) {
    count++;
  }

  if (count >= users.length) {
    window.location = "user.php";
  }
}

if (users == 0) {
  window.location = "user-register.php";
}

// CANVAS

// starting canvas
var startingCan = document.getElementById("myCanvas"),
  startCanvas = startingCan.getContext("2d");
startCanvas.font = "15px Arial";
startCanvas.textAlign = "center";
startCanvas.fillStyle = "white";
startCanvas.fillText("Instructions: ", 300, 100);
startCanvas.fillText("To start playing enter start command.", 300, 150);
startCanvas.fillText(
  "To move up: type move with positive value (eg. move 20).",
  300,
  180
);
startCanvas.fillText(
  "To move down: type move with negative value (eg. move -50).",
  300,
  210
);
startCanvas.fillText("When you ready, Enter start.", 300, 280);

// defining variables and color array

var myGamePiece;
var myObstacles = [];
var myScore;
var rowInterval = 200;
var colorArray = ["green", "pink", "red", "orange", "blue", "purple"];
var colorA = colorArray[Math.floor(Math.random() * 6)];

// starting the game, reading the command from the input

function start() {
  var cmd = "";
  var prm = "";
  document.getElementById("instructions").style.display = "grid";
  var commandInput = document.getElementById("command").value;
  if (commandInput == "start") {
    startGame();
    document.getElementById("myCanvas").outerHTML = "";
  } else {
    for (var c = 0; c < commandInput.length; c++) {
      if (commandInput.charAt(c) === " ") {
        break;
      } else {
        cmd += commandInput.charAt(c);
      }
    }
    for (var d = cmd.length + 1; d < commandInput.length; d++) {
      prm += commandInput.charAt(d);
    }
  }

  if (cmd === "move") {
    move(parseInt(prm));
  }
}
// creating new components
function startGame() {
  myGameBackground = new component(0, 0, "black", 600, 400);
  myGamePiece = new component(30, 30, "white", 10, 120);
  myScore = new component("30px", "Montserrat", "white", 220, 40, "text");
  myGameArea.start();
}

// generates new canvas

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.context = this.canvas.getContext("2d");
    var divas = document.getElementById("canvas");
    divas.insertBefore(this.canvas, divas.childNodes[0]);

    this.frameNo = 0;
    updateGameArea();
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    return;
  }
};
// how command works
function move(n) {
  if (n > 0) {
    myGamePiece.y -= n;
  } else if (n < 0) {
    myGamePiece.y -= n;
  }
}

// component  function for creating elements to the canvas
function component(width, height, color, x, y, type) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  // if touches the object then crashes
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

// updating frames and saving score per frames

function updateGameArea() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      for (var u = 0; u < users.length; u++) {
        if (users[u].isOn == true && users[u].highScore < myGameArea.frameNo) {
          users[u].highScore = myGameArea.frameNo;
        } else {
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
      return;
    }
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  // pushing new obstacles and changing colors of borders, button and obstacles
  if (myGameArea.frameNo == 1 || everyinterval(rowInterval)) {
    document.querySelector("canvas").style.border = "1px solid " + colorA;
    document.getElementById("commandEnter").style.background = colorA;
    document.getElementById("command").style.border = "1px solid " + colorA;

    x = myGameArea.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new component(30, height, colorA, x, 0));
    myObstacles.push(
      new component(30, x - height - gap, colorA, x, height + gap)
    );
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
  myScore.text = "SCORE: " + myGameArea.frameNo;
  myScore.update();
  myGamePiece.update();
  if (!myGameArea.interval) {
    myGameArea.interval = setInterval(updateGameArea, 20);
  }
  // change color for every 1000 scored
  if (myGameArea.frameNo % 1000 == 0) {
    rowInterval -= 20;
    colorA = colorArray[Math.floor(Math.random() * 6)];
  }
}
// func for every interval creating obstacles
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}
// press enter for the enter button
var input = document.getElementById("command");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("commandEnter").click();
    document.getElementById("command").value = "";
  }
});
