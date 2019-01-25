////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                          ANIMATIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
// Hangman Animation
////////////////////////////////////////

$('div.hangman').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#hangman').animate({"top": "-=15%", "opacity": "1"}, "slow" );
});

$('div.hangman').mouseleave(function() {   
    $('h2#hangman').animate({"top": "+=15%", "opacity": "0"}, "slow" );
});

////////////////////////////////////////
// Unit-4-Game Animation
////////////////////////////////////////

$('div.unit-4-game').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#unit-4-game').animate({"top": "-=15%","opacity": "1"}, "slow" );
});

$('div.unit-4-game').mouseleave(function() {   
    $('h2#unit-4-game').animate({"top": "+=15%", "opacity": "0"}, "slow" );
});


////////////////////////////////////////
// Trivia Game Animation
////////////////////////////////////////
$('div.trivia-game').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#trivia-game').animate({"top": "-=15%", "opacity": "1" }, "slow");
});

$('div.trivia-game').mouseleave(function() {   
    $('h2#trivia-game').animate({"top": "+=15%", "opacity": "0"}, "slow");
});

////////////////////////////////////////
// Rock Paper Scissors Animation
////////////////////////////////////////
$('div.rock-paper-scissors').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#rock-paper-scissors').animate({"top": "-=15%", "opacity": "1" }, "slow");
});

$('div.rock-paper-scissors').mouseleave(function() {   
    $('h2#rock-paper-scissors').animate({"top": "+=15%", "opacity": "0"}, "slow");
});


////////////////////////////////////////
// Budzz Animation
////////////////////////////////////////
$('div.budzz').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#budzz').animate({"top": "-=15%", "opacity": "1" }, "slow");
});

$('div.budzz').mouseleave(function() {   
    $('h2#budzz').animate({"top": "+=15%", "opacity": "0"}, "slow");
});

////////////////////////////////////////
// Friend Finder Animation
////////////////////////////////////////
$('div.friend-finder').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#friend-finder').animate({"top": "-=15%", "opacity": "1" }, "slow");
});

$('div.friend-finder').mouseleave(function() {   
    $('h2#friend-finder').animate({"top": "+=15%", "opacity": "0"}, "slow");
});


////////////////////////////////////////
// Cup of Sugar Animation
////////////////////////////////////////
$('div.cup-of-sugar').mouseenter(function() {
    $(this).css("cursor","pointer");
    $('h2#cup-of-sugar').animate({"top": "-=15%", "opacity": "1" }, "slow");
});

$('div.cup-of-sugar').mouseleave(function() {   
    $('h2#cup-of-sugar').animate({"top": "+=15%", "opacity": "0"}, "slow");
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    Modals
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Get the modal
var modalArc = document.getElementById('myModal-Arc');
var modalLeo = document.getElementById('myModal-Leo');
var modalNorthwestern = document.getElementById('myModal-Northwestern');
var modalUCSB = document.getElementById('myModal-UCSB');
var btnArc = document.getElementById("myBtn-Arc");
var btnLeo = document.getElementById("myBtn-Leo");
var btnNorthwestern = document.getElementById("myBtn-Northwestern");
var btnUCSB = document.getElementById("myBtn-UCSB");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modalArc.style.display = "block";
}

btn.onclick = function() {
    modalLeo.style.display = "block";
  }

  btn.onclick = function() {
    modalNorthwestern.style.display = "block";
  }

  btn.onclick = function() {
    modalUCSB.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalArc.style.display = "none";
}

span.onclick = function() {
    modalLeo.style.display = "none";
  }

  span.onclick = function() {
    modalNorthwestern.style.display = "none";
  }

  span.onclick = function() {
    modalUCSB.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalArc) {
    modalArc.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == modalLeo) {
      modalLeo.style.display = "none";
    }
  }

  window.onclick = function(event) {
    if (event.target == modalNorthwestern) {
      modalNorthwestern.style.display = "none";
    }
  }

  window.onclick = function(event) {
    if (event.target == modalUCSB) {
      modalUCSB.style.display = "none";
    }
  }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    Buttons - Display
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// $(document).ready(function() {
//     // console.log( "ready!" );
//     $("#portfolio-artwork").hide();
//     $("#portfolio-professional").hide();
//     $("#portfolio-games").show();
// });



// $("#professional-button").on("click", function(){
//     // console.log("hello");
//     $("#portfolio-professional").show();
//     $("#portfolio-games").hide();
//     $("#portfolio-artwork").hide();
// });

// $("#games-button").on("click", function(){
//     // console.log("hello");
//     $("#portfolio-professional").hide();
//     $("#portfolio-games").show();
//     $("#portfolio-artwork").hide();
  
// });


// $("#artwork-button").on("click", function(){
//     // console.log("hello");
//     $("#portfolio-professional").hide();
//     $("#portfolio-games").hide();
//     $("#portfolio-artwork").show();
   
// });



