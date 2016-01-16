$( document ).ready(function() {
	console.log("profWathc.js");
	$("#togglePosition").on("toggle",function(){
		toggleStatus();
	});

});

function toggleStatus()
{
	if($("#togglePosition").hasClass("active"))
	{
		$("#formGps").show();
		$("#formNormal").hide();

	}else {
		$("#formGps").hide();
		$("#formNormal").show();
	}
}
