

////////////////////////////////////////
// Resume Animation
////////////////////////////////////////

// $("#about-link").on("click", function(){
//     $('html, body').animate({scrollTop: $(hash).offset().top
//     }, 800, function(){
 
//       // Add hash (#) to URL when done scrolling (default click behavior)
//       window.location.hash = hash;
//     }); })
// })







$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


















////////////////////////////////////////
// Resume Animation
////////////////////////////////////////






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







// frame1 = function() {
//     draw (0, 150, 150, 150);
//   };
  
//   frame2 = function() {
//     draw (10, 0, 10, 600);
//   };
 
//   frame3 = function() {
//     draw (0, 5, 70, 5);
//   };
 
//   frame4 = function() {
//     draw (60, 5, 60, 15);
//   };
 
//   torso = function() {
//     draw (60, 36, 60, 70);
//   };
 
//   rightArm = function() {
//     draw (60, 46, 100, 50);
//   };
 
//   leftArm = function() {
//     draw (60, 46, 20, 50);
//   };
 
//   rightLeg = function() {
//     draw (60, 70, 100, 100);
//   };
 
//   leftLeg = function() {
//     draw (60, 70, 20, 100);
//   };