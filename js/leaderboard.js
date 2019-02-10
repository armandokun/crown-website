// Getting users from localStorage
users;

var users = getUsers();

function getUsers() {
  var _localStorage = localStorage.getItem("users"); // string

  if (_localStorage) {
    return JSON.parse(_localStorage);
  }

  return [];
}

var secondUsers = users;
function bubbleSort() {
  var len = secondUsers.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (secondUsers[j - 1].highScore < secondUsers[j].highScore) {
        var temp = secondUsers[j - 1];
        secondUsers[j - 1] = secondUsers[j];
        secondUsers[j] = temp;
      }
    }
  }
  return secondUsers;
}

for (var i = 0; i < users.length; i++) {
  bubbleSort();
  var leaderBoard = document.getElementById("tablete");
  var tableRow = document.createElement("tr");
  var tableCell1 = document.createElement("td");
  var tableCell2 = document.createElement("td");
  var tableCell3 = document.createElement("td");
  var rankCell = document.createTextNode(i + 1 + ".");
  var userCell = document.createTextNode(users[i].username);
  var scoreCell = document.createTextNode(users[i].highScore);

  leaderBoard.appendChild(tableRow);

  tableRow.appendChild(tableCell1);
  tableRow.appendChild(tableCell2);
  tableRow.appendChild(tableCell3);

  tableCell1.appendChild(rankCell);
  tableCell2.appendChild(userCell);
  tableCell3.appendChild(scoreCell);
}
