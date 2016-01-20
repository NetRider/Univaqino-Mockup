var checkPage = function(){


    var elm = document.getElementsByClassName("content")[0];
    var script = elm.id;
	
    if(script=="gestione_notifiche"){
    	 $.getScript("libs/SlipJs/slip.js");
    	
    }
     /*
     if(script=="menu") {
	     
	   	 $.getScript("libs/jquery-1.12.0.min.js");
	     $.getScript("libs/jquery.mobile.custom/jquery.mobile.custom.min.js");
	
	     $.getScript("js/navigation.js");
	    }
	 
*/
	    if(script) {
	        $.getScript("js/"+elm.id+".js")
	        .done(function( script, textStatus ) {
	           console.log( textStatus );
	        })
	        .fail(function( jqxhr, statusText, errorThrown ) {
	            console.log(errorThrown);
	            console.log(statusText);
	            console.log(jqxhr);
	        });
	    }
	};


