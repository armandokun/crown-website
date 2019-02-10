<?php
//Including php functions to the page
include 'php/outputNavigation.php';
include 'php/outputHead.php';
include 'php/outputFooter.php';
//Generates head and nav code
outputHead("The Crown | Rankings");
outputNavigation("Rankings");
?>

    <!-- Table starts here -->
    <div class="table">
        <h1>Rankings</h1>
        <p>The mighty and the brave.</p>
        <table id="tablete">
            <tr id="head-table">
                <th id="top-left">Rank</th>
                <th>Username</th>
                <th id="top-right">Score</th>
        </table>
    </div>
    <!-- Table ends here -->

<?php
//Outputs footer
outputFooter();
?>

<script src="../js/leaderboard.js"></script>