<?php
function outputFooter()
{
    echo '<footer>';
    echo '<div class="footer">';
    echo '<h1>Ready to rock?</h1>';
    echo '<a href="game.php"><img src="img/button.png" id="footer-img" alt="Play Button"></a>';
    echo '<nav>';
    echo '<ul>';

//Array of pages to link
    $linkNamesOfFooter = array("Home", "Game", "Register", "Login", "Rankings", "Report");
    $linkAddressesOfFooter = array("index.php", "game.php", "user-register.php",
        "user.php", "rankings.php", "report.html");

//Output footer unordered list
    for ($y = 0; $y < count($linkNamesOfFooter); $y++) {
        echo '<a ';
        echo 'href= "' . $linkAddressesOfFooter[$y] . '"><li>' . $linkNamesOfFooter[$y] . '</li>';
        echo '</a>';
    }

    echo '</ul>';
    echo '<address><a href="index.php">&copy; crown.io</a></address>';
    echo '</nav>';
    echo '</div>';
    echo '</footer>';
    echo '</div>';
    echo '<script src="../js/user.js"></script>';
    echo '</body>';
    echo '</html>';
}
