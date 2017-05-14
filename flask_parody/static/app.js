var garbageList = [
	{"class": "strongandstable", "text": "Because Corbyn is probably a communist."},
	{"class": "strongandstable", "text": "Because we're the strongest and stablest we've ever been."},
	{"class": "strongandstable", "text": "Because that labour guy ate that bacon sandwich funny once."},
	{"class": "strongandstable", "text": "Because brexit means brexit, and election means tory government."},
	{"class": "commies", "text": "Because we actually need an opposition in this country.", "follow": {"class": "strongandstable", "text": "Because, actually, I just remembered I have some foxes to hunt. Cheerio!"}},
	{"class": "commies", "text": "Because McDonnell needs to seize the means of production.", "follow":{"class": "strongandstable", "text": "Because ... Oh, no, wait. we don't want that."}},
    {"class": "strongandstable", "text": "Because we don't want Diane Abbot to make another damn blunder... Or do we?"},
    {"class": "commies", "text": "Because Theresa May is snooping our data!", "follow": {"class": "strongandstable", "text": "Because.. err.. Strong and stable! Strong and stable!"}},
]
var classMap = {
	"strongandstable": "Tory",
	"commies": "Labour"
}
timeout = null;

var changeIt = function(text, item){
	if(!item){
		clearTimeout(timeout);
		var item = garbageList[Math.floor(Math.random()*garbageList.length)];
	}
	var vote = $('#vote');
	var voteString = "vote<h1>"+classMap[item["class"]]+"</h1>to stop the not Tories in "+text;
	vote.html(voteString);
	document.body.className = "";
	$("body").addClass(item["class"]);
	$("#why").html("Why? "+item["text"]);
	if(item.follow){
		timeout = setTimeout(function(){changeIt(text, item.follow)}, 2500);
	}
}

var getPostcode = function(){
	var postcode = $('#postcode').val();
	$.get("https://api.postcodes.io/postcodes/"+postcode, function(data){
		$('#error').html("");
		var constituency = data.result.parliamentary_constituency
		changeIt(constituency)
	}).fail(function(){ $('#error').html("Err, not with that postcode though. Please try again!");})
}

$(document).ready(function(){
	$('ul.dropdown-menu').on("click", "li", function(event){
		$('#error').html("");
		var text = $(event.currentTarget).text();
		changeIt(text);
	})

	$('#search').click(function(event){
		getPostcode();
	})

	$('#postcode').keypress(function(event){
		if(event.which == 13){
			getPostcode();
		}
	})
})
