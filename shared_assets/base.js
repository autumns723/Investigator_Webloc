/**
 * Image asset preloader
 * Loads the initial game to prevent missing art, and also loads remaining
 * game assets in the background while player is going through Act 1
 *
 * @param array of strings (image URLs)
 */

function preload(images) {
	if (!images || images.constructor !== Array) {
		return false;
	}

	var loaded = new Array();
	for (i = 0; i < images.length; i++) {
		loaded[i] = new Image();
		loaded[i].src = images[i];
	}
}

/**
 * Dialogue Logic
 * Creates a single dialogue box.
 *
 * @param string name, string speech, string clue
 */
 
function dialogue(name,speech,clue) {
	$("#dialogue").prepend("<div class='dialogue-cover'><div class='dialogue'><h2>"+name+"</h2><p>"+speech+"</p></div></div>");

	$("#dialogue").find("div.dialogue-cover").one("click", function(){
		$(this).children("div.dialogue").fadeOut(function() {
			$(this).parent().remove();

			if (clue) {
				if (clue == "act3checkpoint") { // If it's the ending accusation checkpoint and not a clue
					$("#accuse-murderer").fadeIn();
				} else {
					showCaseFolder(clue); // Otherwise, show a clue/suspect
				}
			}

			if (! $("#dialogue").find("div.dialogue-cover").length ) { // If we're ending a conversation
				$(".arrows").fadeIn();
				if ($("#end-interrogation").length) { // Resume any hidden interrogations
					$("#interrogation").fadeIn();
				} else {
					$("#convo-characters").fadeOut(function() {
						$("#convo-characters").empty();
					});
				}
			}
		});
	});
}

/**
 * Conversation Logic
 * Creates multiple dialogue boxes. If your number of args isn't a multiple of 3, the game breaks.
 * Make sure to pass in empty strings where necessary (also applies to dialogue()).
 *
 * @see dialogue()
 * @param string name, string speech, string clue (as many as there are dialogue boxes)
 */
 
function conversation() {
	for (i = 0; i < conversation.arguments.length; i+=3) {
		dialogue(conversation.arguments[i],conversation.arguments[i+1],conversation.arguments[i+2]);
	}
}

/**
 * Alert new clue/suspect logic
 * 
 * @see dialogue()
 * @param string clueID
 */

function showCaseFolder(clueID) {
	if (clueID == "victim" || clueID == "suspect1" || clueID == "suspect2" || clueID == "suspect3" || clueID == "suspect4") {
		$("#clues-folder").hide();
		$("#suspects-folder").show();
	} else {
		$("#suspects-folder").hide();
		$("#clues-folder").show();
	}
	$("#case-file-bg").fadeIn(0, function() {
		$("#"+clueID).addClass("revealed").children().fadeIn(2500);
	});
}

/**
 * Interrogation/choose question logic
 * 
 * @see dialogue()
 * @param string clueID
 */

function interrogation() {
	for (i = 0; i < interrogation.arguments.length; i+=2) {
		$("#interrogation").find("p").append("<a id="+interrogation.arguments[i]+">Q: "+interrogation.arguments[i+1]+"</a>");
	}

	$("#end-interrogation").click(function(){
		$("#interrogation").fadeOut(function() {
			$("#interrogation").find("p").empty();
		});
		$("#convo-characters").fadeOut(function() {
			$("#convo-characters").empty();
		});
	});
}

/**
 * Dramatic dialogue for Act 3 ending scenes
 * Have custom appearing/disappearing characters, plus unique IDs for
 * special event triggers
 * 
 * @see dialogue()
 * @param string clueID
 */

function dramaticDialogue(id,name,speech,characters) {
	$("#dialogue").prepend("<div class='dialogue-cover' id="+id+"><div class='dialogue'><h2>"+name+"</h2><p>"+speech+"</p></div></div>");

	for (i = 0; i < characters.length; i++) {
		$("#"+id).append("<div id="+characters[i]+" class='character'></div>");
	}

	$("#"+id).one("click", function(){
		$(this).children("div.character").fadeOut();
		$(this).children("div.dialogue").fadeOut(function() {
			$(this).parent().remove();
		});
	});
}

$(document).ready(function() {
	/**
	 * Set up sound volume
	 *
	 * @param none
	 */

	bgmusic = document.getElementById("bgmusic");
	bgmusic.volume = 0.5;

	/**
	 * Set up sound toggling
	 *
	 * @param none
	 */
	 
	window.sound = true;

	$("#sound-toggle").click(function() {
		$(this).toggleClass("sound-disabled");
		if (window.sound == true) {
			bgmusic.pause();
			window.sound = false;
		} else {
			bgmusic.load();
			bgmusic.play();
			bgmusic.volume = 0.5;
			window.sound = true;
		}
	});

	/**
	 * Set up case folder UI
	 *
	 * @param click event
	 */

	$("#case-file-toggle").click(function() {
		$("#case-file-bg").fadeIn(500);
	});
	$("#case-file-bg").click(function(){
		$("#case-file-bg").fadeOut(300);
	});
	$('#tab-clues').click(function(event){
		event.stopPropagation();
		$('#suspects-folder').hide();
		$('#clues-folder').show();
	});
	$('#tab-suspects').click(function(event){
		event.stopPropagation();
		$('#clues-folder').hide();
		$('#suspects-folder').show();
	});

	/**
	 * Browser compatibility check
	 */

	window.canplay = true;

	// IE 8 and below - check for box-shadow support - doesn't support jQuery 2.0, vh/vw, audio, etc.
	var check = document.createElement('div');
	var shadow = !!(0 + check.style['boxShadow']);
	if (shadow) { } else {
		$('#cantplay').removeClass('hidden');
		window.canplay = false;
	}
	// Android 4.3 and below - doesn't support vh/vw :(
	var ua = navigator.userAgent;
	if( ua.indexOf("Android") >= 0 ) {
		var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
		if (androidversion < 4.4) {
			$('#cantplay').removeClass('hidden');
			window.canplay = false;
		}
	}
});

$(window).load(function() {
	if (window.canplay) {
		bgmusic.play();
		$("#preloader-animation").fadeOut();
		$("#preloader").delay(350).fadeOut("slow",function() {
			$("#preloader").remove();
		});
	}
});