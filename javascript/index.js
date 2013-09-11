$(document).ready(function(){
	
    
		window.setInterval(function() {
  		var elem = document.getElementById('display');
  		elem.scrollTop = elem.scrollHeight;}, 10);

		var auto_refresh = setInterval(
		function ()
		{
			$('#display').load('http://shoutpadsud-epipuoy.rhcloud.com/fetch.php');
		}, 1000);

		/*var updates = setInterval(
		function ()
		{
			$('#updates').load('fetchupdates.php');
		}, 100);
*/
		$(document).keyup(function(e) {

				if (e.keyCode == 27) {
					$("#cover").fadeOut(1000);
							
				}   
			});



		
		
		function startBallOne() {
    	$("#orange-ball").fadeIn();
        
        $("#orange-ball").circulate({
            speed: 700,
            height: -430,
            width: -0,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [2, 2, -1, -1]
        });
    }
    
    function startBallTwo() {
    	$("#blue-ball").fadeIn();
    
    	$("#blue-ball").circulate({
            speed: 200,
            height: -330,
            width: 130,
            sizeAdjustment: 30,
            loop: true,
            zIndexValues: [-2, -2, 2, 2]
        });
        
    }
    	
    function startBallThree() {
        
		  $("#green-ball").fadeIn();
    
        $("#green-ball").circulate({
            speed: 1000,
            height: -50,
            width: -370,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [-1, -1, -3, -3]
        });
      
    }
            
    startBallOne();
    setTimeout(startBallTwo, 500);
    
    setTimeout(startBallThree, 4000);

///----------------------------------Updates
    setInterval(function() {
        $.ajax({url:"fetchupdates.php",ifModified: true,success:function(result){
        
        if(result!=localStorage.pastupdate){
             $("#updates").fadeIn(1000);
             $("#updates").html(result);
             localStorage.pastupdate=result;
        }
         hide();
        }});    
        }, 4000);
    function hide(){
    setTimeout(function(){
         $("#updates").fadeOut(1500);
        
    },2000);
}

});		
