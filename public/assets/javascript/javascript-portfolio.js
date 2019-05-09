////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                          ANIMATIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
// Rock Paper Scissors Animation
////////////////////////////////////////
$('div.rock-paper-scissors').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#rock-paper-scissors').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.rock-paper-scissors').mouseleave(function () {
    $('h2#rock-paper-scissors').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});

////////////////////////////////////////
// Hangman Animation
////////////////////////////////////////

$('div.hangman').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#hangman').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.hangman').mouseleave(function () {
    $('h2#hangman').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});

////////////////////////////////////////
// Budzz Animation
////////////////////////////////////////
$('div.budzz').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#budzz').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.budzz').mouseleave(function () {
    $('h2#budzz').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});

////////////////////////////////////////
// Friend Finder Animation
////////////////////////////////////////
$('div.friend-finder').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#friend-finder').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.friend-finder').mouseleave(function () {
    $('h2#friend-finder').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});


////////////////////////////////////////
// Cup of Sugar Animation
////////////////////////////////////////
$('div.cup-of-sugar').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#cup-of-sugar').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.cup-of-sugar').mouseleave(function () {
    $('h2#cup-of-sugar').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});

////////////////////////////////////////
// News-Scraper Animation
////////////////////////////////////////
$('div.news-scraper').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#news-scraper').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.news-scraper').mouseleave(function () {
    $('h2#news-scraper').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});

////////////////////////////////////////
// Best-Lyfe Animation
////////////////////////////////////////

$('div.best-lyfe').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#best-lyfe').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.best-lyfe').mouseleave(function () {
    $('h2#best-lyfe').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});

////////////////////////////////////////
// Best-Lyfe-Mobile Animation
////////////////////////////////////////

$('div.best-lyfe-mobile').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#best-lyfe-mobile').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.best-lyfe-mobile').mouseleave(function () {
    $('h2#best-lyfe-mobile').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});



////////////////////////////////////////
// Cup-of Sugar Animation
////////////////////////////////////////

$('div.cos-react').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $('h2#cos-react').animate({ "top": "-=15%", "opacity": "1" }, "slow");
});

$('div.cos-react').mouseleave(function () {
    $('h2#cos-react').animate({ "top": "+=15%", "opacity": "0" }, "slow");
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    Modals
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Get the modal
var modal = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function () {
    modal[0].style.display = "block";
}
btn[1].onclick = function () {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
    modal[0].style.display = "none";
}
span[1].onclick = function () {
    modal[1].style.display = "none";
}
btn[2].onclick = function () {
    modal[2].style.display = "block";
}
btn[3].onclick = function () {
    modal[3].style.display = "block";
}
span[2].onclick = function () {
    modal[2].style.display = "none";
}
span[3].onclick = function () {
    modal[3].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
