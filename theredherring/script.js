/* Arrays of images to preload */

var initialGame = [
	"../shared_assets/ui/cursor1.png",
	"../shared_assets/ui/cursor2.png",
	"../shared_assets/ui/cursor3.png",
	"../shared_assets/ui/cursor4.png",
	"../shared_assets/ui/cursor5.png",
	"../shared_assets/ui/soundon.png",
	"../shared_assets/ui/soundoff.png",
	"../shared_assets/ui/case_toggle.png",
	"../shared_assets/ui/case_folder.png",
	"../shared_assets/ui/tab_clues.png",
	"../shared_assets/ui/tab_suspects.png",
	"../shared_assets/ui/undiscovered.png",
	"../shared_assets/ui/header_clues.png",
	"../shared_assets/ui/header_suspects.png",
	"../shared_assets/ui/dialogue_bg.jpg",
	"../shared_assets/characters/investigator.png",
	"../shared_assets/characters/bobbycat.png",
	"backgrounds/mainmenu_bg.jpg",
	"ui/mainmenu_start.png",
	"characters/trauma_llama.png",
	"backgrounds/docks.jpg"
];
var restOfGame = [
	"../shared_assets/ui/exit.png",
	"ui/clue_1.png",
	"ui/clue_2.png",
	"ui/clue_3.png",
	"ui/clue_4.png",
	"ui/clue_5.png",
	"ui/clue_6.png",
	"ui/clue_7.png",
	"ui/clue_8.png",
	"ui/clue_9.png",
	"ui/clue_10.png",
	"ui/victim.png",
	"ui/suspect_1.png",
	"ui/suspect_2.png",
	"ui/suspect_3.png",
	"ui/suspect_4.png",
	"ui/suspect_4.png",
	"../shared_assets/ui/accusemurderer_btn.png",
	"backgrounds/tavern.jpg",
	"characters/seagull.png",
	"characters/seal.png",
	"characters/lobster.png",
	"characters/bernese.png",
	"characters/real_investigator.png",
	"characters/crookadile.png",
	"backgrounds/credits_bg.jpg"
];

preload(initialGame);

$(document).ready(function() {
	/* Setup Variables */
	var clue1, clue2, clue3, clue4, clue5, clue6, clue7, clue8, clue9, clue10, suspect1, suspect2, suspect3, suspect4, act2checkpoint, askedaboutclue6, askedaboutclue7, askedaboutclue8, act3checkpoint = false;

	/* Main Menu*/
	function mainmenu() {
		$("#wrapper").prepend("<div id='mainmenu' class='background'></div>");
		$("#mainmenu").append("<div id='mainmenu-title' class='ui'></div>");
		$("#mainmenu").append("<a id='mainmenu-start' class='interactable'></a>");
		$("#mainmenu").fadeIn(500);

		/* Start Act 1 */
		$("#mainmenu-start").one("click",function() {
			$("#mainmenu").fadeOut(500,function() {
				$("#mainmenu").remove();
				act1();
				preload(restOfGame);
			});
		});
	}

	/* Act 1 */
	function act1() {
		$("#wrapper").prepend("<div id='act1' class='background'></div>");
		$("#act1").append("<div id='act1-boat' class='interactable'></div>");
		$("#act1").append("<div id='act1-bottle' class='interactable'></div>");
		$("#act1").append("<div id='act1-rope' class='interactable'></div>");
		$("#act1").append("<div id='act1-life-preserver' class='interactable'></div>");
		$("#act1").append("<div id='crates' class='interactable'></div>");
		$("#act1").append("<div id='wallet' class='interactable'></div>");
		$("#act1").append("<div id='tattoo' class='interactable'></div>");
		$("#act1").append("<div id='act1-exit' class='arrows'></div>");
		$("#act1").append("<div id='convo-characters'><div id='bobbycat' class='character'></div><div id='llama' class='character'></div><div id='investigator' class='character'></div></div>");
		$("#act1").fadeIn(700,function() {
			conversation(
				"Bobbycat", "Boy, am I glad to see you, Investigator. Who's that with you?", '',
				"Investigator", "A pleasure as always, Bobbycat. Please let me introduce my latest sidekick, the Trauma Llama.", '',
				"The Trauma Llama", "Please don't call a trained forensic pathologist a &ldquo;sidekick&rdquo;, Investigator. Also, you're paying me to be here.", '',
				"Investigator", "In any case, Bobbycat, please tell us about the victim.", 'victim',
				"Bobbycat", "It's a fishy business, gentleman. No sign of fresh injuries or a struggle, but plenty of people would've stood in line for the opportunity, if you ask me.", '',
				"Investigator", "If you don't mind, Bobbycat, I'll have my sidekick take a look at the body.", '',
				"The Trauma Llama", "Hmm... Pass me the rubber gloves, please, Investigator.", '',
				"The Trauma Llama", "And now, the long-handled scalpel.", '',
				"The Trauma Llama", "And that hypodermic needle.", '',
				"The Trauma Llama", "And that giant bottle with a skull and bones label on it, please. Oh, and some cotton swabs. And perhaps the bone saw.", '',
				"Bobbycat", "Should - should I be worried?", '',
				"Investigator", "No, no, the Trauma Llama is a professional. He's the best in his field.", '',
				"Bobbycat", "I'll take your word for it, Investigator.", '',
				"The Trauma Llama", "Alright gentlemen. I'm still processing the toxicology samples - those won't be done for a bit. But I can tell you now that time of death was less than forty-eight hours ago, and cause of death was definitely asphyxiation, or rather, drowning.", 'clue1',
				"Bobbycat", "Just like I said.", '',
				"The Trauma Llama", "Unfortunately, my medical examination doesn't quite corroborate Bobbycat's initial conclusion. He has three cracked ribs, blood under his fingernails, and internal bruising.", 'clue2',
				"Bobbycat", "Huh?! Well, we can't all be Sweeney Todd over there, cutting up people's bodies...", '',
				"Investigator", "Jealousy is unbecoming, Bobbycat. Now, please allow us to inspect the scene of crime.", ''
			);
		});
		clue1 = true;
		clue2 = true;

		/* Objects */
		$("#act1-bottle").click(function(){
			conversation(
				"Investigator", "Sadly, there's no message in it. It's just your everyday discarded beer bottle.", '',
				"The Trauma Llama", "Please don't litter, kids.", ''
			);
		});
		$("#act1-rope").click(function(){
			dialogue("Investigator", "I'm about to reach the end of my rope, here.", '');
		});
		$("#act1-boat").click(function(){
			dialogue("The Trauma Llama", "The two happiest times in a man's life are when he buys a boat, and when he sells it.", '');
		});
		$("#act1-life-preserver").click(function(){
			dialogue("Investigator", "The Sunk Skunk could probably have used this life preserver. Poor guy.", '');
		});

		$("#wallet").click(function(){
			if (clue3) {
				dialogue("Investigator", "The Trauma Llama, put that money back in his wallet.", '');
			} else {
				conversation(
					"The Trauma Llama", "Hmm? What's this? He's holding on tightly to his wallet.", '',
					"Investigator", "Not trying to steal from the dead, are you, the Trauma Llama?", '',
					"The Trauma Llama", "Well, you know, you really aren't paying me enough...", '',
					"Investigator", "Oh? Look at this, the Trauma Llama. It's an unpaid tab bill from The Red Herring.", '',
					"The Trauma Llama", "Four hundred dollars!? The Sunk Skunk must have really liked his booze.", '',
					"Investigator", "About three hundred of it is apparently for broken furniture and tableware.", 'clue3'
				);
				clue3 = true;
			}
		});
		$("#tattoo").click(function(){
			if (clue4) {
				dialogue("Investigator", "How does one tattoo fur, anyway?", '');
			} else {
				conversation(
					"Investigator", "Oh, boy. This is the tattoo of a local river gang, The King Crabs.", '',
					"The Trauma Llama", "Ah. You suspect a gang-related homicide?", '',
					"Investigator", "At the very least, we should be on the lookout any fellow members seeking revenge.", 'clue4'
				);
				clue4 = true;
			}
		});
		$("#crates").click(function(){
			if (clue5) {
				dialogue("Investigator", "Why would there be mismatched feathers in the water?", '');
			} else {
				conversation(
					"Investigator", "Bobbycat, why are these crates here?", '',
					"Bobbycat", "Huh? Oh, they washed ashore with the victim. It was almost like he was holding 'em.", '',
					"The Trauma Llama", "They're just full of sardine cans.", '',
					"Investigator", "Hmm. But what's inside the cans?...", 'clue5',
					"The Trauma Llama", "Th - this is opium!", '',
					"Investigator", "Yes, it's just as I thought. You were right, Bobbycat. This is a very fishy business, indeed.", '',
					"Bobbycat", "You see! Bobbycat is always right.", ''
				);
				clue5 = true;
			}
		});

		/* Start Act 2 */
		$("#act1-exit").click(function() {
			if (clue3 && clue4 && clue5) {
				conversation(
					"Investigator", "This is a tangled case indeed, my friends. Bobbycat, you said that the Sunk Skunk often frequented a local establishment?", '',
					"Bobbycat", "Yessir. The Red Herring, I believe it's called.", '',
					"Investigator", "I think it would be best to continue our investigation there. Coming, the Trauma Llama?", '',
					"The Trauma Llama", "Eh? Oh, yes. Give me a minute to pack up my forensics kit.", '',
					" ", "<a id='act1-exit-confirm'>A: Let's move on.</a> <a>A: I'd like to look around a bit more.</a>", ''
				);
				$("#act1-exit-confirm").one("click",function() {
					$("#act1").fadeOut(500,function() {
						$("#act1").remove();
						act2();
					});
				});
			} else {
				conversation(
					"The Trauma Llama", "I think there's still a few more clues to find here, Investigator.", '',
					"Investigator", "You may very well be right.", ''
				);
			}
		});
	}

	/* Act 2 */
	function act2() {
		$("#wrapper").prepend("<div id='act2' class='background'></div>");
		$("#act2").append("<div id='talkto-bernese' class='character'></div>");
		$("#act2").append("<div id='talkto-seagull' class='character'></div>");
		$("#act2").append("<div id='talkto-seal' class='character'></div>");
		$("#act2").append("<div id='talkto-lobster' class='character'></div>");
		$("#act2").append("<div id='convo-characters'><div id='bobbycat' class='character'></div><div id='llama' class='character'></div><div id='investigator' class='character'></div></div>");
		$("#act2").fadeIn(700,function() {
			conversation(
				"The Trauma Llama", "What a colorful locale. Very hole in the wall. I'll be sure to leave a Yelp review.", '',
				"Bobbycat", "I'm not sure any of these denizens have done an honest day's work in their lives.", ''
			);
		});
		$("#talkto-seagull").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='seagull' class='character'></div>");
			$("#convo-characters").fadeIn();
			dialogue("The Illegal Seagull", "It's the fuzz! Wh-wh-what do you want!? SQUAWK!", '');
			interrogation(
				"q1-1", "Do you know someone by the name of the Sunk Skunk?",
				"q1-2", "Why is your name the Illegal Seagull?",
				"q1-3", "How often do you come to Red Herring?",
				"end-interrogation", "Take care."
			);
			if (suspect1) {
				$("#q1-1,#q1-2,#q1-3").addClass('questioned');
			}
			$("#q1-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Illegal Seagull", "The S-Sunk Skunk!? H-have you heard from that good-for-nothing!? I sent him to deliver a load of my cargo a coupla days ago and haven't s-seen hide or hair of that th-thief since then!", '',
						"Investigator", "So... you were the Sunk Skunk's boss?", '',
						"The Illegal Seagull", "S-sure! And I'm telling you, I would <em>not</em> give that scoundrel a l-letter of recommendation!", '',
						"The Trauma Llama", "Ouch! That's a deathblow in the job market these days.", 'suspect1'
					);
					suspect1 = true;
				});
			});
			$("#q1-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Illegal Seagull", "Uh, it's just, you know. O-one of those silly childhood nicknames. Ha ha!", '',
						"The Trauma Llama", "Um... I don't know if I believe you.", '',
						"Investigator", "I'm not sure you have much room to talk, the Trauma Llama.", '',
						"The Trauma Llama", "What?! What are you saying about my name?", '',
						"Investigator", "It's... a little odd, that's all.", ''
					);
				});
			});
			$("#q1-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Illegal Seagull", "Huh!? What is this, the fifth degree? I actually can't s-stand this place. I'm only here 'cause that useless lump, the Sunk Skunk, hangs around here all the time. I thought I'd catch him here eventually.", '',
						"Investigator", "Thank you, sir. You've been very helpful.", '',
						"The Illegal Seagull", "Yeah, well, d-don't let it get around! That would ruin my street cred!", ''
					);
				});
			});
		});
		$("#talkto-seal").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='seal' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"Squeal the Seal", "No! I give up! I confess! I'll admit everything!", ''
			);
			interrogation(
				"q2-1", "What exactly are you confessing to?...",
				"q2-2", "Do you know the Sunk Skunk?",
				"q2-3", "What can you tell us about that lobster sitting in the corner?",
				"end-interrogation", "Take it easy, Mr. Squeal."
			);
			if (suspect2) {
				$("#q2-1,#q2-2").addClass('questioned');
			}
			if (suspect3) {
				$("#q2-3").addClass('questioned');
			}
			$("#q2-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"Squeal the Seal", "Everything! I did it! Or if I didn't, I know who did! Take me away! I demand a witness protection program!", '',
						"Investigator", "That's not how it works, Mr. Squeal.", '',
						"Squeal the Seal", "W-why not!?", '',
						"Investigator", "You have to be able to tell me what you're confessing to.", ''
					);
				});
			});
			$("#q2-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"Squeal the Seal", "Yeah! Of course! I know everybody who's anybody, me!", '',
						"Investigator", "How would you describe the Sunk Skunk?", '',
						"Squeal the Seal", "Oh, man! That guy was crazy! Always walking around with a skateboard and studded jewelry, talking about how he hated The Man!", '',
						"The Trauma Llama", "Umm... I think you may be confusing him for the Punk Skunk.", '',
						"Squeal the Seal", "Oh! Oh, no, you're right! I know who you're talking about. The guy who played a mean saxophone and had an afro, right?", '',
						"Investigator", "No... that would be the Funk Skunk.", '',
						"The Trauma Llama", "Investigator, we're wasting our time. He clearly has no idea who we're talking about.", 'suspect2'
					);
					suspect2 = true;
				});
			});
			$("#q2-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"Squeal the Seal", "The Mobster Lobster? Oh man, oh man! I'll get in trouble if I tell you!", '',
						"Investigator", "Please, Mr. Squeal.", '',
						"Squeal the Seal", "Look, all I'm sayin' is, you do not want to mess with that guy, alright? They say he's the son of Don Crayleon, head of the Crayfish Crew!", '',
						"Investigator", "The rival gang of the King Crabs?", '',
						"Squeal the Seal", "Yeah! The last person who pissed him off, I heard they only found bits of him floating down the river!", '',
						"The Trauma Llama", "Yikes.", 'suspect3'
					);
					suspect3 = true;
				});
			});
		});
		$("#talkto-lobster").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='lobster' class='character'></div>");
			$("#convo-characters").fadeIn();
			dialogue("The Mobster Lobster", "...", '');
			interrogation(
				"q3-1", "Do you know someone called the Sunk Skunk?",
				"q3-2", "What game are you playing there?",
				"q3-3", "...",
				"end-interrogation", "Goodbye."
			);
			$("#q3-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Mobster Lobster", "...", '',
						"Investigator", "...", '',
						"The Mobster Lobster", "...", '',
						"Investigator", "Um... sir?", '',
						"The Mobster Lobster", "No.", ''
					);
				});
			});
			$("#q3-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Mobster Lobster", "...", '',
						"Investigator", "...", '',
						"The Mobster Lobster", "What are you, the paparazzi?", ''
					);
				});
			});
			$("#q3-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Mobster Lobster", "...", ''
					);
				});
			});
		});
		$("#talkto-bernese").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='bernese' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"The Overseas Bernese", "Welcome to The Red Herring, gentlemen. How can I help you today?", ''
			);
			interrogation(
				"q4-1", "Are you the owner of this establishment?",
				"q4-2", "Do you know the Sunk Skunk?",
				"q4-3", "What do you know about that lobster over there?",
				"end-interrogation", "Have a nice day."
			);
			if (suspect4) {
				$("#q4-1,#q4-2,#q4-3").addClass('questioned');
			}
			$("#q4-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Overseas Bernese", "Aye, for my sins.", '',
						"The Trauma Llama", "It's not usual to find a Bernese this far from the mountains, is it?", '',
						"The Overseas Bernese", "Ha! You know your breeds, I'll give you that.", '',
						"Investigator", "Why the change of scenery?", '',
						"The Overseas Bernese", "Well, you know, I've always had a bit of a wandering eye and itchy paws. I wanted to travel, so I left my hometown when I was a young pup, and the rest was history.", ''
					);
				});
			});
			$("#q4-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Overseas Bernese", "Ugh, that old reprobate. The devil himself couldn't ask for a worse customer. A bar tab longer than my tail, and always starting fights and breaking furniture!", '',
						"Investigator", "Why didn't you ban him, then?", '',
						"The Overseas Bernese", "Well... business ain't been so good, lately. I knew he worked for some shady customers, so I figured he had to be getting money from somewhere. I was countin' on him coughing up and then selling The Red Herring for a ticket outta this dump.", 'suspect4'
					);
					suspect4 = true;
				});
			});
			$("#q4-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Overseas Bernese", "Him? He's the ideal customer. Comes in, pays for his drinks, sits quietly, leaves. Like clockwork, every Thursday. Never starts any trouble, not like the Sunk Skunk.", '',
						"Investigator", "<em>Never</em> starts any trouble?", '',
						"The Overseas Bernese", "Well... the Sunk Skunk did throw up on his shoes a few days ago. He seemed pretty upset about that. Still didn't raise his voice or nothin', just glared daggers all night.", '',
						"Investigator", "Hmm. Thank you very much for your help.", ''
					);
				});
			});
		});

		/* Start Act 2.5 */
		$(document).on("click", "#end-interrogation", function(){
			// Set a 500ms timeout on the act transitions to allow the previous dialogue/characters to fade out smoothly
			if (!act2checkpoint && suspect1 && suspect2 && suspect3 && suspect4) {
				setTimeout(act2point5, 500)
			}
		});
	}
	/* Act 2.5 (New interrogation trees, allow user to find new clues) */
	function act2point5() {
		act2checkpoint = true;
		$("#talkto-seagull,#talkto-seal,#talkto-lobster,#talkto-bernese").unbind("click");
		$("#act2").append("<div id='act2-bottles' class='interactable'></div>");
		$("#act2").append("<div id='act2-fish' class='interactable'></div>");
		$("#act2").append("<div id='act2-door' class='interactable'></div>");
		$("#act2").append("<div id='act2-calendar' class='interactable'></div>");
		$("#act2").append("<div id='sardines' class='interactable'></div>");
		$("#act2").append("<div id='brawl-photo' class='interactable'></div>");
		$("#act2").append("<div id='hit-order' class='interactable'></div>");
		$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div>");
		$("#convo-characters").fadeIn(800);
		conversation(
			"The Trauma Llama", "It feels like we're raising more questions than we are answering them.", '',
			"Investigator", " All in good time, the Trauma Llama. Patience is a key component of investigative work. Let's see if there's any clues about The Red Herring that might aid us.", ''
		);
		$("#sardines").click(function(){
			if (clue6) {
				dialogue("The Trauma Llama", "Did we just steal his lunch?", '');
			} else {
				conversation(
					"Investigator", "Another of those sardine cans. The packaging is the same as the ones we found next to the Sunk Skunk.", '',
					"The Trauma Llama", "Opium, again?", '',
					"Investigator", "How odd... these are actually just regular sardines.", 'clue6'
				);
				clue6 = true;
			}
		});
		$("#brawl-photo").click(function(){
			if (clue7) {
				dialogue("Investigator", "Instead of a Wall of Fame, they have a Wall of Best Brawls, apparently.", '');
			} else {
				conversation(
					"The Trauma Llama", "How quaint. It's a snapshot of a tavern brawl.", '',
					"Investigator", "I'm really starting to question what kind of ambiance this place is going for.", '',
					"The Trauma Llama", "Wait a second - look, you can see Squeal the Seal and Sunk Skunk fighting in this!", 'clue7',
					"Investigator", "So they do know each other...", ''
				);
				clue7 = true;
			}
		});
		$("#hit-order").click(function(){
			if (clue8) {
				dialogue("The Trauma Llama", "That lobster gives me the chills.", '');
			} else {
				conversation(
					"Investigator", "Fragments of a ripped up letter. As far as I can make out, it says, &ldquo;... want him gone ... bottom of the river ... tomorrow night.&rdquo;", '',
					"The Trauma Llama", "Investigator, I think this is a hit order.", '',
					"Investigator", "Hmm. But was it a hit on our victim?", 'clue8'
				);
				clue8 = true;
			}
		});
		$("#act2-bottles").click(function(){
			dialogue("Investigator", "They appear to be varying shapes and sizes of the exact same type of rum.", '');
		});
		$("#act2-door").click(function(){
			dialogue("Investigator", "The glass is too dirty to see into the kitchen. Probably for the best.", '');
		});
		$("#act2-calendar").click(function(){
			dialogue("The Trauma Llama", "It's one of those flippable calendars. The sign says, &ldquo;01 DAYS SINCE LAST BRAWL&rdquo;.", '');
		});
		$("#act2-fish").click(function(){
			conversation(
				"The Trauma Llama", "Yuck. Give me a nice fresh salad over fish any day.", '',
				"Investigator", "For the sake of our professional relationship, let's never eat lunch together.", ''
			);
		});

		// New conversation trees
		$("#talkto-seagull").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='llama' class='character'></div><div id='seagull' class='character'></div>");
			$("#convo-characters").fadeIn();
			$("#interrogation").fadeIn();
			if (clue6) {
				interrogation(
					"q1-1", "How long have you known the Sunk Skunk?",
					"q1-2", "Tell me about your shipping business.",
					"q1-3", "Are these your sardines?",
					"end-interrogation", "I'll be seeing you."
				);
			} else {
				interrogation(
					"q1-1", "How long have you known the Sunk Skunk?",
					"q1-2", "Tell me about your shipping business.",
					"end-interrogation", "I'll be seeing you."
				);
			}
			if (askedaboutclue6) {
				$("#q1-1,#q1-2,#q1-3").addClass('questioned');
			}
			$("#q1-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Illegal Seagull", "Huh? I d-dunno, a few months at most. I was just looking for an extra hand with my, um, shipping business. That's the last time I look f-for hired help on Croakslist!", '',
						"Investigator", "Yes, I've heard that sentiment before... in a recent murder case involving a toilet tank lid.", ''
					);
				});
			});
			$("#q1-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Illegal Seagull", "I-It's entirely l-legal and above-board!", '',
						"Investigator", "Go on.", '',
						"The Illegal Seagull", "I w-would never involve myself in any kind of unauthorized smuggling!", '',
						"Investigator", "Okay...", '',
						"The Illegal Seagull", "I am an entirely upright and h-honest c-citizen!", '',
						"The Trauma Llama", "The lady doth protest too much, methinks.", ''
					);
				});
			});
			$("#q1-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Illegal Seagull", "Wha - you can't just take people's stuff! Give them back here!", '',
						"Investigator", "Err, I'm afraid I'll have to hold on to them as evidence.", '',
						"The Illegal Seagull", "B-but... I was going to eat them for lunch...", ''
					);
				});
				askedaboutclue6 = true;
			});
		});
		$("#talkto-seal").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='seal' class='character'></div>");
			$("#convo-characters").fadeIn();
			$("#interrogation").fadeIn();
			if (clue7) {
				interrogation(
					"q2-1", "What's the juice on the Illegal Seagull?",
					"q2-2", "Any gossip about the Overseas Bernese?",
					"q2-3", "What's with this photo of you and the Sunk Skunk fighting together?",
					"end-interrogation", "Farewell, for now."
				);
			} else {
				interrogation(
					"q2-1", "What's the juice on the Illegal Seagull?",
					"q2-2", "Any gossip about the Overseas Bernese?",
					"end-interrogation", "Farewell, for now."
				);
			}
			if (askedaboutclue7) {
				$("#q2-1,#q2-2").addClass('questioned');
			}
			$("#q2-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"Squeal the Seal", "That guy totally smuggles drugs, man.", '',
						"The Trauma Llama", "So we'd gathered...", '',
						"Squeal the Seal", "Yeah, he pays real good, though, so it's worth the extra hassle.", '',
						"Investigator", "Did you just admit to being an accomplice to a federal crime?", '',
						"Squeal the Seal", "Uh, uh, is it still too late for that witness protection deal?", ''
					);
				});
			});
			$("#q2-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"Squeal the Seal", "He's a weird guy. He seems real easygoing, maybe even too nice for his own good, but...", '',
						"Inspector", "But?", '',
						"Squeal the Seal", "Well, let's just say the one time someone tried to hold up The Red Herring, they had to carry him out on a stretcher. Never seen a man break someone's legs so easily.", ''
					);
				});
			});
			$("#q2-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"Squeal the Seal", "Huh? <em>That's</em> the Sunk Skunk?", '',
						"Inspector", "Um, yes.", '',
						"Squeal the Seal", "Oh, man. That's awkward. I thought he was a really smelly badger the whole time.", '',
						"The Trauma Llama", "...", '',
						"Squeal the Seal", "Look, I was really sloshed, alright?", ''
					);
				});
				askedaboutclue7 = true;
			});
		});
		$("#talkto-lobster").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='lobster' class='character'></div>");
			$("#convo-characters").fadeIn();
			$("#interrogation").fadeIn();
			if (clue8) {
				interrogation(
					"q3-1", "Nice weather we're having.",
					"q3-2", "How about those King Crabs?",
					"q3-3", "Is this your handwriting?",
					"end-interrogation", "Goodbye."
				);
			} else {
				interrogation(
					"q3-1", "Nice weather we're having.",
					"q3-2", "How about those King Crabs?",
					"end-interrogation", "Goodbye."
				);
			}
			if (askedaboutclue8) {
				$("#q3-1,#q3-2,#q3-3").addClass('questioned');
			}
			$("#q3-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Mobster Lobster", "...", '',
						"Inspector", "...", '',
						"The Mobster Lobster", "...", '',
						"Inspector", "Alright, I can take a hint.", ''
					);
				});
			});
			$("#q3-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Mobster Lobster", "Listen, boy. If you know what's good for your health, you're going to stop talking right now.", ''
					);
				});
			});
			$("#q3-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Mobster Lobster", "Kid. Don't make me get my lawyer.", '',
						"Investigator", "I... uh...", '',
						"The Mobster Lobster", "What? You got something more to say?", '',
						"Investigator", "No, I guess not.", ''
					);
				});
				askedaboutclue8 = true;
			});
		});
		$("#talkto-bernese").click(function(){
			$("#convo-characters").append("<div id='llama' class='character'></div><div id='investigator' class='character'></div><div id='bernese' class='character'></div>");
			$("#convo-characters").fadeIn();
			$("#interrogation").fadeIn();
			if (!clue9) {
				interrogation(
					"q4-1", "When did you last see the Sunk Skunk?",
					"q4-2", "What happens to the Sunk Skunk's tab if he, er, skips town?",
					"q4-3", "I'm a bit thirsty. Any chance you can spare a drink of salt water?",
					"end-interrogation", "See you around."
				);
			} else {
				interrogation(
					"q4-1", "When did you last see the Sunk Skunk?",
					"q4-2", "What happens to the Sunk Skunk's tab if he, er, skips town?",
					"end-interrogation", "See you around."
				);
			}
			if (clue9) {
				$("#q4-1,#q4-2").addClass('questioned');
			}
			$("#q4-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Overseas Bernese", "Let me see... it must've been two nights ago. He came in already three sheets to the wind, ordered some more, got into a massive brawl with Squeal the Seal over there, and limped off with his tail tucked between his legs.", '',
						"The Trauma Llama", "I'm not sure this place knows the meaning of the words 'cut-off'.", ''
					);
				});
			});
			$("#q4-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Overseas Bernese", "I break the legs of the man who comes in and tells me that news, that's what happens.", '',
						"Investigator", "O-oh.", '',
						"The Trauma Llama", "Talk about shooting the messenger.", ''
					);
				});
			});
			$("#q4-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Overseas Bernese", "Sure thing. On the house.", 'clue9',
						"The Trauma Llama", "I didn't know you liked salt water, Investigator.", '',
						"Investigator", "Er, yes, it's part of this new detox diet I'm trying out.", ''
					);
				});
				clue9 = true;
			});
		});

		/* Start Act 3 */
		$(document).on("click", "#end-interrogation", function(){
			// Set a 500ms timeout on the act transitions to allow the previous dialogue/characters to fade out smoothly
			if (!act3checkpoint && askedaboutclue6 && askedaboutclue7 && askedaboutclue8 && clue9) {
				setTimeout(act3transition, 500)
			}
		});
	}

	/* Act 3 Transition */
	function act3transition() {
		act3checkpoint = true;
		$("#convo-characters").append("<div id='bobbycat' class='character'></div><div id='llama' class='character'></div><div id='investigator' class='character'></div>");
		$("#convo-characters").fadeIn(800);
		conversation(
			"The Trauma Llama", "Oh, hold on, Investigator. It looks like my toxicology samples have finished analyzing.", '',
			"Bobbycat", "Let me guess. He died from ricin poisoning?", '',
			"The Trauma Llama", "Don't be ridiculous, Bobbycat. No, his results aren't showing any trace of foul play. Well, other than his blood alcohol content being high enough to poison a small country.", '',
			"Investigator", "So he was drunk as a skunk, eh?", '',
			"The Trauma Llama", "Yes, I suppose you could say that.", 'clue10',
			"Investigator", "Well, it's been a murky business, gentlemen, but I think I have all the information I need to draw a conclusion.", '',
			"The Trauma Llama", "Really? Because I haven't the foggiest idea what's going on.", '',
			"Investigator", "But for my dramatic accusation, I need to borrow your forensic kit, the Trauma Llama. You see, there's an eleventh and important clue in there that I must flourish at the important moment.", '',
			"The Trauma Llama", "Well, alright, if you say so.", '',
			"Are you ready to accuse the murderer?", "<a id='act2-exit-confirm'>A: Yes, I'm ready!</a> <a>A: Perhaps I should take one more look around the place.</a>", ''
		);
		$("#act2").prepend("<div id='accuse-murderer' class='character'></div>");
		$("#act2-exit-confirm, #accuse-murderer").one("click",function() {
			$("#bgmusic").animate({volume: 0}, 800);
			$("#act2").fadeOut(500, function(){
				$("#act2").remove();
				act3();
			});
		});
	}

	/* Act 3 Transition */
	function act3() {
		$("#bgmusic").attr("src", "../shared_assets/music/act3.mp3");
		if (window.sound == true) { $("#bgmusic").animate({volume: 0.5}, 1000); }
		$("#wrapper").prepend("<div id='dramatic-backdrop'></div>");
		$("#wrapper").prepend("<div id='act3' class='background'></div>");
		$("#act3").append("<div id='talkto-seagull' class='ui'></div>");
		$("#act3").append("<div id='talkto-seal' class='ui'></div>");
		$("#act3").append("<div id='talkto-lobster' class='ui'></div>");
		$("#act3").append("<div id='talkto-bernese' class='ui'></div>");
		$("#act3").fadeIn(1000);

		dramaticDialogue("end1", "Investigator", "I've darkened the room for a very important reason. This is the part where I overdramatically point my finger at the killer!", ["investigator"]);
		dramaticDialogue("end2", "Investigator", "As always, I like to give my sidekicks a chance to show me up. The Trauma Llama, do you want to take a crack at it first?", ["investigator"]);

		$(document).on("click", "#end2", function(){
			$("#dialogue, #dramatic-backdrop").fadeOut(function() {
				$("#accuse-murderer").fadeIn();
			});
		});

		$("#talkto-seagull,#talkto-seal,#talkto-lobster,#talkto-bernese").click(function(){
			$(this).toggleClass("selected");
		});
		$("#act3").append("<div id='accuse-murderer' class='ui'></div>");
		$("#accuse-murderer").click(function(){
			$("#dialogue, #dramatic-backdrop").fadeIn();

			if ($("#talkto-seagull").hasClass("selected") || $("#talkto-seal").hasClass("selected") || $("#talkto-lobster").hasClass("selected") || $("#talkto-bernese").hasClass("selected")) {
				dramaticDialogue("endwrong", "Investigator", "Haha. An interesting thought, but unfortunately incorrect. No, I'm afraid I fooled you! There was no murderer; the Sunk Skunk's death was a tragic &mdash;", ["investigator"]);
			} else {
				dramaticDialogue("endright", "Investigator", "Ha! Yes! Quite correct. There was no murderer - the whole affair was a tragic &mdash;", ["investigator"]);
			}
		});

		$(document).on("click", "#endright, #endwrong", function(){
			$("#accuse-murderer").hide();
			$("#talkto-seagull,#talkto-seal,#talkto-lobster,#talkto-bernese").removeClass("selected").unbind("click");
			restOfAct3();
		});
	}
	function restOfAct3() {
		dramaticDialogue("end3", "???", "HOLD IT RIGHT THERE!", []);
		dramaticDialogue("end4", "The Trauma Llama", "Who!?", ["llama"]);
		dramaticDialogue("end5", "Bobbycat", "What?!", ["bobbycat"]);
		dramaticDialogue("end6", "The Real Investigator", "That Investigator is an imposter!", ["realinvestigator"]);
		dramaticDialogue("end7", "Bobbycat", "Two Investigators!? What on earth is going on!? It's like I'm up to my eyeballs in alligators!", ["bobbycat"]);
		dramaticDialogue("end8", "The Real Investigator", "No, Bobbycat. There's only one alligator in this room. That man standing there is none other than the nefarious mastermind known as the Crookadile!", ["realinvestigator"]);
		dramaticDialogue("end9", "Bobbycat", "But... but he knew all the inside jokes from the last Investigator game!", ["bobbycat"]);
		dramaticDialogue("end10", "Investigator", "The Crookadile is a criminal genius, Bobbycat. Studying up on my latest cases and impersonating my every mannerism was child's play to him.", ["realinvestigator"]);
		dramaticDialogue("end11", "Crookadile", "...I suppose I should be flattered. Heh, heh.", ["crookadile"]);
		dramaticDialogue("end12", "Crookadile", "Quite frankly, I too am impressed, Investigator. You escaped from my captivity much quicker than I would have given you credit for.", ["crookadile"]);
		dramaticDialogue("end13", "Investigator", "You were a worthy foe, Crookadile, but your scheming plans end here.", ["realinvestigator"]);
		dramaticDialogue("end14", "Crookadile", "Oh no, I think not. After all, I succeeded in obtaining what I came here for: the Trauma Llama's forensic kit, containing several <em>very</em> powerful sedatives and lethal poisons, available only to the most practiced of medical examiners.", ["crookadile"]);
		dramaticDialogue("end15", "The Trauma Llama", "W-what!? NO! GIVE ME BACK MY KIT! I WENT TO EIGHT YEARS OF MED SCHOOL FOR THAT!", ["llama"]);
		dramaticDialogue("end16", "Investigator", "No! Don't! The Crookadile is &mdash;", ["realinvestigator"]);
		dramaticDialogue("end17", "The Trauma Llama", "A-augh!...", ["llama"]);
		dramaticDialogue("end18", "Investigator", "&mdash; also... an expert... combatant.", ["realinvestigator"]);
		dramaticDialogue("end19", "The Trauma Llama", "Cut down... by my own... bone saw...", ["llama"]);
		dramaticDialogue("end20", "Investigator", "Bobbycat! Get an ambulance!", ["realinvestigator"]);
		dramaticDialogue("end21", "Bobbycat", "But the Crookadile is getting away!", ["bobbycat"]);
		dramaticDialogue("end22", "Investigator", "The Trauma Llama is more important right now, Bobbycat!", ["realinvestigator"]);
		dramaticDialogue("end23", "Crookadile", "Heh heh. That's right. Tend to your fallen friend like a good little alligator.", ["crookadile"]);
		dramaticDialogue("end24", "Investigator", "I'll catch you in the end, you coward.", ["realinvestigator"]);
		dramaticDialogue("end25", "Crookadile", "Ha! Very well. I look forward to that day. Until then...", ["crookadile"]);
		dramaticDialogue("end26", "Crookadile", "I'll see you later, Investigator.", ["crookadile"]);
		dramaticDialogue("theend", "Investigator", "After a while... Crookadile.", ["realinvestigator"]);

		$(document).on("click", "#theend", function(){
			$("#bgmusic").animate({volume: 0}, 3000);
			$("#act3").fadeOut(3000, function(){
				$("#act3").remove();
				credits();
			});
		});
	}

	/* Roll Credits */
	function credits() {
		$("#bgmusic").attr("src", "../shared_assets/music/act1.mp3");
		if (sound == true) { $("#bgmusic").animate({volume: 0.5}, 200); }
		$("#wrapper").prepend("<div id='credits' class='background'></div>");
		$("#credits").append("<div id='credits-title' class='ui'></div>");
		$("#credits").append("<div id='credits-tombstone' class='ui'></div>");
		$("#credits").append("<div id='audio-credits' class='ui'><img src='../shared_assets/ui/credits_audio.png' alt='Audio Credits'> <br><br> <a href='http://opengameart.org/content/a-la-poursuite-dune-ombre-du-pass%C3%A9' target='_blank'>Dogers &mdash; A la poursuite d'une ombre du passé</a> <br><br> <a href='http://opengameart.org/content/the-plot-thickens' target='_blank'>el-corleo &mdash; The Plot Thickens</a></div>");
		$("#credits").append("<div id='special-thanks' class='ui'><img src='../shared_assets/ui/credits_thanks.png' alt='Special Thanks'> <br><br> <a href='http://markaaronbarrett.wix.com/artdesign#!art/c199t' target='_blank'>Mark Barett &mdash; Character Art</a></div>");
		$("#credits").fadeIn(1000);
	}

	/* Start the game */
	if (window.canplay) {
		mainmenu();
	}
});