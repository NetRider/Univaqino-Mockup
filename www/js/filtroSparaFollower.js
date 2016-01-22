impostaFollowersAmici();

$("#followerAmici").on("click",function(){

		impostaFollowersAmici();
	});

	$("#followerProf").on("click",function(){
		impostaFollowersProf();
	});




function impostaFollowersAmici()
{



	$("#lista").load("./FollowerAmiciSpara.html");

	$(".active").removeClass("active");
	$("#followerAmici").addClass("active");
}

function impostaFollowersProf()
{
	$("#lista").load("./FollowerProfSpara.html");

	$(".active").removeClass("active");
	$("#followerProf").addClass("active");
}
