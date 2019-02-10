<?php
//Includes php functions to the page
include 'php/outputHead.php';
include 'php/outputNavigation.php';
include 'php/outputFooter.php';

//Calling the functions and starting 1/4 of the page
outputHead("The Crown | Home");
outputNavigation("Home");
?>
<!-- 2/4 of the page -->
<main>
    <div class="main">
        <div class="items-in-main">
            <h3>Welcome to Crown</h3>
            <p id="slogan">Join the strategy experts to build the kingdom!</p>
            <div class="button-n-text">
                <a href="user-register.php"><img src="img/button.png" alt="Button to Play Now"></a>
                <p><a href="user.php">Already with us? Log In here.</a></p>
            </div>
            <!-- arrow element -->
            <a href="#three-c"><i class="fa" id="down">&#xf107;</i></a>
        </div>
    </div>
</main>
<!-- 3/4 of the page -->
<article id="three-c">
    <h1>What can you do?</h1>
    <p id="top-p">We giving the tools for a chief to rule.</p>
    <!-- Grid of 3 columns starts here -->
    <div class="grid-wrapper">
        <section class="left">
            <img src="img/build.png" alt="Building Icon">
            <h2>Build</h2>
            <p>To build the kingdom - you need people, food and place to sleep.
                Start with few buildings to attract more population into your village.</p>
</section>
        <section class="middle">
            <img src="img/upgrade.png" alt="Upgrade Icon">
            <h2>Upgrade</h2>
            <p>To achieve the benefits of the buildings you must upgrade them.
                The bigger the level, the bigger the benefit.</p>
</section>
        <section class="right">
            <img src="img/grow.png" alt="Grow Icon">
            <h2>Grow</h2>
            <p>To feed the people you need to grow food.
                Upgrading granary gives you more space, upgrading farms gives you more food.</p>
</section>
</article>

<?php
// 4/4 of the page starts here, outputs footer
outputFooter();
?>