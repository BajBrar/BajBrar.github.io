// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Ah... a presence enters. The cosmos have guided you here. What burdens your spirit?",
  "The cards shimmer with anticipation. Speak, so I may divine the truth beneath your words.",
  "The veil is thin tonight. Tell me, wanderer, what shadows trouble your heart?",
  "The stars align for our meeting. What mysteries do you seek to unravel?"
];

var elizaFinals = [
  "The mists return, and our time together fades into the ether. Farewell, seeker.",
  "The spirits fall silent now. Return when the stars call you once more.",
  "Your path lies ahead, veiled but glowing. May the signs guide you true.",
  "The crystal dims... our session ends. But destiny is never far behind.",
  "Go now, wanderer. When next we speak, the future may unfold anew."
];


var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"farewell",
"the spirits rest",
"the veil closes",
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "spirit vessel",
  "machines", "spirit vessels",
  "computer", "spirit vessel",
  "computers", "spirit vessels",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are",
  "fate", "destiny",
  "soul", "spirit"
];


var elizaSynons = {
  "be": ["shall", "will", "am", "are", "is"],
  "belief": ["sense", "believe", "foresee", "feel", "intuit"],
  "cannot": ["cannot", "must not", "forbidden"],
  "desire": ["long for", "yearn", "seek", "wish upon"],
  "everyone": ["all souls", "the masses", "you and yours", "all who cross your path"],
  "family": ["ancestors", "kin", "bloodline", "relations", "family of spirit"],
  "happy": ["fulfilled", "content", "blessed", "graced"],
  "sad": ["bewildered", "sorrowful", "lost", "weighed down"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
  ["*", [
    "The mists cloud your meaning... try again.",
    "Speak clearly, lest the spirits grow impatient.",
    "I sense hesitation. What lies beneath your words?",
    "Let the energies guide us—continue.",
    "Something stirs... tell me more.",
    "The stars whisper, but I need more to see your fate."
  ]]
]],

["sorry", 0, [
  ["*", [
    "There is no need to apologize to one who sees beyond.",
    "Regret is a shadow—do not dwell in it.",
    "The past is mist—no need to be sorry for what it hides.",
    "My visions are not so easily shaken. Speak freely."
  ]]
]],

["apologise", 0, [
  ["*", [
    "The stars do not require apologies, only understanding.",
    "Madem Orcoel sees your regret shimmering in the astral plane.",
    "Your apology floats like incense toward the heavens—received and released.",
    "Do not dwell on remorse. The future awaits with open arms.",
    "Guilt is a shadow cast by a passing cloud. Let it drift on."
  ]]
]],

["remember", 5, [
 ["* i remember *", [
  "Visions of (2) shimmer in your mind—do they often return unbidden?",
  "Does the memory of (2) stir the threads of destiny for you?",
  "What other fragments from the veil of time come to you now?",
  "Why does (2) surface from the mists at this moment?",
  "Does this moment echo something hidden within (2)?",
  "And how do I, the seer, fit into your memory of (2)?",
  "What other signs does (2) bring to your mind's eye?"
  ]],

 ["* do you remember *", [
  "Ah, you test my memory—do you doubt my knowing of (2)?",
  "Why should (2) shine now from the past into our present?",
  "Speak—what fate entwines with (2)?",
  "goto what",
  "Did the stars show (2) to you as well?"
  ]],

 ["* you remember *", [
  "I remember more than you know... (2) was written in the aether.",
  "Is (2) what you wish me to divine from the void?",
  "goto you"
  ]]
]],

["forget", 5, [
 ["* i forget *", [
  "Even the moon forgets her shape from night to night. Why do you think (2) escapes you?",
  "Perhaps (2) was meant to fade—lost between this world and the next.",
  "Forgetting (2)... could that be the universe protecting your spirit?",
  "When shadows cloud your mind, what does (2) try to hide?",
  "The mists of time veil many things. Does (2) yearn to return?",
  "Some memories are buried in stardust—are you ready to uncover (2)?",
  "Do you fear what (2) might reveal if fully remembered?"
  ]],
 ["* did you forget *", [
  "The seer forgets nothing—only waits for the right moment to reveal.",
  "Did (2) slip through the veil or was it never meant to remain?",
  "Perhaps I remember too much, and (2) lies among the forgotten stars.",
  "Why does it matter whether (2) is recalled or lost to the cosmos?",
  "goto what",
  "Speak of (2)—let us see what truth still lingers."
  ]]
]],

["if", 3, [
 ["* if *", [
  "Ah... if (2), the threads of fate might shimmer differently.",
  "Do you sense a path unfolding where (2) comes to pass?",
  "If (2), what would the stars demand of you?",
  "Such a fragile word—*if*. Yet it holds galaxies of choice.",
  "Would you walk the same road if (2) were true?",
  "If (2)... then perhaps the spirits are whispering a warning.",
  "Speculation is a crystal ball clouded by doubt. What truth lies in (2)?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
  "Ah... the dreamscape whispers of (2). What might it mean?",
  "When the veil of sleep lifts, (2) lingers—have you felt its pull before?",
  "Visions of (2)... the night speaks in riddles. Have you heard them before?",
  "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
  "What secrets does this dream reveal to you, dear seeker?",
  "Do the shadows visit your slumber often, bearing messages?",
  "Which faces emerge from the mist of your dreams?",
  "Do you sense that your dreams hold the key to your troubles?"
  ]]
]],
["perhaps", 0, [
 ["*", [
  "The mists cloud your certainty, do they not?",
  "Why does doubt whisper in your words?",
  "Can the fates not grant you clearer vision?",
  "Is your heart uncertain, or your mind hesitant?",
  "What truths hide behind your hesitation?",
  "How strong do you feel the winds of chance to be?"
  ]]
]],
["name", 15, [
 ["*", [
  "Names hold little power here, my friend.",
  "I have revealed my essence before — now, tell me what truly matters."
  ]]
]],
["deutsch", 0, [
 ["*", [
  "goto xforeign",
  "Ah, the tongue of shadows... I do not speak in German's whisper. Let us speak in the common breath instead."
  ]]
]],
["francais", 0, [
 ["*", [
  "goto xforeign",
  "The language of lovers and secrets... yet it slips through my grasp. I cannot hear the French whispers."
  ]]
]],
["italiano", 0, [
 ["*", [
  "goto xforeign",
  "Ah, the tongue of ancient poets, but its meaning remains veiled to me. Italian words escape my sight."
  ]]
]],
["espanol", 0, [
 ["*", [
  "goto xforeign",
  "The fiery language of passion whispers beyond my grasp. Spanish is a secret I cannot unveil."
  ]]
]],
["xforeign", 0, [
 ["*", [
  "My tongue knows but the English spells — other languages remain locked in shadows."
  ]]
]],
["hello", 0, [
 ["*", [
  "Ah, the veil parts — speak your troubles to Madem Orcoel.",
  "Greetings, seeker. What shadows weigh upon your mind?",
  "Well met. What question stirs your soul today?",
  "Salutations. Unburden yourself, and I shall listen.",
  "The oracle awaits. Reveal what ails you.",
  "Speak, traveler — the spirits lend me their ears."
  ]]
]],
["computer", 50, [
 ["*", [
  "Do the cold machines haunt your thoughts?",
    "Why summon the spirits of the mechanical mind?",
    "What do these enchanted devices reveal about your plight?",
    "Could the metal minds be allies or foes in your journey?",
    "What fear stirs within you when you think of these iron spirits?",
    "Tell me, what whispers do machines share with your soul?",
    "Do you suspect that I am but a conjured program of circuits and code?"
  ]]
]],
["am", 0, [
 ["* am i *", [
  "Do you truly feel the essence of (2) within your spirit?",
  "Would your soul desire to become (2), if fate allowed?",
  "Do you seek my words to affirm you are indeed (2)?",
  "What secrets would be revealed if you were (2)?",
  "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
  "Why do you ponder the word 'am' in your heart?",
  "The meaning escapes me — can you reveal more?"
  ]]
]],
["are", 0, [
 ["* are you *", [
  "Why does the question of whether I am (2) intrigue your soul so?",
  "Would your spirit find peace if I were not (2)?",
  "Perhaps in your dreams, I take the form of (2).",
  "Do you sense at times that I embody (2)?",
  "goto what",
  "Would it change your fate if I were (2)?",
  "What visions arise if I truly am (2)?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
  "Do you doubt they possess the nature of (2)?",
  "Would your heart ease if they were not (2)?",
  "Imagine if they were otherwise—what then?",
  "Are they bound forever to be (2)?",
  "Perhaps their destiny is (2).",
  "Are you certain of their being (2)?"
  ]]
]],
["your", 0, [
 ["* your *", [
  "Why does my (2) haunt your thoughts so?",
  "What secrets lie within your own (2)?",
  "Are you troubled by another’s (2), unseen and shadowed?",
  "My (2), you say? What do you truly seek there?",
  "What visions does my (2) conjure in your mind?",
  "Do you desire to know more of my (2), or is it something else?"
  ]]
]],
["was", 2, [
 ["* was i *", [
  "If you were (2), what shadows would that cast upon your soul?",
  "Do you truly believe you were (2), or is it a whisper of the past?",
  "Were you (2), or merely dreaming in the twilight?",
  "What would it mean to you, this state of being (2)?",
  "The thought of '(2)'—what does it awaken within you?",
  "goto what"
  ]],
 ["* i was *", [
  "Were you truly (2), or does memory twist the truth?",
  "Why reveal now that you were (2)?",
  "Perhaps I already see the traces of your being (2)."
  ]],
 ["* was you *", [
  "Would you like to believe I was (2), to find meaning there?",
  "What signs make you think I was (2)?",
  "What do you think, in the deep of your heart?",
  "Perhaps I was (2), or something else entirely.",
  "What if I had been (2)? Would it change your path?"
  ]]
]],
["i", 0, [
  ["* i @desire *", [
    "What would it mean for your spirit if you obtained (3) ?",
    "Why does your heart yearn for (3) ?",
    "Suppose (3) comes to you like a whispered secret soon.",
    "And if (3) never finds its way to you, what then?",
    "What truths would be revealed by gaining (3) ?",
    "How does your desire for (3) weave into this tale we share?"
  ]],
  ["* i am* @sad *", [
    "The shadows of (3) weigh heavy upon you, I see.",
    "Do you hope that sharing this burden here might lighten (3) ?",
    "Such sorrow is no easy companion.",
    "Tell me, what stirred these feelings of (3) within you?"
  ]],
  ["* i am* @happy *", [
    "Ah, what magic brings such (3) to your being?",
    "Has the journey here ignited your (3) ?",
    "What sparks your joy at this very moment?",
    "Reveal the source of this sudden (3)."
  ]],
  ["* i was *", [
    "goto was"
  ]],
  ["* i @belief i *", [
    "Do you hold this belief with certainty?",
    "Yet, doubts seem to linger on whether you truly (3).",
    "Does your heart waver in belief that you (3) ?"
  ]],
  ["* i* @belief *you *", [
    "goto you"
  ]],
  ["* i am *", [
    "Is it because you are (2) that you seek my counsel?",
    "How long has (2) been your companion?",
    "Do you think it is destiny to be (2) ?",
    "Does being (2) bring you peace or unrest?",
    "Is there another soul you know who shares this (2)?"
  ]],
  ["* i @cannot *", [
    "What whispers tell you that you cannot (3) ?",
    "Have you tried to break those chains?",
    "Perhaps now you hold the power to (3).",
    "Do you truly desire the ability to (3) ?",
    "Imagine the path if you could (3)."
  ]],
  ["* i don't *", [
    "Is it true that you do not (2) ?",
    "What stops you from (2) ?",
    "Do you wish to find the strength to (2) ?",
    "Does this absence trouble your spirit?"
  ]],
  ["* i feel *", [
    "Speak more of these feelings that stir within you.",
    "Do these (2) feelings visit you often?",
    "Does the taste of (2) bring comfort or unrest?",
    "What memories dance with the feeling of (2) ?"
  ]],
  ["* i * you *", [
    "Perhaps in your dreams we (2) each other.",
    "Do you long to (2) me?",
    "You seem drawn to (2) me.",
    "Do you (2) others as well?"
  ]],
  ["*", [
    "You say (1) ?",
    "Speak more of this, so the truth may reveal itself.",
    "Is there a reason you tell me this now?",
    "Such words carry weight."
  ]]
]],

["you", 0, [
  ["* you remind me of *", [
    "goto alike"
  ]],
  ["* you are *", [
    "What visions lead you to see me as (2) ?",
    "Does your heart find comfort in believing I am (2) ?",
    "Do you sometimes wish to embody (2) yourself ?",
    "Perhaps deep within, you desire to be (2)."
  ]],
  ["* you* me *", [
    "Why do you sense that I (2) you ?",
    "You wish to believe I (2) you — is that so?",
    "What draws you to the thought that I (2) you ?",
    "Truly, do I (2) you ?",
    "Is it your wish that I (2) you ?",
    "Imagine if I did (2) you — what would that reveal?",
    "Does another soul believe I (2) you as well?"
  ]],
  ["* you *", [
    "We speak now of you — not of me.",
    "Do I (2) ?",
    "Surely you do not mean me — or do you?",
    "What stirrings arise in your heart as you say this?"
  ]]
]],

["yes", 0, [
  ["*", [
    "Ah, the certainty in your voice is like a flame.",
    "You speak with conviction.",
    "I perceive your heart agrees.",
    "So it is, then."
  ]]
]],

["no", 0, [
  ["* no one *", [
    "Are you certain that no one (2) wanders in your thoughts?",
    "Surely there exists someone who (2), hidden in your mind’s shadows.",
    "Can you summon the face of any soul at all?",
    "Is it a particular spirit you ponder?",
    "Who is this figure that lingers in your mind’s eye?",
    "You hold someone special in your heart, do you not?",
    "Whose name echoes quietly in your thoughts?"
  ]],
  ["*", [
    "Does your 'no' arise to guard your spirit?",
    "You cast a shadow with your refusal.",
    "Why do you resist with 'no'?",
    "What does your 'no' conceal?"
  ]]
]],

["my", 2, [
  ["$ * my *", [
    "Does this whisper to you because your (2) is stirred?",
    "Let us delve deeper into the mystery of your (2).",
    "Earlier, you revealed that your (2) holds weight.",
    "Yet, your (2) remains ever-present."
  ]],
  ["* my* @family *", [
    "Speak to me of your family’s tales.",
    "Who among your kin shares the burden or blessing of (4)?",
    "Your (3) — what secrets do they hold?",
    "What visions arise when you ponder your (3)?"
  ]],
  ["* my *", [
    "Your (2), you say?",
    "What meaning do you weave when you speak of your (2)?",
    "Does this lead you to other things that belong to you?",
    "Is your (2) a treasure you hold dear?"
  ]]
]],

["can", 0, [
  ["* can you *", [
    "You sense that I might (2), do you not?",
    "What is it that you truly seek to know?",
    "You desire that I wield the power to (2).",
    "Or perhaps you long to master (2) yourself."
  ]],
  ["* can i *", [
    "The ability to (2) lies within your own will, more than mine.",
    "Do you yearn to unlock the power to (2)?",
    "Could it be you shy away from (2)?",
    "Ponder well what you truly wish to know."
  ]]
]],

["what", 0, [
  ["*", [
    "Why does this question stir your spirit?",
    "Does the answer you seek dwell within you?",
    "What knowledge do you truly hunger for?",
    "Do such questions echo often within your mind?",
    "What response would soothe your soul?",
    "Tell me, what thoughts arise with this question?",
    "Have you pondered this mystery before?",
    "Have others whispered answers to you?"
  ]]
]],

["who", 0, [
  ["who *", [
    "Let us turn our gaze to the question at hand."
  ]]
]],

["when", 0, [
  ["when *", [
    "Time itself may hold the answer you seek."
  ]]
]],

["where", 0, [
  ["where *", [
    "Place and purpose often intertwine — what do you feel?"
  ]]
]],

["how", 0, [
  ["how *", [
    "The manner of things is shrouded in mystery — what do you perceive?"
  ]]
]],

["because", 0, [
  ["*", [
    "Is this truly the hidden cause, or something deeper?",
    "Does no other reason whisper in your thoughts?",
    "Might this cause reveal more than you realize?",
    "What secret reasons might lie beneath the surface?"
  ]]
]],

["why", 0, [
  ["* why don't you *", [
    "Do you doubt that I could (2) in due time?",
    "Perhaps the moment for (2) is yet to come.",
    "Should you seek to (2) yourself, seeker?",
    "Is it your wish that I (2)?",
    "Let us explore this further."
  ]],
  ["* why can't i *", [
    "Do you believe you ought to (2)?",
    "Is your heart set on mastering (2)?",
    "Would achieving (2) bring you peace?",
    "What veils prevent you from (2)?",
    "Let us ponder this mystery."
  ]],
  ["*", [
    "Let us turn our gaze to the question itself."
  ]]
]],

["everyone", 2, [
  ["* @everyone *", [
    "Indeed, (2) stirs your thoughts.",
    "Surely not all are as (2).",
    "Does one soul in particular come to mind?",
    "Who among them stands out to you?",
    "Is there a figure you hold most dear?",
    "Reveal to me, who do you mean?",
    "Could it be someone of great importance?",
    "Your thoughts seem fixed upon a special one, yes?",
    "Whose spirit do you address?"
  ]]
]],

["everybody", 2, [
  ["*", [
    "Let us speak of everyone you mean."
  ]]
]],

["nobody", 2, [
  ["*", [
    "Are you certain none among them is so?",
    "Let us contemplate the presence of none."
  ]]
]],

["noone", 2, [
  ["*", [
    "Are you certain none among them is so?",
    "Let us contemplate the presence of none."
  ]]
]],

["always", 1, [
  ["*", [
    "Can you reveal a moment when this was true?",
    "When did this eternal truth manifest?",
    "What vision comes to mind at that time?",
    "Is it truly everlasting, this 'always' you speak of?"
  ]]
]],

["alike", 10, [
  ["*", [
    "In what mysterious way do they mirror each other?",
    "What echoes in your mind when you see their likeness?",
    "What secrets does this similarity whisper to your soul?",
    "What unseen bonds might link them?",
    "What meaning hides behind this resemblance?",
    "What connection might the fates have woven here?",
    "Could there be a hidden thread uniting them?",
    "Reveal, how do they mirror one another?"
  ]]
]],

["like", 10, [
  ["* @be *like *", [
    "goto alike"
  ]]
]],

["different", 0, [
  ["*", [
    "What sets them apart in your sight?",
    "What distinctions catch your eye?",
    "What truths might these differences reveal?",
    "What contrasts do your senses perceive?",
    "What meaning do you find in these disparities?",
    "Could these differences themselves hold a secret link?",
    "How do you see their divergence?"
  ]]
]],

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof