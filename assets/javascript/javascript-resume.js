////////////////////////////////////////////////////////////////////////
// ARC ON CLICK
////////////////////////////////////////////////////////////////////////
$("#leo-job").on("click", "img", function() {
    // console.log("clicked");
    // $("#job-description-arc").style.disply = "none";
    // $("#job-description-northwestern").style.disply = "none"; 
    $("#job-description-leo").style.color = "blue";    
  
});

////////////////////////////////////////////////////////////////////////
// ARC ON CLICK
////////////////////////////////////////////////////////////////////////
$("#arc-job").on("click", "img", function() {
    console.log("clicked");
    
    $("#job-description-leo").style.disply = "none";  
    $("##job-description-northwestern").style.disply = "none";
    $("#job-description-arc").style.disply = "block";
});             

////////////////////////////////////////////////////////////////////////
// NORTHWESTERN ON CLICK
////////////////////////////////////////////////////////////////////////
$("#northwestern-job").on("click", "img", function() {
    console.log("clicked");
    $("#job-description-leo").style.disply = "none";
    $("#job-description-arc").style.disply = "none";
    $("#job-description-northwestern").style.disply = "block";
});
