$( document ).ready(function() {
	

	$("#cancella_notifiche").on("click",function(){
		delete_notifications();
	});	
	
	
function delete_notifications(){
	$('#notifica_1').animate({left: "3000px"}, 1000);
	setTimeout(function(){
		$('#notifica_2').animate({left: "3000px"}, 800);
		setTimeout(function(){
			$('#notifica_3').animate({left: "3000px"}, 800);
			setTimeout(function(){
				$('#notifica_4').animate({left: "3000px"}, 800);
				setTimeout(function(){
					$('#notifica_5').animate({left: "3000px"}, 800);
					setTimeout(function(){
						$('#notifica_6').animate({left: "3000px"}, 800);
						
						}, 50);
					
					}, 50);
				
				}, 50);
			
			}, 50);
		
		}, 50);
	}	
	var list = document.getElementById('slippylist');


list.addEventListener('slip:beforeswipe', function(e) {
   
});

list.addEventListener('slip:swipe', function(e) {
    // e.target list item swiped
   
        e.target.parentNode.removeChild(e.target);
   
});

list.addEventListener('slip:beforereorder', function(e) {
	
         e.preventDefault();
     
});

list.addEventListener('slip:afterswipe', function(e){
    e.target.parentNode.removeChild(e.target);
}, false);

new Slip(list);
})