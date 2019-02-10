<?php
// Outputs the head for the page and opening body tag
function outputHead($title)
{
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8" />';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
    echo '<meta http-equiv="X-UA-Compatible" content="ie=edge" />';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" href="styles/style.css" />';
    echo '<!-- Link to font-awesome library for the arrow -->';
    echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
    echo '<!-- Link to the fonts I am using -->';
    echo '<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">';
    echo '<title>' . $title . '</title>';
    echo '</head>';
    echo '<body>';
}
?>