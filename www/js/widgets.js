	
	//REMOVE DELETE DIV //
	   $("body").click
	    (
	      function(e)
	      {
	        if(e.target.id !== "remove_aule")
	        {
	        	$("#remove_aule").css("display","none");
	        	$("#aule_libere").on( "tap", function( event ) { 
	        		$.mobile.changePage( "auleVicine.html");
	        		
	        		
	        		 } );
	        }
	      }
	    );
	

	    setTimeout(function(){ 
		
	    width=$("#aule_libere").width();
	    height=$("#aule_libere").height();
	
		$("#remove_aule").css("width",width);
		$("#remove_aule").css("height",height);
		
	}, 1000);
	
$("#aule_libere").on( "taphold", function( event ) { 
	$( "#aule_libere").unbind("tap");
	$("#remove_aule").css("display","block");
	
	 } );

$("#aule_libere").on( "tap", function( event ) { 
	$.mobile.changePage( "auleVicine.html");
	
	
	 } );

$("#miei_corsi").on( "tap", function( event ) { 
	$.mobile.changePage( "corsiDaDash.html");
	
	
	 } );



