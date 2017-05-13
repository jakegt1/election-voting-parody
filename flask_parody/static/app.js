var garbageList = [
	{"class": "strongandstable", "text": "Because Corbyn is probably a communist."},
	{"class": "strongandstable", "text": "Because we're the strongest and stablest we've ever been."},
	{"class": "strongandstable", "text": "Because that labour guy ate that bacon sandwich funny once."},
	{"class": "strongandstable", "text": "Because brexit means brexit, and election means tory government."},
	{"class": "commies", "text": "Well, it's not going to make any difference anyway. Have you seen the polls? Jesus."},
	{"class": "commies", "text": "Because McDonnell needs to seize the means of production."}
]
var classMap = {
	"strongandstable": "Tory",
	"commies": "Labour"
}

$(document).ready(function(){
	$('ul.dropdown-menu').on("click", "li", function(event){
		var text = $(event.currentTarget).text();
		var vote = $('#vote');
		var item = garbageList[Math.floor(Math.random()*garbageList.length)];
		var voteString = "vote<h1>"+classMap[item["class"]]+"</h1>to stop the not Tories in "+text;
		vote.html(voteString);
		$("body").addClass(item["class"]);
		$("#why").html("Why? "+item["text"]);
	})
})
