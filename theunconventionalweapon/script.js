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
	"characters/vanilla_chinchilla.png",
	"backgrounds/act1_bg.jpg"
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
	"backgrounds/act2_bg.jpg",
	"characters/chicken.png",
	"characters/coyote.png",
	"characters/porcupine.png",
	"characters/yak.png",
	"backgrounds/credits_bg.jpg"
];

preload(initialGame);

$(document).ready(function() {
	/* Setup Variables */
	var clue1, clue2, clue3, clue4, clue5, clue6, clue7, clue8, clue9, clue10, suspect1, suspect2, suspect3, suspect4, act2checkpoint, askedaboutclue5, askedaboutclue6, askedaboutclue7, act3checkpoint = false;

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
		$("#act1").append("<div id='act1-sink' class='interactable'></div>");
		$("#act1").append("<div id='act1-toilet' class='interactable'></div>");
		$("#act1").append("<div id='lid' class='interactable'></div>");
		$("#act1").append("<div id='bruises' class='interactable'></div>");
		$("#act1").append("<div id='quills' class='interactable'></div>");
		$("#act1").append("<div id='feathers' class='interactable'></div>");
		$("#act1").append("<div id='act1-exit' class='arrows'></div>");
		$("#act1").append("<div id='convo-characters'><div id='bobbycat' class='character'></div><div id='investigator' class='character'></div><div id='chinchilla' class='character'></div></div>");
		$("#act1").fadeIn(700,function() {
			conversation(
				"Bobbycat", "I'm sure glad you're here, Investigator, but I don't know if we needed you tonight. Seems like a pretty open and shut case to me. Here, I'll put the details in your case file, see if you agree.", 'victim',
				"Investigator", "Hmm. Open and shut cases are often the most deceptive of all, Bobbycat.", '',
				"Bobbycat", "By the way, who's that with you?", '',
				"Investigator", "Ah, allow me to introduce my latest sidekick. His name is... The Vanilla Chinchilla.", '',
				"The Vanilla Chinchilla", "I'm not your sidekick, Investigator. You know I'm only shadowing you for internship credits.", '',
				"Investigator", "Please allow my sidekick and I to inspect the crime scene, Bobbycat.", '',
				"Bobbycat", "Right you are, sir.", ''
			);
		});

		/* Objects */
		$("#act1-sink").click(function(){
			dialogue("Investigator", "I've got a sinking feeling about this sink.", '');
		});
		$("#act1-toilet").click(function(){
			conversation(
				"The Vanilla Chinchilla", "Ew! I'm not looking in there for clues.", '',
				"Investigator", "A successful detective never shies away from the search for evidence. In this case, however, anything pertinent has long since gone down the drain.", ''
			);
		});
		$("#lid").click(function(){
			if (clue1) {
				dialogue("Investigator", "A toilet tank lid? Well, I'll certainly give them credit for an unconventional weapon. Those things weigh a ton.", '');
			} else {
				conversation(
					"Investigator", "A toilet tank lid? Well, I'll certainly give them credit for an unconventional weapon. Those things weigh a ton.", 'clue1',
					"Bobbycat", "We'll send the body off for a forensic autopsy once you're done examining, but it looks to me like the cause of death was repeated blunt trauma to multiple areas on the head.", '',
					"Bobbycat", "The weapon of choice indicates a crime of passion, rather than a premeditated murder. Just one hit would've been enough, meaning whoever did this had a real vendetta. Crimes like these, it's always one person...", '',
					"The Vanilla Chinchilla", "The husband or wife.", '',
					"Bobbycat", "See, even your intern knows, Investigator. In this case, of course, it's a girlfriend.", '',
					"Investigator", "Hmmm. All the same, Bobbycat, I think I'll keep an open mind.", ''
				);
				clue1 = true;
			}
		});
		$("#bruises").click(function(){
			if (clue2) {
				dialogue("Investigator", "Strangled <i>and</i> beaten to death? Not a nice way to go.", '');
			} else {
				conversation(
					"Investigator", "Looks like you missed something, Bobbycat. Take a look at these bruises around the victim's neck.", 'clue2',
					"Bobbycat", "Wha!? Well, that doesn't prove me wrong. McGuffin could have been strangled afterwards. Either way, this is one stone cold killer we're dealing with here.", ''
				);
				clue2 = true;
			}
		});
		$("#feathers").click(function(){
			if (clue3) {
				dialogue("Investigator", "Why would there be mismatched feathers in the water?", '');
			} else {
				conversation(
					"Investigator", "Bobbycat, take a look at this.", '',
					"Bobbycat", "Feathers? So what? He's a puffin. Puffins have feathers.", '',
					"Investigator", "I know your night vision is better than your color vision, but puffins are black and white, and these are brown feathers.", '',
					"Bobbycat", "Argh!", 'clue3'
				);
				clue3 = true;
			}
		});
		$("#quills").click(function(){
			if (clue4) {
				dialogue("Investigator", "Bits of quills are floating in the toilet tank. Could just be messy grooming.", '');
			} else {
				conversation(
					"The Vanilla Chinchilla", "Hmm? This is odd.", '',
					"Investigator", "Bits of quills floating in the toilet tank. Well, better collect it just in case.", 'clue4'
				);
				clue4 = true;
			}
		});

		/* Start Act 2 */
		$("#act1-exit").click(function() {
			if (clue1 && clue2 && clue3 && clue4) {
				conversation(
					"Bobbycat", "All done? I've gathered the suspects down in the living room for questioning.", '',
					" ", "<a id='act1-exit-confirm'>A: Yes, I'm all done.</a> <a>A: I'd like to look around a bit more.</a>", ''
				);
				$("#act1-exit-confirm").one("click",function() {
					$("#act1").fadeOut(500,function() {
						$("#act1").remove();
						act2();
					});
				});
			} else {
				conversation(
					"The Vanilla Chinchilla", "You sure you're done? Maybe we should sniff around a bit harder for clues.", '',
					"Investigator", "Please, no comments on my sense of smell.", ''
				);
			}
		});
	}

	/* Act 2 - introduces interrogations */
	function act2() {
		$("#wrapper").prepend("<div id='act2' class='background'></div>");
		$("#act2").append("<div id='talkto-chicken' class='character'></div>");
		$("#act2").append("<div id='talkto-coyote' class='character'></div>");
		$("#act2").append("<div id='talkto-porcupine' class='character'></div>");
		$("#act2").append("<div id='talkto-yak' class='character'></div>");
		$("#act2").append("<div id='convo-characters'><div id='bobbycat' class='character'></div><div id='chinchilla' class='character'></div></div>");
		$("#act2").fadeIn(700,function() {
			conversation(
				"Bobbycat", "Neighbors confirm that no one's been in and out of the house since 6pm the previous night - so the murderer has to be one of his roommates, or his live-in girlfriend.", '',
				"The Vanilla Chinchilla", "Well, you know what they say about keeping your friends close and your enemies closer...", ''
			);
		});
		$("#talkto-chicken").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='chicken' class='character'></div>");
			$("#convo-characters").fadeIn();
			dialogue("The Stricken Chicken", "This is just terrible. A horrible tragedy.", '');
			interrogation(
				"q1-1", "You were close with the victim?",
				"q1-2", "Can you tell me why anyone might have wanted to kill McGuffin?",
				"q1-3", "Could you tell me where you were all day, and if you heard any noise coming from the bathroom at any point?",
				"end-interrogation", "That's all for now, thanks."
			);
			if (suspect1) {
				$("#q1-1,#q1-2,#q1-3").addClass('questioned');
			}
			$("#q1-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "Yeah, I've known McGuffin the Puffin since I was sixteen. We took Precalc in high school together, man.", '',
						"Investigator", "I'm sorry to hear that.", ''
					);
				});
			});
			$("#q1-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "Yeah, I can tell you why. I think it was that good-for-nothing girlfriend of his, to be honest. I mean, she isn't even employed. Just a total bum.", '',
						"The Vanilla Chinchilla", "Uh, that's not a reason for her to be a killer.", '',
						"The Stricken Chicken", "Yeah, I guess you're right. I dunno, maybe grief is clouding my judgment and all. I just think she's a real shady character. I know I've heard the two of them fighting lately.", ''
					);
				});
			});
			$("#q1-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "Yeah, of course, man. I have a final next week, so I was in my room studying until I went straight to bed at 8pm. I didn't hear a thing all day.", '',
						"Investigator", "Thank you for your help.", 'suspect1'
					);
					suspect1 = true;
				});
			});
		});
		$("#talkto-coyote").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='coyote' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"The Throaty Coyote", "Ahh!! It wasn't me, it wasn't me!", '',
				"Investigator", "Please calm down, miss.", '',
				"The Throaty Coyote", "I'm s-sorry. I just, I know everyone's blaming me, but I swear! I didn't do it! I was the one who called the police! Why would I do that if I were the killer?!", '',
				"The Vanilla Chinchilla", "(Hmm, that's a good question...)", ''
			);
			interrogation(
				"q2-1", "Miss, can you describe your movements this afternoon and evening?",
				"end-interrogation", "Hope you feel better soon."
			);
			if (suspect2) {
				$("#q2-1").addClass('questioned');
			}
			$("#q2-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Throaty Coyote", "Well, McGuffin was feeling poorly, so we stayed in bed watching Netflix together all afternoon. At around seven, he said he was going to go have a bath. When he wasn't back in bed by nine, I went to go check on him.", '',
						"The Throaty Coyote", "Th-that's when I found him dead in the bathtub. I screamed and called the police immediately!", '',
						"Investigator", "Thank you, miss. You've been very helpful.", 'suspect2'
					);
					suspect2 = true;
				});
			});
		});
		$("#talkto-porcupine").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='porcupine' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"The Borderline Porcupine", "Alright, listen up, you chumps. I'll tell you this just once, since it's obvious you couldn't pour water out of a boot if the instructions were written on the heel.", '',
				"Investigator", "...", '',
				"The Borderline Porcupine", "It was that minx, Throaty.", '',
				"The Vanilla Chinchilla", "She's a coyote, not a minx.", '',
				"The Borderline Porcupine", "Shut up! Shut up! I SAW HER! That stupid tramp did it! I saw her run crying from the bathroom earlier that evening! The only pity is she didn't off herself with that back-stabbing jerk McGuffin at the same time!", ''
			);
			interrogation(
				"q3-1", "I get the feeling there's some history between you three.",
				"q3-2", "...please tell us what you were doing all today, Mr. Porcupine.",
				"end-interrogation", "Goodbye."
			);
			if (suspect3) {
				$("#q3-1,#q3-2").addClass('questioned');
			}
			$("#q3-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Borderline Porcupine", "History! There's history, all right! That cheating broad! As for McGuffin! Well, I sure thought we used to be friends! That son of a-", '',
						"The Vanilla Chinchilla", "I'm going to stop you right there for the sake of this game's E for Everyone rating.", ''
					);
				});
			});
			$("#q3-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Borderline Porcupine", "Whoa! Whoa! Hold on a second here! I want a lawyer! I know my rights! I plead the fifth! AM I UNDER ARREST?!", '',
						"Investigator", "...", '',
						"The Vanilla Chinchilla", "I don't think we're going to get anything useful from him.", 'suspect3'
					);
					suspect3 = true;
				});
			});
		});
		$("#talkto-yak").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='yak' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"Investigator", "Hello, Mr. Yak?", '',
				"The Pack Yak", "That's me.", ''
			);
			interrogation(
				"q4-1", "Could you describe your relationship with the victim?",
				"q4-2", "Could you tell me if you heard anything between the hours of 3pm and 9pm?",
				"end-interrogation", "You have a nice day, now."
			);
			if (suspect4) {
				$("#q4-1,#q4-2").addClass('questioned');
			}
			$("#q4-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Pack Yak", "Uh, to tell you the truth, it was nonexistent. I just moved in here like, a month ago. I found the room on Croakslist.", '',
						"The Vanilla Chinchilla", "I bet you're really regretting answering that ad now...", '',
						"The Pack Yak", "Yeah, I'm going to see about breaking the lease tomorrow. My mother always told me not to share a house with murderers.", '',
						"The Vanilla Chinchilla", "What an oddly specific lesson.", ''
					);
				});
			});
			$("#q4-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Pack Yak", "Well, let's see. I had dinner in the living room at 5. Around 7, I headed to bed - that's when I saw McGuffin in the hallway walking towards the bathroom and said hello. My mother taught me to be polite, you see.", '',
						"The Pack Yak", "By 9, I was in bed reading <i>50 Shades of Hay</i>, when I heard the most blood-curdling scream from the bathroom. I rushed out to find Throaty on the phone with the police.", '',
						"Investigator", "That's very helpful. Thank you very much, Mr. Yak.", 'suspect4'
					);
					suspect4 = true;
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
		$("#talkto-chicken,#talkto-coyote,#talkto-porcupine,#talkto-yak").unbind("click");
		$("#act2").append("<div id='letter' class='interactable'></div>");
		$("#act2").append("<div id='bill' class='interactable'></div>");
		$("#act2").append("<div id='pictureframe' class='interactable'></div>");
		$("#convo-characters").append("<div id='bobbycat' class='character'></div><div id='investigator' class='character'></div><div id='chinchilla' class='character'></div>");
		$("#convo-characters").fadeIn(800);
		conversation(
			"Investigator", "Not quite as open and shut as you thought, eh, Bobbycat?", '',
			"Bobbycat", "Something's a bit off, it's true. Plus, that Borderline Porcupine is starting to look mighty suspicious... Hmmm... A jilted lover who kills the interloper and frames it on the wayward mistress. Yeah! I like it.", '',
			"The Vanilla Chinchilla", "Bobbycat, you worry me sometimes.", '',
			"Bobbycat", "And that Chicken's testimonial felt real forced - as if he just went into total denial mode. Odd that he never claimed to hear Throaty's scream, huh?", '',
			"The Vanilla Chinchilla", "Oh boy. And what crackpot theory do you have about the Pack Yak?", '',
			"Bobbycat", "Nah, that bloke seems pretty alright.", '',
			"Investigator", "In any case, I would now like to investigate the area for further evidence.", ''
		);
		$("#letter").click(function(){
			conversation(
				"The Vanilla Chinchilla", "Hmm? What's this?", '',
				"The Vanilla Chinchilla", "It's written by the deceased. <br>&ldquo;Dear Throaty the Coyote, it pains me to do this, but here are 99 reasons why I need to break up with you...&rdquo;", '',
				"The Vanilla Chinchilla", "Wow! This is scorching hot!", '',
				"Investigator", "Good eye, the Vanilla Chinchilla. I'll take that for evidence.", 'clue5'
			);
			clue5 = true;
			$(this).remove();
		});
		$("#bill").click(function(){
			conversation(
				"The Vanilla Chinchilla", "This notice is addressed to McGuffin.", '',
				"The Vanilla Chinchilla", "&ldquo;Dear McGuffin, despite our long-time status as friends, I am at the end of my rope. I really need that $15,000 that you borrowed from me several years ago. I have included a detailed invoice and interest rate below...&rdquo;", '',
				"The Vanilla Chinchilla", "Huh. It's from the Stricken Chicken.", 'clue6',
				"Investigator", "A good life lesson - never mix friendship and money.", ''
			);
			clue6 = true;
			$(this).remove();
		});
		$("#pictureframe").click(function(){
			conversation(
				"The Vanilla Chinchilla", "It's a really old picture of the Borderline Porcupine and the Throaty Coyote. Aww, they're holding hands.", '',
				"The Vanilla Chinchilla", "I guess they used to be pretty serious.", '',
				"Investigator", "Hmm. The heart is a fickle mistress indeed.", 'clue7'
			);
			clue7 = true;
			$(this).remove();
		});

		// New conversation trees
		$("#talkto-chicken").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='chicken' class='character'></div>");
			$("#convo-characters").fadeIn();
			$("#interrogation").fadeIn();
			if (clue6) {
				interrogation(
					"q1-1", "What's your final next week about?",
					"q1-2", "Are these your feathers?",
					"q1-3", "In your statement, why didn't you claim to hear Throaty scream?",
					"q1-4", "Can you explain this collections notice?",
					"end-interrogation", "I'll be seeing you."
				);
			} else {
				interrogation(
					"q1-1", "What's your final next week about?",
					"q1-2", "Are these your feathers?",
					"q1-3", "In your statement, why didn't you claim to hear Throaty scream?",
					"end-interrogation", "You have a nice day, now."
				);
			}
			if (askedaboutclue6) {
				$("#q1-1,#q1-2,#q1-3,#q1-4").addClass('questioned');
			}
			$("#q1-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "Oh, um, ah, underwater mineralogy.", '',
						"The Vanilla Chinchilla", "Oh! I love collecting rocks!", ''
					);
				});
			});
			$("#q1-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "Er! Ahh... umm... where did you get those?", '',
						"The Stricken Chicken", "W-well, you know, I've been molting lately, and my feathers just keep getting everywhere. Throaty keeps complaining that they're clogging the drains.", '',
						"Investigator", "Thank you, Mr. Chicken.", ''
					);
				});
			});
			$("#q1-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "O-oh! I, I must have just forgotten. That's all. Now that I think about it, I do remember her screaming. C-can I change my statement?", '',
						"Investigator", "It's too late. It's written down forever in my notebook now.", '',
						"Investigator", "I always forget to bring an eraser.", ''
					);
				});
			});
			$("#q1-4").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Stricken Chicken", "H-h-hey! You can't just paw through people's stuff!", '',
						"Investigator", "Actually, legally, we absolutely can, sir.", '',
						"The Stricken Chicken", "Ahhhh... alright. I'll confess, things between McGuffin the Puffin and I have been a bit tense lately. I loved him like a brother, but he was <i>terrible</i> with money.", '',
						"The Stricken Chicken", "Plus, he was letting Throaty the Coyote stay totally rent-free in his room! That's just, ugh, that's not cool!", ''
					);
				});
				askedaboutclue6 = true;
			});
		});
		$("#talkto-coyote").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='coyote' class='character'></div>");
			$("#convo-characters").fadeIn();
			dialogue("The Throaty Coyote", "Sniff... sniff... Boo hoo...", '');
			if (clue5) {
				interrogation(
					"q2-1", "How are you holding up?",
					"q2-2", "Why does the Borderline Porcupine hate you so much?",
					"q2-3", "Did you know about this breakup letter?...",
					"end-interrogation", "Take care, miss."
				);
			} else {
				interrogation(
					"q2-1", "How are you holding up?",
					"q2-2", "Why does the Borderline Porcupine hate you so much?",
					"end-interrogation", "Take care, miss."
				);
			}
			if (askedaboutclue5) {
				$("#q2-1,#q2-2,#q2-3").addClass('questioned');
			}
			$("#q2-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Throaty Coyote", "It feels like my heart's breaking into a million pieces. I want to crawl into bed and listen to Linken Park for a year.", ''
					);
				});
			});
			$("#q2-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Throaty Coyote", "Well, we used to date.", '',
						"Inspector", "Yes, I managed to deduce that.", '',
						"The Throaty Coyote", "We just weren't working out, so I broke up with him. I guess he was more hung up on me than I thought, though, 'cause he went totally crazy.", '',
						"The Throaty Coyote", "Maybe I shouldn't have moved in and started seeing his roommate.", '',
						"The Vanilla Chinchilla", "It's really not the best idea I've ever heard.", ''
					);
				});
			});
			$("#q2-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Throaty Coyote", "Wh-where did you find that!?", '',
						"Inspector", "In a rubbish bin.", '',
						"The Throaty Coyote", "W-well that's where it belongs, clearly! My McGuffin would never break up with me! E-<i>ever!</i> The very idea! How dare you!", '',
						"The Throaty Coyote", "Besides, would a dame as good-looking as me get broken up with? I think not! <i>I</i> am the one who breaks up with others!", ''
					);
				});
				askedaboutclue5 = true;
			});
		});
		$("#talkto-porcupine").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='porcupine' class='character'></div>");
			$("#convo-characters").fadeIn();
			$("#interrogation").fadeIn();
			if (clue7) {
				interrogation(
					"q3-1", "Care to give your statement yet?",
					"q3-2", "Do you know the Stricken Chicken?",
					"q3-3", "Why did you and Throaty Coyote separate?",
					"end-interrogation", "Goodbye."
				);
			} else {
				interrogation(
					"q3-1", "Care to give your statement yet?",
					"q3-2", "Do you know the Stricken Chicken?",
					"end-interrogation", "Goodbye."
				);
			}
			if (askedaboutclue7) {
				$("#q3-1,#q3-2,#q3-3").addClass('questioned');
			}
			$("#q3-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Borderline Porcupine", "...", '',
						"Inspector", "How about now?", '',
						"The Borderline Porcupine", "...", '',
						"Inspector", "Nice weather we've been having lately.", '',
						"The Borderline Porcupine", "...", '',
						"Inspector", "Alright, I get the hint.", ''
					);
				});
			});
			$("#q3-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Borderline Porcupine", "We knew each other through McGuffin, but we weren't really friends or anything. He seemed kinda stuffy. And that's all you're getting out of me, copper!", '',
						"Inspector", "...", ''
					);
				});
			});
			$("#q3-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Borderline Porcupine", "THAT SCURVY TART!", '',
						"Inspector", "Please, Mr. Porcupine, just the facts.", '',
						"The Borderline Porcupine", "FACTS! There's nothing remotely factual or logical about that woman's heart! She left me saying she'd met someone else. Little did I know it was for a man who I used to once call a brother!", '',
						"The Borderline Porcupine", "She also told me I shouted too much! ME!", '',
						"The Vanilla Chinchilla", "I think I've gone slightly deaf in my left ear.", ''
					);
				});
				askedaboutclue7 = true;
			});
		});
		$("#talkto-yak").click(function(){
			$("#convo-characters").append("<div id='investigator' class='character'></div><div id='chinchilla' class='character'></div><div id='yak' class='character'></div>");
			$("#convo-characters").fadeIn();
			if (!clue8) {
				conversation(
					"The Pack Yak", "Ah, hello, officers. I'm afraid you'll find the house empty of helpful clues pertaining to me. As an apology, might I offer you a glass of water instead?", '',
					"Investigator", "Well, you may be right, Mr. Yak. You'll understand that we have to look anyway.", '',
					"The Pack Yak", "Of course, of course.", '',
					"The Vanilla Chinchilla", "I'll take a sip of that water, though!", 'clue8'
				);
			} else {
				$("#interrogation").fadeIn();
			}
			interrogation(
				"q4-1", "What's your impression of your roommates in the short time you've known them?",
				"q4-2", "So, where are you thinking of moving to next?",
				"end-interrogation", "You have a nice day, now."
			);
			if (clue8) {
				$("#q4-1,#q4-2").addClass('questioned');
			}
			$("#q4-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Pack Yak", "I find the Borderline Porcupine to be quite objectionable. He picks arguments at the drop of a hat. I avoid all discourse with him.", '',
						"The Pack Yak", "The Throaty Coyote I can converse with civilly. However, we have very little in common, and I have always been a bit of a gruff bachelor.", '',
						"The Pack Yak", "I have no real impression of the Stricken Chicken or the late McGuffin the Puffin. They were both retiring fellows and kept to themselves, as my mother always says gentlemen should.", '',
						"Inspector", "Thank you, Mr. Yak.", ''
					);
				});
			});
			$("#q4-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Pack Yak", "I'm thinking of checking out a micro apartment, or a tiny house. They're all the rage lately.", '',
						"The Vanilla Chinchilla", "Um... I hate to break it to you, but you might not be able to fit into one.", ''
					);
				});
			});
			$("#end-interrogation").click(function(){
				clue8 = true;
			});
		});

		/* Start Act 3 */
		$(document).on("click", "#end-interrogation", function(){
			// Set a 500ms timeout on the act transitions to allow the previous dialogue/characters to fade out smoothly
			if (!act3checkpoint && askedaboutclue5 && askedaboutclue6 && askedaboutclue7 && clue8) {
				setTimeout(act3transition, 500)
			}
		});
	}

	/* Act 3 Transition */
	function act3transition() {
		$("#convo-characters").append("<div id='bobbycat' class='character'></div><div id='investigator' class='character'></div><div id='chinchilla' class='character'></div>");
		$("#convo-characters").fadeIn(800);
		conversation(
			"Bobbycat", "Uh oh. Investigator!", '',
			"Investigator", "Yes?", '',
			"Bobbycat", "The autopsy and the background checks have just come back. They check out, except for two. The Throaty Coyote has some charges for petty theft and shoplifting.", '',
			"Investigator", "And the other?", '',
			"Bobbycat", "The other is... I can't believe this. The Pack Yak has been previously arrested on suspicion of murdering a series of roommates!", 'clue9',
			"The Vanilla Chinchilla", "What!?", '',
			"Bobbycat", "Yes, although - he was acquitted.", '',
			"Investigator", "And the autopsy?", '',
			"Bobbycat", "The cause of death is listed as strangulation instead of blunt force trauma, so you were on the money there. But look, this is just the strangest thing - the toxicology report indicates his blood was full of poison!", 'clue10',
			"Investigator", "Thank you, Bobbycat. That unfortunately confirms my suspicions. Please gather everyone - it's almost time for the part where I overdramatically point my finger at the killer.", '',
			"Are you ready to accuse the murderer?", "<a id='act2-exit-confirm'>A: Yes, I'm ready!</a> <a>A: Err, I'd like to interrogate the suspects a bit more.</a>", 'act3checkpoint'
		);
		act3checkpoint = true;
		$("#act2").prepend("<div id='accuse-murderer' class='character'></div>");
		$("#act2-exit-confirm, #accuse-murderer").one("click",function() {
			$("#bgmusic").animate({volume: 0}, 800);
			$("#act2").fadeOut(500, function(){
				$("#act2").remove();
				act3();
			});
		});
	}

	/* Act 3 */
	function act3() {
		$("#bgmusic").attr("src", "../shared_assets/music/act3.mp3");
		if (sound == true) { $("#bgmusic").animate({volume: 0.5}, 1000); }

		$("#wrapper").prepend("<div id='dramatic-backdrop'></div>");
		$("#wrapper").prepend("<div id='act3' class='background'></div>");
		$("#act3").append("<div id='talkto-chicken' class='ui'></div>");
		$("#act3").append("<div id='talkto-coyote' class='ui'></div>");
		$("#act3").append("<div id='talkto-porcupine' class='ui'></div>");
		$("#act3").append("<div id='talkto-yak' class='ui'></div>");
		$("#act3").append("<div id='accuse-murderer' class='ui'></div>");
		$("#act3").fadeIn(1000);

		dramaticDialogue("end1", "Investigator", "I've called you all here for a very important reason. This is the part where I overdramatically point my finger at the killer!", ["investigator"]);
		dramaticDialogue("end2","The Throaty Coyote", "I'm telling you, it wasn't me!", ["coyote"]);
		dramaticDialogue("end3","The Borderline Porcupine", "I'm telling you, it was her!", ["porcupine"]);
		dramaticDialogue("end4", "Investigator", "The Vanilla Chinchilla, I'm going to give you a chance to show off all you've learned. Who was the dastardly murderer?", ["investigator"]);

		$(document).on("click", "#end4", function(){
			$("#dialogue, #dramatic-backdrop").fadeOut(function() {
				$("#accuse-murderer").fadeIn();
			});
		});

		$("#talkto-chicken,#talkto-coyote,#talkto-porcupine,#talkto-yak").click(function(){
			$(this).toggleClass("selected");
		});
		$("#accuse-murderer").click(function(){
			$("#dialogue, #dramatic-backdrop").fadeIn();

			if ($("#talkto-chicken").hasClass("selected") && $("#talkto-coyote").hasClass("selected") && $("#talkto-porcupine").hasClass("selected") && $("#talkto-yak").hasClass("selected")) {
				dramaticDialogue("endright", "Investigator", "Well done - you got it! IT WAS ALL OF THEM!", ["investigator"]);
			}
			else if ($("#talkto-chicken,#talkto-coyote,#talkto-porcupine,#talkto-yak").hasClass("selected")) {
				dramaticDialogue("endwrong1", "Investigator", "Hm. Nearly right, the Vanilla Chinchilla. In fact, however...", ["investigator"]);
				dramaticDialogue("endwrong2", "Investigator", "IT WAS ALL OF THEM!", ["investigator"]);
				dramaticDialogue("endwrong3", "The Vanilla Chinchilla", "What!?", ["chinchilla"]);
			} else {
				dramaticDialogue("endtryagain1", "Investigator", "The Vanilla Chinchilla, you have to actually point at a suspect.", ["investigator"]);
				dramaticDialogue("endtryagain2", "The Vanilla Chinchilla", "Whoops!", ["chinchilla"]);
				$("#dramatic-backdrop").hide();
			}
		});

		$(document).on("click", "#endright, #endwrong3", function(){
			$("#accuse-murderer").hide();
			$("#talkto-chicken,#talkto-coyote,#talkto-porcupine,#talkto-yak").removeClass("selected").unbind("click");
			restOfAct3();
		});
	}

	function restOfAct3() {
		dramaticDialogue("end5", "Investigator", "Little did you all know, each of you independently conspired to murder McGuffin the Puffin! The first was the Pack Yak... otherwise known as the serial killer, <i>the Ricin Bison!</i>", ["investigator","yak"]);
		dramaticDialogue("end6", "Investigator", "The Ricin Bison poisoned McGuffin much earlier that day. As a result, McGuffin fell unconscious in his bath.", ["yak"]);
		dramaticDialogue("end7", "Investigator", "The second killer was Throaty Coyote. After McGuffin left for his bath, you went snooping and found the breakup letter in his room. Consumed by rage, you stormed into the bathroom and strangled him where he lay! In his weakened state, he could hardly put up a fight!", ["investigator","coyote"]);
		dramaticDialogue("end8", "The Throaty Coyote", "N-no!", ["coyote"]);
		dramaticDialogue("end9", "Investigator", "The third was the Stricken Chicken. You walked in on the carnage after Throaty had fled. McGuffin was still barely alive at that point. You could have saved him! Instead, you coldly condemned him to his fate by holding his head underwater!", ["investigator","chicken"]);
		dramaticDialogue("end10", "The Stricken Chicken", "Buh...buh... buhkaw!", ["chicken"]);
		dramaticDialogue("end11", "Investigator", "As for you, the Borderline Porcupine...", ["investigator"]);
		dramaticDialogue("end12", "The Borderline Porcupine", "Come at me, bro! I ain't scared!", ["porcupine"]);
		dramaticDialogue("end13", "Investigator", "Upon finding McGuffin passed out in the shower, you remembered having seen Throaty run crying from the bathroom. Evilly, you decided to frame her for the crime, bashing the victim's head into a pulp! However, you failed to notice McGuffin was already dead. Your act was the most brutal, yet the most impotent.", ["investigator"]);
		dramaticDialogue("end14", "All", "......................", ["coyote","yak","chicken","porcupine"]);
		dramaticDialogue("end15", "The Ricin Bison", "Well, well, well. I must admit, Investigator. I'm impressed. Your powers of deduction are extraordinary.", ["yak"]);
		dramaticDialogue("end16", "Investigator", "Why, thank you.", ["investigator"]);
		dramaticDialogue("end17", "The Ricin Bison", "Before you take us away, it's my turn to ask you one last question.", ["yak"]);
		dramaticDialogue("end18", "The Ricin Bison", "...", ["yak"]);
		dramaticDialogue("end19", "The Ricin Bison", "Why would I only poison McGuffin, when I could poison the entire house?!", ["yak"]);
		dramaticDialogue("end20", "The Stricken Chicken", "Wha-!?", ["chicken"]);
		dramaticDialogue("end21", "The Throaty Coyote", "Argh...!", ["coyote"]);
		dramaticDialogue("end22", "The Borderline Porcupine", "No! I'll kill you!", ["porcupine"]);

		// TODO: show them 'disappearing' somehow?

		dramaticDialogue("end23", "The Vanilla Chinchilla", "Oh no... Investigator, I don't feel so good...", ["chinchilla"]);
		dramaticDialogue("end24", "Investigator", "The Vanilla Chinchilla! The glass of water!", ["investigator"]);
		dramaticDialogue("end25", "The Vanilla Chinchilla", "A-Augh!", ["chinchilla"]);
		dramaticDialogue("end26", "Investigator", "NOOOOOOOOOOOO!", ["investigator"]);
		dramaticDialogue("end27", "Bobbycat", "Men, apprehend the Ricin Bison! Investigator, I'm calling an ambulance!", ["bobbycat"]);
		dramaticDialogue("end28", "Investigator", "It's... it's too late.", ["investigator"]);
		dramaticDialogue("end29", "Investigator", "You're a real scumbag, Bison. I'll see you locked up for life for this.", ["investigator"]);
		dramaticDialogue("end30", "The Ricin Bison", "Heh. Maybe you will, maybe you won't.", ["yak"]);
		dramaticDialogue("end31", "Bobbycat", "Take him away, boys!", ["bobbycat","yak"]);
		dramaticDialogue("end32", "Investigator", "Poor Vanilla Chinchilla. I won't be sorry to be done with this case, Bobbycat. That entire household...", ["investigator"]);
		dramaticDialogue("end33", "Investigator", "...", ["investigator"]);
		dramaticDialogue("theend", "Investigator", "...was real toxic.", ["investigator"]);

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
		if (window.sound == true) { $("#bgmusic").animate({volume: 0.5}, 200); }

		$("#wrapper").prepend("<div id='credits' class='background'></div>");
		$("#credits").append("<div id='credits-title' class='ui'></div>");
		$("#credits").append("<div id='credits-tombstone' class='ui'></div>");
		$("#credits").append("<div id='audio-credits' class='ui'><img src='../shared_assets/ui/credits_audio.png' alt='Audio Credits'> <br><br> <a href='http://opengameart.org/content/a-la-poursuite-dune-ombre-du-pass%C3%A9' target='_blank'>Dogers &mdash; A la poursuite d'une ombre du passé</a> <br><br> <a href='http://opengameart.org/content/the-plot-thickens' target='_blank'>el-corleo &mdash; The Plot Thickens</a></div>");
		$("#credits").append("<div id='special-thanks' class='ui'><img src='../shared_assets/ui/credits_thanks.png' alt='Special Thanks'> <br><br> Jeff Clark<br><br>Ryder Hanson<br><br>Kieran Lampert</div>");
		$("#credits").fadeIn(1000);
	}

	/* Start the game */
	if (window.canplay) {
		mainmenu();
	}
});