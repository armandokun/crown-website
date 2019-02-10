<?php
function outputFooterGame()
{
    echo '<footer>';
    echo '<div class="footer">';
    echo '<nav>';
    echo '<ul>';

//Array of pages to link
    $linkNamesOfFooter = array("Home", "Game", "Rankings", "Report");
    $linkAddressesOfFooter = array("index.php", "game.php", "rankings.php", "report.html");

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
    echo '<script src="user.js"></script>';
    echo '</body>';
    echo '</html>';
}