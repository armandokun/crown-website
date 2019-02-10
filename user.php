<?php
//Includes php functions to the page
include 'php/outputNavigation.php';
include 'php/outputHead.php';
include 'php/outputFooter.php';

//Generates head and nav code
outputHead("The Crown | User");
outputNavigation("Login");
?>
<!-- Login form -->
<form id="login-form" method="get">
    <div class="container-user">
        <img src="img/logo-on.png">
        <h1>Login</h1>
        <p id="head">Welcome back, Chief! </p>
        <input type="text" placeholder="Username" name="username" required id="username">

        <input type="password" placeholder="Password" name="psw" required id="psw">

        <button type="button" value="Submit1" class="registerbtn" onclick="login()">Log In</button>
        <p id="terms">By continuing, you agree to Crown's <a href="terms.php">Terms & Services</a></p>

        <p id="acc">Not with us yet? <a href="user-register.php">Sign up</a></p>
    </div>
</form>

<?php
//Generates footer
outputFooter();
?>