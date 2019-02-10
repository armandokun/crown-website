<?php
function outputNavigation($pageName)
{
    echo '<header>';
//Grid of 5 columns starts here    
    echo '<div class="grid-container">';

//Array of pages to link
    $linkNames = array("Home", "Game", "Logo", "Login", "Rankings");
    $linkAddresses = array("index.php", "game.php", "index.php", "user.php", "rankings.php");

//Output navigation
    for ($x = 0; $x < count($linkNames); $x++) {
        echo '<a ';
        if ($linkNames[$x] == $pageName && $linkNames[$x] != $linkNames[2]) {
            echo 'class="selected" ';
            echo 'href= "' . $linkAddresses[$x] . '">' . $linkNames[$x];
        }
        else if ($x == 2) {
            echo 'href="index.php"><img src="img/logo.png" alt="logo" id="navlogo">';
        }
        else if ($x == 3) {
            echo 'id= "homeNav" href="' . $linkAddresses[$x]. '">' . $linkNames[$x];
        }
        else if ($linkNames[$x] != $pageName) {
            echo 'href= "' . $linkAddresses[$x] . '">' . $linkNames[$x];
        }
        echo '</a>';
    }
    echo '</div>';
    echo '</header>';
}
