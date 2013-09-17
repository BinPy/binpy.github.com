$(document).ready(function(){
    decrease();
    function decrease(){
        $('#release').animate({opacity:'0.6'},2000,increase);
    }

    function increase(){
        $('#release').animate({opacity:'0.8'},2000, decrease);        
    }
});		

