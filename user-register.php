<?php
//Includes php functions to the page
include 'php/outputNavigation.php';
include 'php/outputHead.php';
include 'php/outputFooter.php';

//Generates head and nav code
outputHead("The Crown | User");
outputNavigation("Login");
?>
<!-- Register form -->
<form name="register" method="get" onsubmit="return store()">
    <div class="container-user">
        <img src="../img/logo-on.png" alt="logo">
        <h1>Register</h1>
        <p id="head">Sign up to open the gates of the Crown world.</p>

        <input type="text" placeholder="Username" id="username" required>

        <input type="password" placeholder="Password" id="psw" required>

        <input type="password" placeholder="Repeat Password" id="psw-repeat" required>

        <p id="terms">By creating an account you agree to my <a href="terms.php" id="terms-a">Terms & Services</a></p>
        <button type="submit" value="Submit" class="registerbtn">Register</button>

        <p id="acc">Already have an account? <a href="user.php">Sign in</a></p>
    </div>
</form>
<?php
//Generates footer
outputFooter();
?>