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
	"../shared_assets/characters/dogtective.png",
	"backgrounds/mainmenu_bg.jpg",
	"ui/mainmenu_start.png",
	"characters/duck.png",
	"backgrounds/grow_room.jpg"
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
	"backgrounds/station.jpg",
	"characters/siamese.png",
	"characters/raven.png",
	"characters/elephant.png",
	"characters/tabby.png",
	"backgrounds/credits_bg.jpg"
];

preload(initialGame);

$(document).ready(function() {
	/* Setup Variables */
	var clue1, clue2, clue3, clue4, clue5, clue6, clue7, clue8, clue9, clue10, suspect1, suspect2, suspect3, suspect4, act3checkpoint = false;

	/* Main Menu*/
	function mainmenu() {
		$("#wrapper").prepend("<div id='mainmenu' class='background'></div>");
		$("#mainmenu").append("<a id='mainmenu_start' class='interactable'></a>");
		$("#mainmenu").fadeIn(500);

		/* Start Act 1 */
		$("#mainmenu_start").one("click",function() {
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
		$("#act1").append("<div id='act1-plants' class='interactable'></div>");
		$("#act1").append("<div id='act1-light' class='interactable'></div>");
		$("#act1").append("<div id='act1-bear' class='interactable'></div>");
		$("#act1").append("<div id='act1-prints' class='interactable'></div>");
		$("#act1").append("<div id='act1-cigarettes' class='interactable'></div>");
		$("#act1").append("<div id='act1-wallet' class='interactable'></div>");
		$("#act1").append("<div id='medication' class='interactable'></div>");
		$("#act1").append("<div id='bill' class='interactable'></div>");
		$("#act1").append("<div id='phone' class='interactable'></div>");
		$("#act1").append("<div id='gun' class='interactable'></div>");
		$("#act1").append("<div id='act1-exit' class='arrows'></div>");
		$("#act1").append("<div id='convo-characters'><div id='dogtective' class='character'></div><div id='duck' class='character'></div><div id='investigator' class='character'></div></div>");
		$("#act1").fadeIn(700,function() {
			conversation(
				"Investigator", "Well, Bobbycat, what's the details of — wait a second! You're not Bobbycat!", '',
				"Dogtective", "Nice to meet you, Investigator. The name's Dogtective. I'm afraid Bobbycat can't join you on this particular case, for reasons that will become apparent once I turn the light on.", '',
				"The Bad Luck Duck", "Why are we sitting in the dark, anyway?", '',
				"Investigator", "For dramatic effect, of course.", '',
				"Dogtective", "Wait a minute, Investigator — who's this with you?", '',
				"Investigator", "Apologies, Dogtective. This is The Bad Luck Duck, my sidekick. I'm afraid he's — er — imperative to the process. My sidekicks take notes and store clues for me. Absolutely essential.", '',
				"Dogtective", "If you say so, Investigator. Anyway, here's a quick summary of the situation. At first glance, it's an apparent suicide. The individual was known as The Bipolar Bear. Not a very upstanding citizen — he ran an illegal grow op in this very room.", 'victim',
				"Investigator", "What was he growing?", '',
				"Dogtective", "What else? Catnip.", '',
				"Investigator", "Hmm. By the way, why do you say <em>apparent</em> suicide?", '',
				"Dogtective", "The murder weapon — a gun, by the way, Chekhov's brand, revolver, 22LR — belongs to him, and ballistics match the bullet found in the right side of his head. But there's no suicide note, and, well — I'll leave it to your famous investigative skills to find out the rest for yourself.", 'clue1',
				"The Bad Luck Duck", "Very sporting of you, Dogtective. Let's get quacking, Investigator.", ''
			);
		});
		clue1 = true;

		/* Objects */
		$("#act1-cigarettes").click(function(){
			dialogue("Investigator", "The only thing this cigarette ash tells me is that someone needs to buy a bloody ashtray.", '');
		});
		$("#act1-wallet").click(function(){
			conversation(
				"The Bad Luck Duck", "Odd... there's nothing in here but cash.", '',
				"Investigator", "Cash: the friend of all tax evaders everywhere.", ''
			);
		});
		$("#act1-bear").click(function(){
			dialogue("The Bad Luck Duck", "Yikes. Poor guy.", '');
		});
		$("#act1-prints").click(function(){
			conversation(
				"The Bad Luck Duck", "Investigator, can you deduce anything from those footprints?", '',
				"Investigator", "Yes. I deduce that somebody needs to wipe their feet at the door when they come in.", ''
			);
		});
		$("#act1-plants").click(function(){
			dialogue("Investigator", "It's probably a good thing Bobbycat isn't here with us today.", '');
		});
		$("#act1-light").click(function(){
			dialogue("Investigator", "The latest theory is that catnip plants grow fastest under red lasers.", '');
		});

		$("#gun").click(function(){
			if (clue2 && clue3) {
				dialogue("Investigator", "Chekhov's is one of the most popular brands of guns on the market these days.", '');
			} else {
				conversation(
					"The Bad Luck Duck", "Wait a second...", '',
					"Investigator", "I think I see what Dogtective meant. If the entry wound was in the <em>right</em> side of his head, why would he be holding the gun in his <em>left</em> hand?", '',
					"The Bad Luck Duck", "Suspicious. Very suspicious.", 'clue2',
					"Investigator", "By the way, Dogtective, did you dust for fingerprints?", '',
					"Dogtective", "I sure did. None found.", '',
					"Investigator", "<em>None</em> found? Not even the victim's?", '',
					"Dogtective", "You got it, Investigator. The gun was found lying next to his right hand.", '',
					"The Bad Luck Duck", "Then this was a murder! And frankly, a very amateur murder.", 'clue3'
				);
				clue2 = true;
				clue3 = true;
			}
		});
		$("#phone").click(function(){
			if (clue6) {
				dialogue("The Bad Luck Duck", "Heh. [poop emoji].", '');
			} else {
				conversation(
					"The Bad Luck Duck", "The Bipolar Bear's cellphone! Drat, it's got a PIN lock on it.", '',
					"Investigator", "We can still see his latest notifications. Let's see, three missed calls, two Facebark messages... and an angry text from someone named 'The Crabby Tabby'.", '',
					"The Bad Luck Duck", "&ldquo;UR LATEST STRAIN WAS [poop emoji]. I WANT MY $$ BAK.&rdquo;", '',
					"Investigator", "Not a very happy customer.", 'clue6'
				);
				clue6 = true;
			}
		});
		$("#bill").click(function(){
			if (clue5) {
				dialogue("The Bad Luck Duck", "Yeesh. This is more than my student loan debt.", '');
			} else {
				conversation(
					"The Bad Luck Duck", "What's this, Investigator?", '',
					"Investigator", "It appears to be a summary of an electricity bill.", '',
					"The Bad Luck Duck", "Whoo-wee! This could buy you a used car.", '',
					"Investigator", "Catnip plants do need a lot of light. ", 'clue5'
				);
				clue5 = true;
			}
		});
		$("#medication").click(function(){
			if (clue4) {
				dialogue("Investigator", "Mental illness is no laughing matter. Nor is it something to be ashamed of.", '');
			} else {
				conversation(
					"Investigator", "Looks like a commonly-prescribed antidepressant.", '',
					"The Bad Luck Duck", "Whoa. The dosage on this could tranquillize a horse.", '',
					"Dogtective", "The markings on the pack indicate the last pill was taken was at least five days ago.", 'clue4'
				);
				clue4 = true;
			}
		});

		/* Start Act 2 */
		$("#act1-exit").click(function() {
			if (clue3 && clue4 && clue5 && clue6) {
				conversation(
					"Investigator", "I think that's all there is left to see of this room, Dogtective. Do you have a group of suspects for us to interrogate?", '',
					"Dogtective", "As a matter of fact, yes. I went through the neighbors' reports and his cell company's records and obtained a list of suspects who potentially met him in person today. We've rounded them all up at the station for questioning. Ready to head over there?", '',
					" ", "<a id='act1-exit-confirm'>A: Yes, I'm ready.</a> <a>A: No, I'd like to look around for a bit longer.</a>", ''
				);
				$("#act1-exit-confirm").one("click",function() {
					$("#act1").fadeOut(500,function() {
						$("#act1").remove();
						act2();
					});
				});
			} else {
				conversation(
					"The Bad Luck Duck", "I think we should keep looking around, Investigator.", '',
					"Investigator", "Hmm. I'll follow your intuition on this one.", ''
				);
			}
		});
	}

	/* Act 2 */
	function act2() {
		$("#wrapper").prepend("<div id='act2' class='background'></div>");
		$("#act2").append("<div id='act2-bulletin-board' class='interactable'></div>");
		$("#act2").append("<div id='act2-water-cooler' class='interactable'></div>");
		$("#act2").append("<div id='act2-camera' class='interactable'></div>");
		$("#act2").append("<div id='talkto-siamese' class='character'></div>");
		$("#act2").append("<div id='talkto-raven' class='character'></div>");
		$("#act2").append("<div id='talkto-elephant' class='character'></div>");
		$("#act2").append("<div id='talkto-tabby' class='character'></div>");
		$("#act2").append("<div id='convo-characters'><div id='dogtective' class='character'></div><div id='duck' class='character'></div><div id='investigator' class='character'></div></div>");
		$("#act2").fadeIn(700,function() {
			conversation(
				"Investigator", "And who are these lot?", '',
				"Dogtective", "All we have so far are their names — thought we'd leave the expert interrogation work to you. You'll be questioining The Sleazy Siameasy, The Craven Raven, The Irrelevant Elephant, and The Crabby Tabby.", '',
				"The Bad Luck Duck", "Don't worry, Dogtective, we'll soon quack them wide open. Right, Investigator?", '',
				"Investigator", "The Bad Luck Duck, why do you keep saying...", '',
				"The Bad Luck Duck", "Eh?", '',
				"Investigator", "...never mind.", ''
			);
		});

		$("#act2-bulletin-board").click(function(){
			dialogue("Investigator", "A medley of wanted posters and various notices. I don't think anyone's ever ripped anything down.", '');
		});
		$("#act2-water-cooler").click(function(){
			dialogue("Investigator", "Absolutely not. No more storing water in my clues folder.", '');
		});
		$("#act2-camera").click(function(){
			dialogue("The Bad Luck Duck", "Smile, Investigator! You're on camera!", '');
		});

		$("#talkto-siamese").click(function(){
			$("#convo-characters").append("<div id='duck' class='character'></div><div id='investigator' class='character'></div><div id='siamese' class='character'></div>");
			$("#convo-characters").fadeIn();
			dialogue("The Sleazy Siameasy", "Ugh, would you boys in blue please hurry it up? Some of us have clients waiting, you know.", '');
			interrogation(
				"q1-1", "How did you know The Bipolar Bear?",
				"q1-2", "'Clients', huh? Tell me a bit about yourself.",
				"q1-3", "So... catnip.",
				"q1-4", "(Coax) If you tell us everything, we can get you a plea bargain, the whole works.",
				"q1-5", "(Bluff) Look, we know you're lying. You might as well spill the beans.",
				"end-interrogation", "That's all for now, Miss Siameasy."
			);
			if (suspect1 && clue7) {
				$("#q1-1,#q1-2,#q1-3,#q1-4,#q1-5").addClass('questioned');
			}
			$("#q1-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Sleazy Siameasy", "We were friends. That's all.", '',
						"Investigator", "<em>Just</em> friends?", '',
						"The Sleazy Siameasy", "Let's just say that our friendship was mutually beneficial, shall we?", '',
						"Investigator", "Exactly how did you benefit?", '',
						"The Sleazy Siameasy", "Well, I would get the occasional handful of catnip, and The Bipolar Bear would occasionally have the pleasure of my company.", '',
						"The Bad Luck Duck", "That... sounds vaguely illegal.", '',
						"The Sleazy Siameasy", "Oh please, darling, you've got nothing on me. No money ever exchanged paws.", 'suspect1'
					);
					suspect1 = true;
				});
			});
			$("#q1-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Sleazy Siameasy", "I'm sure I don't know what you're insinuating, dear. I'm entirely above board. My clients are simply looking for a charming dinner companion to hang on their arm for the night.", '',
						"The Bad Luck Duck", "I... I see.", '',
						"The Sleazy Siameasy", "I also do part-time acting work, darling. I have an agency and everything.", '',
						"Investigator", "I'm sure you do, miss.", ''
					);
				});
			});
			$("#q1-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Sleazy Siameasy", "It's legal now, darling. I'm not sure what you're trying to prove.", '',
						"Investigator", "You're willing to confirm that you obtained catnip from The Bipolar Bear?", '',
						"The Sleazy Siameasy", "Yes, although of course I'm sure I had <em>no</em> idea he was growing it illegally out of his home. Quite unfortunate, really.", '',
						"The Bad Luck Duck", "How about his gun? Were you aware he owned one?", '',
						"The Sleazy Siameasy", "I'd see him carrying it, occasionally. I can't say I took particular notice.", ''
					);
				});
			});
			$("#q1-4").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Sleazy Siameasy", "Hmm... I do like bargains.", '',
						"The Sleazy Siameasy", "Very well, I'll tell the truth. The Bipolar Bear had called me today, wanting to discuss a personal matter. Turns out he was looking to settle down with a more long-term partner, and wanted to end our, ahem, arrangement.", '',
						"Investigator", "And this didn't bother you?", '',
						"The Sleazy Siameasy", "Heavens, no. I have no particular attachment to my... friends.", 'clue7',
						"The Bad Luck Duck", "She could be lying, Investigator. She looks pretty proud to me.", '',
						"Investigator", "Hmm.", ''
					);
				});
				clue7 = true;
			});
			$("#q1-5").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Sleazy Siameasy", "Oh really, dear, how terribly amateur. You're more than welcome to speak to my agency's lawyers on the matter.", '',
						"Investigator", "I think we ought to drop this line of questioning.", ''
					);
				});
			});
		});

		$("#talkto-raven").click(function(){
			$("#convo-characters").append("<div id='duck' class='character'></div><div id='investigator' class='character'></div><div id='raven' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"The Craven Raven", "Awk! I'm innocent! I don't know nothing!", ''
			);
			interrogation(
				"q2-1", "What exactly was your relationship with The Bipolar Bear?",
				"q2-2", "Have you noticed The Bipolar Bear acting any differently as of late?",
				"q2-3", "I would hardly peg you as a catnip imbiber.",
				"q2-4", "(Threaten) We don't have time for this. We need better information than this, friend.",
				"q2-5", "(Stare silently at the Craven Raven).",
				"end-interrogation", "We'll be back, Mr. Raven."
			);
			if (suspect2 && clue8) {
				$("#q2-1,#q2-2,#q2-3,#q2-4,#q2-5").addClass('questioned');
			}
			$("#q2-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Craven Raven", "I... I... we were just friends! Really good friends!", '',
						"Investigator", "Really?", '',
						"The Craven Raven", "I... uh, yeah, we were roommates in college. I swear that's all!", '',
						"The Bad Luck Duck", "So what were you doing at his apartment today?", '',
						"The Craven Raven", "Wh-what, it's against the law now to visit an old friend!?", ''
					);
				});
			});
			$("#q2-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Craven Raven", "W-well... he was a little grouchier, maybe. He'd fly off the handle for no good reason, especially at old friends who was just tryin' to help a guy out.", '',
						"Investigator", "You seem to be referring to something specific.", '',
						"The Craven Raven", "S-so what if I am?!", ''
					);
				});
			});
			$("#q2-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Craven Raven", "Well, of course I don't <em>eat</em> the stuff myself. I know better than to — err, never mind.", '',
						"The Bad Luck Duck", "Hmm.", ''
					);
				});
			});
			$("#q2-4").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Craven Raven", "Awk! I— I—", '',
						"Investigator", "Yes?", '',
						"The Craven Raven", "I don't know nothin', I swear! Caw!", ''
					);
				});
			});
			$("#q2-5").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Craven Raven", "C-caw?", '',
						"Investigator", "...", '',
						"The Craven Raven", "I-I...", '',
						"Investigator", "...", '',
						"The Craven Raven", "F-fine! I confess! Me and the Bipolar Bear had a business partnership, alright? He grew the goods, I found the customers and collected payments! I was just a middleman! I never touched the junk, I s-swear!", '',
						"Investigator", "...", '',
						"The Craven Raven", "O-okay, I can see you're a real tough sell. M-maybe he'd found out that I was skimming a bit extra off the top, and we had a bit of a shouting match today. S-so what?! I didn't kill him, I swear!", 'clue8',
						"Investigator", "...", '',
						"The Craven Raven", "Look, just say something, will you?", '',
						"Investigator", "Thank you very much for your help, Mr. Raven.", 'suspect2',
						"The Bad Luck Duck", "Ha! We quacked him like an egg.", ''
					);
				});
				clue8 = true;
				suspect2 = true;
			});
		});

		$("#talkto-elephant").click(function(){
			$("#convo-characters").append("<div id='duck' class='character'></div><div id='investigator' class='character'></div><div id='elephant' class='character'></div>");
			$("#convo-characters").fadeIn();
			dialogue("The Irrelevant Elephant", "Hello, good officers. How may I help you today?", '');
			interrogation(
				"q3-1", "Before we start official questioning, let's talk about that hat.",
				"q3-2", "How did you know The Bipolar Bear?",
				"q3-3", "Can you tell us more about this electricity bill?",
				"q3-4", "(Coax) Help us out, Mr. Elephant. Your testimony could be crucial.",
				"q3-5", "(Bluff) I find it very hard to believe you didn't know about The Bipolar Bear's grow op.",
				"end-interrogation", "I think we're done here."
			);
			if (suspect3 && clue9) {
				$("#q3-1,#q3-2,#q3-3,#q3-4,#q3-5").addClass('questioned');
			}
			$("#q3-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Irrelevant Elephant", "You like it? I bought it on fleaBay.", '',
						"The Bad Luck Duck", "I'd love one for myself, but, um, I'm wondering why you wear it.", '',
						"The Irrelevant Elephant", "What do you mean? It keeps the sun out of my eyes.", ''
					);
				});
			});
			$("#q3-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Irrelevant Elephant", "He rented the apartment from me.", '',
						"Investigator", "Don't tell me. You found him on Croakslist.", '',
						"The Irrelevant Elephant", "Whoa! You really are expert investigators.", '',
						"Investigator", "Did you know The Bipolar Bear was growing catnip in his apartment?", '',
						"The Irrelevant Elephant", "Of course not. I was furious when I found out that fact. He'd just signed a twelve month lease, too!", '',
						"Investigator", "How would you otherwise describe The Bipolar Bear as a tenant?", '',
						"The Irrelevant Elephant", "Oh, awful. I'd run his background check, so I suppose I should have known better. But you know how it is, detectives. Times are hard, money's tight, and the real estate market isn't great around here. It just makes me so angry how unfair life is sometimes, you know?", ''
					);
				});
			});
			$("#q3-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Irrelevant Elephant", "I— Where did you find that?", '',
						"Investigator", "In his basement.", '',
						"The Irrelevant Elephant", "I'm not sure how you got ahold of that. The electricity bills by all rights go through me.", '',
						"Investigator", "Oh? Electricity is included in the rent?", '',
						"The Irrelevant Elephant", "Like I said, times are hard right now. Sometimes you do what you have to do to attract tenants.", 'clue9'
					);
				});
				clue9 = true;
			});
			$("#q3-4").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Irrelevant Elephant", "Oh, well, as long as I can give an anonymous testimony... as a matter of fact, I let myself in to fix the plumbing in the bathroom. I caught The Craven Raven just as he was leaving. He looked real upset about something. After I was done, I locked the door behind me. That was when I thought I saw The Crabby Tabby skulking around in the bushes.", '',
						"Investigator", "That's very helpful. Thank you, Mr. Elephant.", 'suspect3'
					);
				});
				suspect3 = true;
			});
			$("#q3-5").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Irrelevant Elephant", "I don't like the tone of your voice, mister.", '',
						"Investigator", "Sir, please calm down.", '',
						"The Irrelevant Elephant", "Don't ask me to calm down! I AM CALM!", '',
						"Investigator", "...", ''
					);
				});
			});
		});

		$("#talkto-tabby").click(function(){
			$("#convo-characters").append("<div id='duck' class='character'></div><div id='investigator' class='character'></div><div id='tabby' class='character'></div>");
			$("#convo-characters").fadeIn();
			conversation(
				"The Crabby Tabby", "This is a waste of my time. I don't understand how you can detain me like this for no reason.", ''
			);
			interrogation(
				"q4-1", "You bought catnip from The Bipolar Bear, didn't you?",
				"q4-2", "Give us an account of your movements all day.",
				"q4-3", "What can you tell us about these texts on The Bipolar Bear's phone?",
				"q4-4", "(Coax) Tell us the truth. We might be able to get you into a witness protection program.",
				"q4-5", "(Bluff) Look, we have evidence proving you were there on the scene of crime.",
				"end-interrogation", "We'll let you know if we have more questions."
			);
			if (suspect4 && clue10) {
				$("#q4-1,#q4-2,#q4-3,#q4-4,#q4-5").addClass('questioned');
			}
			$("#q4-1").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Crabby Tabby", "Hey man, it's medicinal. I have a prescription.", '',
						"Investigator", "How long have you been buying catnip from the deceased?", '',
						"The Crabby Tabby", "About a year now, I suppose.", '',
						"The Bad Luck Duck", "Out of curiosity, did you know he owned a gun?", '',
						"The Crabby Tabby", "I hadn't the least idea. I'm not close friends with him, or anything. Sorry.", ''
					);
				});
			});
			$("#q4-2").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Crabby Tabby", "Fine. I went to the store at around ten in the morning. Came back at eleven, cooked lunch. Sat around and posted vitriolic comments on EweTube and other internet forums for a few hours. At three, I left to go see The Bipolar Bear to complain and ask for a refund.", '',
						"Investigator", "You actually saw the deceased at this point?", '',
						"The Crabby Tabby", "N-no. I rang the doorbell several times, and there wasn't any reply. After five minutes of waiting, I just left and went back home.", '',
						"The Bad Luck Duck", "And after that?", '',
						"The Crabby Tabby", "I watched Netflocks all day until I got a call asking me to come to the station.", 'suspect4'
					);
				});
				suspect4 = true;
			});
			$("#q4-3").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Crabby Tabby", "What do you want me to say? He gave me low quality merchandise. I demanded a refund. It was a simple business transaction.", '',
						"Investigator", "You seemed pretty upset about it, though.", '',
						"The Crabby Tabby", "Like I said, this stuff is medicinal, alright?", '',
						"The Bad Luck Duck", "Are you always this angry about things?", '',
						"The Crabby Tabby", "Look, I type in all caps because it's easier to read, okay?", ''
					);
				});
			});
			$("#q4-4").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Crabby Tabby", "I've already told you everything I know. Bribery won't help you here.", '',
						"The Bad Luck Duck", "Well, it was worth a shot.", ''
					);
				});
			});
			$("#q4-5").click(function(){
				$(this).addClass('questioned');
				$('#interrogation').fadeOut(400,function() {
					conversation(
						"The Crabby Tabby", "W-well, why didn't you say so in the first place? Alright, fine. After ringing the doorbell a dozen times, I just let myself in. The door wasn't locked or anything.", '',
						"The Bad Luck Duck", "And?...", '',
						"The Crabby Tabby", "Look, I'm telling the truth this time. He was already dead when I walked in.", '',
						"Investigator", "What did you do at that point?", '',
						"The Crabby Tabby", "I... ugh, fine. I went through his wallet and took my money back. It wasn't stealing, right? I could've taken all of it if I wanted!", '',
						"The Bad Luck Duck", "Actually, that's still stea—", '',
						"Investigator", "Thank you for your testimony, sir.", 'clue10'
					);
				});
				clue10 = true;
			});
		});

		/* Start Act 3 */
		$(document).on("click", "#end-interrogation", function(){
			// Set a 500ms timeout on the act transitions to allow the previous dialogue/characters to fade out smoothly
			if (!act3checkpoint && suspect1 && suspect2 && suspect3 && suspect4 && clue7 && clue8 && clue9 && clue10) {
				setTimeout(act3transition, 500)
			}
		});
	}

	/* Act 3 Transition */
	function act3transition() {
		act3checkpoint = true;
		$("#convo-characters").append("<div id='dogtective' class='character'></div><div id='duck' class='character'></div><div id='investigator' class='character'></div>");
		$("#convo-characters").fadeIn(800);
		conversation(
			"Investigator", "Clear as mud. At least one of them — or maybe all of them — is lying.", '',
			"The Bad Luck Duck", "Y'know, I'm starting to think detective work isn't all it's quacked up to be.", '',
			"Investigator", "The Bad Luck Duck, do you know you keep saying quack instead of crack?", '',
			"The Bad Luck Duck", "What? What are you talking about?", '',
			"Investigator", "I just wasn't sure if you were aware—", '',
			"The Bad Luck Duck", "Are you sure you're not going quackers, Investigator?", '',
			"Investigator", "I... I think I need a drink.", '',
			"Dogtective", "Focus, Investigator! We need you to find the murderer.", '',
			"Investigator", "Yes, yes, of course. Dogtective, have the suspects' background checks come in?", '',
			"Dogtective", "Yessir.", '',
			"Investigator", "Hmm... yes, these confirm my suspicions perfectly. But, as usual, I like to let my sidekicks show me up every once in a while. The Bad Luck Duck, would you like to do the honors of quacking — I mean, CRACKING the case?", '',
			"Are you ready to accuse the murderer?", "<a id='act2-exit-confirm'>A: I was born ready!</a> <a id='act2-accuse-toggle'>A: Maybe I should interrogate the suspects one more time.</a>", 'act3checkpoint'
		);
		$("#act2").prepend("<div id='accuse-murderer' class='character'></div>");
		$("#act2-exit-confirm, #accuse-murderer").one("click",function() {
			$("#bgmusic").animate({volume: 0}, 800);
			$("#act2").fadeOut(500, function(){
				$("#act2").remove();
				act3();
			});
		});
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
		$("#wrapper").prepend("<div id='act3' class='background'></div>");
		$("#act3").append("<div id='talkto-siamese' class='accuse'></div>");
		$("#act3").append("<div id='talkto-raven' class='accuse'></div>");
		$("#act3").append("<div id='talkto-elephant' class='accuse'></div>");
		$("#act3").append("<div id='talkto-tabby' class='accuse'></div>");
		$("#act3").fadeIn(1000);

		$("#talkto-siamese,#talkto-raven,#talkto-elephant,#talkto-tabby").click(function(){
			$(this).toggleClass("selected");
		});
		$("#act3").append("<div id='accuse-murderer' class='accuse' style='display: block;'></div>");
		$("#accuse-murderer").click(function(){
			$("#dialogue").fadeIn();
			if ($("#talkto-elephant").hasClass("selected") && !$("#talkto-siamese").hasClass("selected") && !$("#talkto-raven").hasClass("selected") && !$("#talkto-tabby").hasClass("selected")) {
				dramaticDialogue("endright", "Investigator", "Good intuition! Let's break it down...", ["investigator"]);
			} else if (!$("#talkto-elephant").hasClass("selected") && !$("#talkto-siamese").hasClass("selected") && !$("#talkto-raven").hasClass("selected") && !$("#talkto-tabby").hasClass("selected")) {
				dramaticDialogue("endempty", "Investigator", "It definitely wasn't a suicide, The Bad Luck Duck. You have to choose a murderer.", ["investigator"]);
			} else {
				dramaticDialogue("endwrong", "Investigator", "Not a bad try, The Bad Luck Duck. At first glance, they all seem plausibly guilty.", ["investigator"]);
			}
		});

		$(document).on("click", "#endright, #endwrong", function(){
			$("#accuse-murderer").hide();
			$(".accuse").removeClass("selected").unbind("click");
			restOfAct3();
		});
	}
	function restOfAct3() {

		dramaticDialogue("end3", "Investigator", "First, we can wash out The Sleazy Siameasy. She was never actually at the scene of the crime, as confirmed by our interrogation and witness testimonies. Also, her motive was fairly weak.", ["investigator"]);
		dramaticDialogue("end4", "The Bad Luck Duck", "People kill for love all the time!", ["duck"]);
		dramaticDialogue("end5", "Investigator", "Yes, but the Siameasy is far too careful and mercenary about emotion to let it rule her.", ["investigator"]);
		dramaticDialogue("end6", "Investigator", "Next, we can rule out The Craven Raven. His personality type is conniving enough to steal, but far too cowardly to attempt murder.", ["investigator"]);
		dramaticDialogue("end7", "Dogtective", "Even if he was caught in the act?", ["dogtective"]);
		dramaticDialogue("end8", "The Real Investigator", "He would have been far more likely to turn tail and run — which it sounds like he did — than to retaliate. Fight or flight... and he <em>is</em> a bird.", ["investigator"]);
		dramaticDialogue("end9", "The Bad Luck Duck", "I resent the species stereotyping, Investigator.", ["duck"]);
		dramaticDialogue("end10", "Investigator", "Our final two suspects had the strongest motivators of all...", ["investigator"]);
		dramaticDialogue("end11", "Investigator", "Money!", ["investigator"]);
		dramaticDialogue("end12", "Investigator", "At first, I almost ruled out The Irrelevant Elephant. He seemed an innocent onlooker, a victim of a bad tenant and Croakslist deal. And The Crabby Tabby struck me as particularly cold-blooded. It takes a certain single-minded indifference to rob a dead man.", ["investigator"]);
		dramaticDialogue("end13", "Dogtective", "But?", ["dogtective"]);
		dramaticDialogue("end14", "Investigator", "But the more The Irrelevant Elephant talked, the more suspicious I got. He was already in financial tight waters, and now he had to foot an unusually large electricity bill. I'm sure he finally got fed up, and made his way down to confront The Bipolar Bear.", ["investigator"]);
		dramaticDialogue("end15", "Investigator", "Upon finding the grow op, he was incensed. In a fit of rage, he used the victim's own gun against him, leaving no fingerprints — after all, he was using his trunk! After realizing his crime, he clumsily tried to frame the scene as a suicide.", ["investigator"]);
		dramaticDialogue("end16", "The Bad Luck Duck", "B-but... why not just evict him?!", ["duck"]);
		dramaticDialogue("end17", "Investigator", "As you might have seen, The Irrelevant Elephant has a history of terrible anger management. What if I told you that the medication we found at the scene of the crime was his, not The Bipolar Bear's?", ["investigator"]);
		dramaticDialogue("end18", "The Bad Luck Duck", "Whaaa!?", ["duck","dogtective"]);
		dramaticDialogue("end19", "Investigator", "As you noted previously, the dosage in those pills were far too high for a bear. But they would have been high enough... for an elephant.", ["investigator"]);
		dramaticDialogue("end20", "Dogtective", "Alright, Investigator, you've convinced me. Let's go in and make the arrest.", ["dogtective"]);
		dramaticDialogue("end21", "Dogtective", "The Irrelevant Elephant, you have the right to remain silent —", ["dogtective"]);
		dramaticDialogue("end22", "The Irrelevant Elephant", "NOOO! I WON'T LET YOU LOCK ME UP!", ["elephant"]);
		dramaticDialogue("end23", "Dogtective", "We need backup! The elephant is resisting arrest! I repeat, the elephant is resisting arrest!", ["dogtective"]);
		dramaticDialogue("end24", "The Bad Luck Duck", "H-help! He's coming my way!", ["duck"]);
		dramaticDialogue("end25", "The Irrelevant Elephant", "IF I'M GOING DOWN, I'LL TAKE YOU WITH ME!", ["elephant"]);
		dramaticDialogue("end26", "The Bad Luck Duck", "<strong>QUACK!</strong>", ["duck","elephant"]);
		dramaticDialogue("end27", "Investigator", "The Bad Luck Duck! He's... he's been trampled flat!", ["investigator"]);
		dramaticDialogue("end28", "Dogtective", "Men! Apprehend this murderer!", ["dogtective"]);
		dramaticDialogue("end29", "Investigator", "I'll see you get life for this, you madman!", ["investigator","elephant"]);
		dramaticDialogue("end30", "Dogtective", "I'm so sorry, Investigator. I can't believe we didn't see this coming.", ["dogtective"]);
		dramaticDialogue("end31", "Investigator", "It's not your fault, Dogtective.", ["investigator"]);
		dramaticDialogue("end32", "Investigator", "Perhaps we just didn't want to acknowledge...", ["investigator"]);
		dramaticDialogue("theend", "Investigator", "...the elephant in the room.", ["investigator"]);

		$("#dialogue").prepend("<div id='dramatic-backdrop'></div>");

		$(document).on("click", "#theend", function(){
			$("#bgmusic").animate({volume: 0}, 3000);
			$("#act3").fadeOut(3000, function(){
				$("#act3,#dramatic-backdrop").remove();
				credits();
			});
		});
	}

	/* Roll Credits */
	function credits() {
		$("#bgmusic").attr("src", "../shared_assets/music/act1.mp3");
		if (sound == true) { $("#bgmusic").animate({volume: 0.5}, 200); }
		$("#wrapper").prepend("<div id='credits' class='background'></div>");
		$("#credits").append("<div id='audio-credits' class='accuse'><a href='http://opengameart.org/content/a-la-poursuite-dune-ombre-du-pass%C3%A9' target='_blank'>Dogers &mdash; A la poursuite d'une ombre du passé</a> <br><br> <a href='http://opengameart.org/content/the-plot-thickens' target='_blank'>el-corleo &mdash; The Plot Thickens</a></div>");
		$("#credits").append("<div id='special-thanks' class='accuse'>Armangelo<br><br>Jeff's cheesecakes");
		$("#credits").fadeIn(1000);
	}

	/* Start the game */
	if (window.canplay) {
		mainmenu();
	}
});