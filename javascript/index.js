$(document).ready(function(){
	console.log("Form Loaded");
    decrease();
    function decrease(){
        $('#release').animate({opacity:'0.6'},2000,increase);
        console.log("decrease");
    }

    function increase(){
        $('#release').animate({opacity:'0.8'},2000, decrease);        
        console.log("increase");
    }
});		
