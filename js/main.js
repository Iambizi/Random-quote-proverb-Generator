$(document).ready(function(){
	$(".bodycolor").css("background-color", "#d5d5d5");
	// sets original page bckgrd color to grey
	$(".newquote").click(function clickitypoo() {
		$(".twitter-share-button").click(function() {
			window.open(this.href + prePopedTweet(), '_blank', 'height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
			return false;

			function prePopedTweet() {
				var tweeturl = $("#quoteDisplay").text();
				tweeturl += "%20";
				tweeturl += $("#sourceDisplay").text();
				return tweeturl;
			}
		}); //--tweeter button ending-- //opens small pop up and modifies URl to prepoulate tweeter box with page content.
		$(".tumblr-share-button").click(function() {
			window.open(this.href + prePopedPost(), '_blank', 'height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
			return false;

			function prePopedPost() {
				var posturl = "tool?posttype=quote&tags=quotes,freeCodeCamp";
				posturl += "&caption=" + $("#sourceDisplay").text().replace("-", "");
				posturl += "&content=" + $("#quoteDisplay").text().replace(/"/g, '');
				posturl += "&canonicalUrl=";
				posturl += "https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
				return posturl;
			}
		}); //--tumblr button ending-- //opens small pop up and modifies URl to prepoulate post with page content.
		var randomNumber = Math.floor(Math.random() * quoteArray.length);
		var newQuo = '"' + quoteArray[randomNumber].quote + '"';
		$("#quoteDisplay").text(newQuo);
		var newSource = '-' + quoteArray[randomNumber].source;
		$("#sourceDisplay").text(newSource);
		// generates random selection of quoteArray item (quote and source) then displays it in respective DIV element in html
		function nColor() {
			var letters = "0123456789ABCDEF";
			var color = "#";
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		} //geneartes random color as you click on newquote
		$(".asterisk").css("color", "white");
	  $(".bodycolor").css("background-color", nColor())
	});	//--clicktypoo ending-- //On click asterisk turns white and rest of the page receives random color from nColor()


	  $(".bubble").hide();
	  $(".asterisk").hover(function() {
	  	$(".bubble").fadeIn()
	  }, function() {
	  	$(".bubble").fadeOut(3000);
	  }); //--asterisk hover ending-- //hides and shows bubble
});
