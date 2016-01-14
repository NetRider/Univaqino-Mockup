$( document ).ready(function() {
	$("#followerAmici").on("click",function(){
		impostaFollowersAmici();
	});

	$("#followerProf").on("click",function(){
		impostaFollowersProf();
	});
	impostaFollowersAmici();
});
	

function impostaFollowersAmici()
{
	$("#lista").load("./FollowerAmici.html");

	$(".active").removeClass("active");
	$("#followerAmici").addClass("active");
}

function impostaFollowersProf()
{
	$("#lista").load("./FollowerProf.html");	

	$(".active").removeClass("active");
	$("#followerProf").addClass("active");
}
