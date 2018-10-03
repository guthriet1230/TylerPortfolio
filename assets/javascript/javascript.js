////////////////////////////////////////
// Resume Animation
////////////////////////////////////////






////////////////////////////////////////
// Hangman Animation
////////////////////////////////////////

$('.hangman').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('#hangman').animate({"top": "-=115px" }, "slow" );
});

$('#hangman').mouseleave(function() {   
    $(this).animate({"top": "+=115px" }, "slow" );
});

////////////////////////////////////////
// Unit-4-Game Animation
////////////////////////////////////////

$('.unit-4-game').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('#unit-4-game').animate({"top": "-=115px" }, "slow" );
});

$('#unit-4-game').mouseleave(function() {   
    $(this).animate({"top": "+=115px" }, "slow" );
});


////////////////////////////////////////
// Trivia Game Animation
////////////////////////////////////////
$('.trivia-game').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('#trivia-game').animate({"top": "-=115px" }, "slow" );
});

$('#trivia-game').mouseleave(function() {   
    $(this).animate({"top": "+=115px" }, "slow" );
});

////////////////////////////////////////
// Rock Paper Scissors Animation
////////////////////////////////////////
$('.rock-paper-scissors').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('#rock-paper-scissors').animate({"top": "-=115px" }, "slow" );
});

$('#rock-paper-scissors').mouseleave(function() {   
    $(this).animate({"top": "+=15px" }, "slow" );
});