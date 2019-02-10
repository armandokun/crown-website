// Getting users from localStorage
var users = getUsers();

function getUsers() {
  var _localStorage = localStorage.getItem("users"); // string

  if (_localStorage) {
    return JSON.parse(_localStorage);
  }

  return [];
}

//function to sign in
function login() {
  // entered data from the login-form
  var username = document.getElementById("username");
  var password = document.getElementById("psw");

  function loopLogin() {
    var match = false;
    for (var i = 0; i < users.length; i++) {
      if (
        username.value == users[i].username &&
        password.value == users[i].password
      ) {
        alert("You are loged in.");
        match = true;
        users[i].isOn = true;
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "game.php";
      }
    }
    return match;
  }

  if (loopLogin() == false) {
    alert("Username or password is incorrect.");
  }
} // end login()

//function to store username and password
function store() {
  var inputUsername = document.getElementById("username").value;
  var inputPassword = document.getElementById("psw").value;
  var inputPasswordRepeat = document.getElementById("psw-repeat").value;

  function loopRegister() {
    var exists = false;
    for (var j = 0; j < users.length; j++) {
      if (inputUsername == users[j].username) {
        alert("Username already exists in the system.");
        exists = true;
      }
    }
    return exists;
  }

  if (
    inputUsername != "" &&
    inputPassword != "" &&
    inputPasswordRepeat != "" &&
    inputPassword == inputPasswordRepeat
  ) {
    if (loopRegister() == false) {
      users.push({
        username: inputUsername,
        password: inputPassword,
        isOn: false,
        highScore: 0
      });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account has been created.");
      window.location.href = "user.php";
      return false;
    }
  } else {
    alert("Passwords don't match.");
  }
} // end store()
// start of logout()
function logout() {
  for (var l = 0; l < users.length; l++) {
    if (users[l].isOn == true) {
      users[l].isOn = false;
      localStorage.setItem("users", JSON.stringify(users));
      alert("You've successfuly loged out.");
    }
  }
}

for (var a = 0; a < users.length; a++) {
  if (users[a].isOn == true) {
    document.getElementById("homeNav").innerHTML = "Logout";
    logOut = document.getElementById("homeNav");
    logOut.setAttribute("onclick", "logout()");
  }
}
