
$(document).ready(function() {
    // console.log( "ready!" );
    $("#job-description-arc").hide();
    $("#job-description-northwestern").hide();
    $("#job-description-leo").show();
});

////////////////////////////////////////////////////////////////////////
// ARC ON CLICK
////////////////////////////////////////////////////////////////////////
$("#leo-job").on("click", function() {
    // console.log("clicked");
    $("#job-description-arc").hide();
    $("#job-description-northwestern").hide();
    $("#job-description-leo").show();
  
});

////////////////////////////////////////////////////////////////////////
// ARC ON CLICK
////////////////////////////////////////////////////////////////////////
$("#arc-job").on("click", function() {
    console.log("clicked");
    $("#job-description-leo").hide();
    $("#job-description-northwestern").hide();
    $("#job-description-arc").show();
});             

////////////////////////////////////////////////////////////////////////
// NORTHWESTERN ON CLICK
////////////////////////////////////////////////////////////////////////
$("#northwestern-job").on("click", function() {
    // console.log("clicked");
    $("#job-description-leo").hide();
    $("#job-description-arc").hide();
    $("#job-description-northwestern").show();
});
