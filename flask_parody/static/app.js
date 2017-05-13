var garbageList = [
	"Because Corbyn is probably a communist",
	"Because we're the strongest and stablest we've ever been",
	"Because that labour guy ate that bacon sandwich funny once",
	"Because brexit means brexit, and election means tory government.",
]

$(document).ready(function(){
	$('ul.dropdown-menu').on("click", "li", function(event){
		var text = $(event.currentTarget).text();
		var vote = $('#vote');
		var voteString = "vote<h1>Tory</h1>to stop the not Tories in "+text;
		vote.html(voteString);
		$("body").addClass("strongandstable");
		var item = garbageList[Math.floor(Math.random()*garbageList.length)];
		$("#why").html("Why? "+item);
	})
})
