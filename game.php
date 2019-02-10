<?php
//Includes php functions to the page
include 'php/outputNavigation.php';
include 'php/outputHead.php';
include 'php/outputFooterGame.php';

//Generates head and nav code
outputHead("The Crown | Game");
outputNavigation("Game");
?>

<div id="canvas">
    <canvas id="myCanvas" width="600" height="400"></canvas>
    <div id="flexContainer">
<input type="text" placeholder="Enter your command here" name="commandLine" id="command" onfocus='this.value= ""' autofocus>
<button type="submit" id="commandEnter" onclick="start()" >Enter</button>
    </div>
</div>

<div id="instructions">
<h3>In case you forgot: </h3>
<p>To move up: type move with positive value (eg. move 20).</p>
<p>To move down: type move with negative value (eg. move -50).</p>
<p>For every 1000 scored gets harder and harder.</p>
</div>

<?php
//Generates footer
outputFooterGame();
?>

<script src="../js/game.js"></script>;