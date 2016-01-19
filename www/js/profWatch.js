$( document ).ready(function() {
	$("#togglePosition").on("toggle",function(){
		if($("#togglePosition").hasClass("active"))
		{
			$("#formGps").show();
			$("#formNormal").hide();
		}else {
			$("#formGps").hide();
			$("#formNormal").show();
		}
	});

});
