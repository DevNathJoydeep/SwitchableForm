$(document).ready(function() {
   
    $('#signUp').on("click", function() {
        $('#signInForm').fadeOut("fast");
        $('#signUpForm').delay("slow").fadeIn("fast");
        $('.whiteBox').css("left", "25%");
    });  
    
    $('#signIn').on("click", function() {
        $('#signUpForm').fadeOut("fast");
        $('#signInForm').delay("slow").fadeIn("fast");
        $('.whiteBox').css("left", "50%");
    });   

});