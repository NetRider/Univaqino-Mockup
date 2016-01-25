impostaFollowersAmici();

$("#followerAmici_spara").on("click",function(){

		impostaFollowersAmici();
	});

	$("#followerProf_spara").on("click",function(){
		impostaFollowersProf();
	});




function impostaFollowersAmici()
{



	$("#lista_spara").load("./FollowerAmiciSpara.html");

	$(".active").removeClass("active");
	$("#followerAmici_spara").addClass("active");
}

function impostaFollowersProf()
{
	$("#lista_spara").load("./FollowerProfSpara.html");

	$(".active").removeClass("active");
	$("#followerProf_spara").addClass("active");
}
