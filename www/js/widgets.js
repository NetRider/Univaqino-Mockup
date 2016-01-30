//////////////////////////////////SIDE MENU\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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

function bindmenu(){
$("#menu_btn_index").on("click",function(){

		menu_widget.open("left");
		menu_widget.unbind("click");
		$("#menu_btn_index").on("click",function(){

			menu_widget.close();
			bindmenu();
	});
});
}
bindmenu();


menu_widget.on('animated', function(){
	if(menu_widget.state().state=="left"){
		$("#content").css("opacity","0.3");
	}
	else{
		$("#content").css("opacity","1");
	}
	
	});





/////////////////////////////////////WIDGET ACTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	$("#menucanvas_index").on("click","#close_menu",function(){
	menu_widget.close();
});
	
	
	
	
function unbindwindgets(){
	
	$("#miei_corsi").unbind("click");
	$("#aule_libere").unbind("click");
	$("#notification_widget").unbind("click");
	$("#polo_widget").unbind("click");
	$(".title_polo_widget").unbind("click");
	$(".following_s_image").unbind("click");
	$(".following_p_image").unbind("click");
	$(".mensa_image").unbind("click");
}	
	
function bindwidgets(){
	
	

	$(".title_polo_widget").on( "click", function( event ) { 
		$.mobile.changePage("schedaPoloDaDash.html");
		
		
		 } );	
	
	$(".following_s_image").on( "click", function( event ) { 
		$.mobile.changePage( "listaFollowers.html");
		
		 } );

	$(".following_p_image").on( "click", function( event ) { 
		$.mobile.changePage( "listaFollowers.html");
		
		 } );

	$(".mensa_image").on( "click", function( event ) { 
		$.mobile.changePage( "menuMensaDaDash.html");
		
		 } );
	
	
	$("#aule_libere").on( "click", function( event ) { 
		$.mobile.changePage( "auleVicine.html");
		
		 } );

	$("#miei_corsi").on( "click", function( event ) { 
		$.mobile.changePage( "corsiDaDash.html");
	     } );
	
	$("#single-item-rtl").on( "click", function( event ) { 
		$("#single-item-rtl").slick("slickNext");
		
		 } );


};
bindwidgets();

	

/////////////////////////////REMOVE REMOVE HOVER DIV \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	   $("body").click(function(e)
	      {
	    if($("#remove_aule").css("display")=="block"){
	             if(e.target.id !== "remove_aule")
	                   {
	            	      $("#remove_aule").css("display","none");
	            	      $("#aule_libere").removeClass("activate_widget");
	            	     // $("#aule_libere").css("display","none");
	                      bindwidgets();
	                   }
	    	      }
	    if($("#remove_miei_corsi").css("display")=="block"){
            if(e.target.id !== "remove_miei_corsi")
                  {
            	$("#remove_miei_corsi").css("display","none");
            	  $("#miei_corsi").removeClass("activate_widget");
            	//$("#miei_corsi").css("display","none");
            	bindwidgets();
            	}
   	      }
	    
	    if($("#remove_widget_preferiti").css("display")=="block"){
            if(e.target.id !== "remove_widget_preferiti")
                  {
            	$("#remove_widget_preferiti").css("display","none");
            	  $("#widget_preferiti").css("-webkit-transform","scale3d(1, 1, 1)");
            	//$("#widget_preferiti").css("display","none");
            	bindwidgets();
            	}
	    }
	      });
	
/////////////////////////////////////////PRENDI DIMENSIONE DIV PADRE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	    setTimeout(function(){ 
		
	    width=$("#aule_libere").width()+6;
	    height=$("#aule_libere").height()+6;
	
		$("#remove_aule").css("width",width);
		$("#remove_aule").css("height",height);
		
		 width=$("#miei_corsi").width()+6;
		 height=$("#miei_corsi").height()+6;
		
	     $("#remove_miei_corsi").css("width",width);
		 $("#remove_miei_corsi").css("height",height);
		 
		 width=$("#widget_preferiti").width()+6;
		 height=$("#widget_preferiti").height()+6;
		
	     $("#remove_widget_preferiti").css("width",width);
		 $("#remove_widget_preferiti").css("height",height);
		
	}, 1000);
	
	    /////////////////////////DELETE WIDGET FUNCTIONS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	    $.event.special.tap.tapholdThreshold=550;	    
	    
$("#aule_libere").on( "taphold", function( event ) { 
	unbindwindgets();
	$("#aule_libere").addClass("activate_widget");
	$("#remove_aule").css("display","block");
	
	 } );

$("#miei_corsi").on( "taphold", function( event ) { 
	unbindwindgets();
	$("#miei_corsi").addClass("activate_widget");
	$("#remove_miei_corsi").css("display","block");
	
	 } );



$("#widget_preferiti").on( "taphold", function( event ) { 
	unbindwindgets();
	
	$("#widget_preferiti").css("-webkit-transform","scale3d(0.90, 0.90, 1)");
	
   
	
    setTimeout(function(){ 
    	 $("#remove_widget_preferiti").css("display","block");
    
    }, 300);
	
	
	 } );

$("#remove_widget_preferiti_button").on( "click", function( event ) { 
	$("#widget_preferiti").css("display","none");
});

$("#remove_miei_corsi_button").on( "click", function( event ) { 
	$("#miei_corsi").css("display","none");
});

$("#remove_aule_libere_button").on( "click", function( event ) { 
	$("#aule_libere").css("display","none");
});

$(".widget_add").on( "click", function( event ) { 
	$(".fade_out_page").css("display","block");
	$(".widget_select_div").css("display","block");
});

$("chiudi_aggiungi_widget").on("click",function(){
	$(".fade_out_page").css("display","none");
	$(".widget_select_div").css("display","none");
})

$("#aggiungi_widget_preferiti").on("click",function(){
	
	$("#widget_preferiti").css("display","block");
	$("#aggiungi_widget_preferiti").addClass("select_widget");
		    setTimeout(function(){ 
		    	$(".fade_out_page").css("display","none");
		    	$(".widget_select_div").css("display","none");
		    	$("#aggiungi_widget_preferiti").removeClass("select_widget");
	}, 150);
	
	
})

$("#aggiungi_aule_libere").on("click",function(){
	
	$("#aule_libere").css("display","block");
	$("#aggiungi_aule_libere").addClass("select_widget");
		    setTimeout(function(){ 
		    	$(".fade_out_page").css("display","none");
		    	$(".widget_select_div").css("display","none");
		    	$("#aggiungi_aule_libere").removeClass("select_widget");
	}, 150);
})
		    
		    $("#aggiungi_miei_corsi").on("click",function(){
		    	
		    	$("#miei_corsi").css("display","block");
		    	$("#aggiungi_miei_corsi").addClass("select_widget");
		    		    setTimeout(function(){ 
		    		    	$(".fade_out_page").css("display","none");
		    		    	$(".widget_select_div").css("display","none");
		    		    	$("#aggiungi_miei_corsi").removeClass("select_widget");
		    	}, 150);		    
	
	
})

$(".widget_div_close").on("click",function(){
	         	$(".fade_out_page").css("display","none");
		    	$(".widget_select_div").css("display","none");
	})

////////////////////////START SLIDER\\\\\\\\\\\\\\\\\\\\\\\\\\\\

$('.single-item-rtl').slick({
	arrows: false,
	  
	});

//////////////////////////REFRESH PAGE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


var exampleLoadingFunction = function() {
	  return new Promise( function( resolve, reject ) {
	    // Run some async loading code here
	      resolve();
	   
	      reject();
	    
	  } );
	};
	

	WebPullToRefresh.init( {
	    loadingFunction: exampleLoadingFunction
	} );





