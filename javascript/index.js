$(document).ready(function(){
    decrease();
    function decrease(){
        $('#release').animate({opacity:'0.70'},2000,increase);
    }

    function increase(){
        $('#release').animate({opacity:'0.95'},2000, decrease);        
    }
});		

