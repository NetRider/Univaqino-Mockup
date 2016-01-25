var menu_widget = new Snap({
    element: document.getElementById('menu_index'),
    dragger: null,
    disable: 'right',
    addBodyClasses: true,
    hyperextensible: true,
    resistance: 0.5,
    flickThreshold: 40,
    transitionSpeed: 0.3,
    easing: 'ease',
    maxPosition: 266,
    minPosition: -266,
    tapToClose: true,
    touchToDrag: true,
    slideIntent: 60,
    minDragDistance: 10
});

$("#menucanvas_index").load("./menu.html");
$("#menu_btn_index").on("click",function(){

		menu_widget.open("left");
});

	$("#menucanvas_index").on("click","#close_menu",function(){
	menu_widget.close();
});

	//REMOVE DELETE DIV //
	   $("body").click
	    (
	      function(e)
	      {
	    if($("#remove_aule").css("display")=="block")	  
	    	  {
	        if(e.target.id !== "remove_aule")
	        {
	        	$("#remove_aule").css("display","none");
	        	
	        	$("#aule_libere").on( "click", function( event ) { 
	        		$.mobile.changePage( "auleVicine.html");
	        		} );
	        	$("#miei_corsi").on( "tap", function( event ) { 
	        		$.mobile.changePage( "corsiDaDash.html");
	        		
	        		
	        		 } );

	        	$("#notification_widget").on( "tap", function( event ) { 
	        		$.mobile.changePage( "gestione_notifiche.html");
	        		
	        		
	        		 } );

	        	$("#polo_widget").on( "tap", function( event ) { 
	        		$.mobile.changePage( "schedaPoloDaDash.html");
	        		
	        		
	        		 } );

	        }
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
	$( "#aule_libere").unbind("click");
	$("#miei_corsi").unbind("tap");
	$("#notification_widget").unbind("tap");
	$("#polo_widget").unbind("tap");
	$("#remove_aule").css("display","block");
	
	 } );

$("#aule_libere").on( "click", function( event ) { 
	$.mobile.changePage( "auleVicine.html");
	
	
	
	 } );

$("#miei_corsi").on( "tap", function( event ) { 
	$.mobile.changePage( "corsiDaDash.html");
	
	
	 } );

$("#notification_widget").on( "tap", function( event ) { 
	$.mobile.changePage( "gestione_notifiche.html");
	
	
	 } );

$("#polo_widget").on( "tap", function( event ) { 
	$.mobile.changePage( "schedaPoloDaDash.html");
	
	
	 } );






