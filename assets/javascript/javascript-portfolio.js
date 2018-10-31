////////////////////////////////////////
// Hangman Animation
////////////////////////////////////////

$('div.hangman').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#hangman').animate({"top": "-=35px", "opacity": "1"}, "slow" );
});

$('div.hangman').mouseleave(function() {   
    $('h2#hangman').animate({"top": "+=35px", "opacity": "0"}, "slow" );
});

////////////////////////////////////////
// Unit-4-Game Animation
////////////////////////////////////////

$('div.unit-4-game').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#unit-4-game').animate({"top": "-=35px","opacity": "1"}, "slow" );
});

$('div.unit-4-game').mouseleave(function() {   
    $('h2#unit-4-game').animate({"top": "+=35px", "opacity": "0"}, "slow" );
});


////////////////////////////////////////
// Trivia Game Animation
////////////////////////////////////////
$('div.trivia-game').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#trivia-game').animate({"top": "-=35px", "opacity": "1" }, "slow");
});

$('div.trivia-game').mouseleave(function() {   
    $('h2#trivia-game').animate({"top": "+=35px", "opacity": "0"}, "slow");
});

////////////////////////////////////////
// Rock Paper Scissors Animation
////////////////////////////////////////
$('div.rock-paper-scissors').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#rock-paper-scissors').animate({"top": "-=35px", "opacity": "1" }, "slow");
});

$('div.rock-paper-scissors').mouseleave(function() {   
    $('h2#rock-paper-scissors').animate({"top": "+=35px", "opacity": "0"}, "slow");
});


$("#professional-button").on("click", function(){
    console.log("hello")
})

$("#games-button").on("click", function(){
    console.log("hello")
})


$("#artwork-button").on("click", function(){
    console.log("hello")
})
