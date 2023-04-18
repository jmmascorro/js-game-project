"use strict";

var lettersBtn = document.querySelectorAll(".letter");
var squaresOfRowOne = document.querySelectorAll(".row_one");
var squaresOfRowTwo = document.querySelectorAll(".row_two");
var squaresOfRowThree = document.querySelectorAll(".row_three");
var squaresOfRowFour = document.querySelectorAll(".row_four");
var squaresOfRowFive = document.querySelectorAll(".row_five");
var enterButton = document.querySelector(".enter");
var backspaceBtn = document.querySelector(".backspace");
var winner = document.querySelector(".p_winner");
var newGameBtn = document.querySelector(".new_game");
var card = document.querySelector(".card");
var closeBtn = document.querySelector(".close_button");
var infoBtn = document.querySelector(".info");
var wrong = document.querySelector(".p_wrong");
var letters = [];
var buttonsClicked = [];
var count = 0;
var count2 = 0;
var count3 = 0;
var guessingWords = ["abet", "abut", "ache", "alit", "ante", "arch", "aver", "avow", "bach", "back", "bade", "bail", "bait", "bake", "bale", "balk", "ball", "band", "bang", "bank", "barb", "bard", "bare", "barf", "bark", "base", "bash", "bask", "bate", "bawl", "bead", "beam", "bean", "bear", "beat", "beef", "been", "beep", "bell", "belt", "bend", "bent", "bias", "bide", "biff", "bike", "bilk", "bill", "bind", "bird", "birl", "birr", "bite", "bitt", "blab", "blat", "bled", "blew", "blob", "blot", "blow", "blub", "blue", "blur", "boat", "bode", "body", "boil", "bolt", "bomb", "bond", "bone", "bong", "bonk", "book", "boom", "boot", "bore", "born", "boss", "bowl", "brag", "bray", "bred", "brew", "brim", "buck", "buff", "bulk", "bull", "bump", "bung", "bunk", "bunt", "buoy", "burl", "burn", "burp", "burr", "bury", "bush", "busk", "buss", "bust", "busy", "butt", "buzz", "caca", "cage", "cake", "calk", "call", "calm", "came", "camp", "cane", "cant", "card", "care", "cart", "case", "cash", "cast", "cave", "cede", "cere", "chap", "char", "chat", "chaw", "chid", "chin", "chip", "chop", "chug", "chum", "cite", "clad", "clam", "clap", "claw", "clew", "clip", "clog", "clop", "clot", "cloy", "club", "clue", "coal", "coat", "coax", "cock", "code", "coif", "coil", "coin", "coke", "comb", "come", "comp", "cone", "conk", "cook", "cool", "coop", "cope", "copy", "cord", "core", "cork", "corn", "cosh", "cost", "cowl", "crab", "cram", "crap", "crew", "crib", "crop", "crow", "cube", "cuff", "cull", "curb", "cure", "curl", "cuss", "dado", "damn", "damp", "dang", "dare", "darn", "dart", "dash", "date", "daub", "dawn", "daze", "deal", "deck", "deed", "deem", "defy", "deke", "demo", "dent", "deny", "dial", "dice", "died", "diet", "dike", "dine", "ding", "disc", "dish", "disk", "diss", "dive", "dock", "doff", "dole", "done", "doom", "dope", "doss", "dote", "dove", "down", "doze", "drag", "draw", "drew", "drip", "drop", "drub", "drug", "drum", "duck", "duel", "dull", "dump", "dung", "dunk", "dupe", "dusk", "dust", "earn", "ease", "echo", "edge", "edit", "emit", "envy", "espy", "etch", "even", "exit", "face", "fade", "fail", "fake", "fall", "fare", "farm", "fart", "fast", "fate", "fawn", "faze", "fear", "feed", "feel", "fell", "felt", "fend", "fess", "fete", "feud", "file", "fill", "film", "find", "fine", "fink", "fire", "firm", "fish", "fist", "fizz", "flag", "flap", "flat", "flaw", "flay", "fled", "flee", "flew", "flex", "flip", "flit", "flog", "flop", "flow", "flub", "flux", "foal", "foam", "foil", "fold", "fond", "fool", "foot", "ford", "fork", "form", "foul", "fowl", "frag", "frap", "fray", "free", "fret", "frit", "fuel", "full", "fume", "fund", "funk", "furl", "fuse", "fuss", "futz", "gain", "gait", "gall", "game", "gang", "gaol", "gape", "garb", "gash", "gasp", "gate", "gave", "gawk", "gawp", "gaze", "gear", "geld", "gibe", "gift", "gild", "gimp", "gird", "give", "glom", "glow", "glue", "glug", "glut", "gnaw", "goad", "golf", "gone", "gong", "goof", "gore", "gown", "grab", "gray", "grew", "grey", "grid", "grin", "grip", "grit", "grow", "grub", "gull", "gulp", "gush", "gust", "gybe", "hack", "hail", "hale", "halt", "hand", "hang", "hare", "hark", "harm", "harp", "hash", "hasp", "hast", "hate", "hath", "haul", "have", "hawk", "haze", "head", "heal", "heap", "hear", "heat", "heed", "heel", "heft", "held", "helm", "help", "herd", "hewn", "hide", "hike", "hill", "hint", "hire", "hiss", "hive", "hoax", "hock", "hold", "hole", "home", "hone", "honk", "hood", "hoof", "hook", "hoop", "hoot", "hope", "horn", "hose", "host", "hove", "howl", "huff", "hulk", "hull", "hump", "hung", "hunt", "hurl", "hurt", "hush", "husk", "hymn", "hype", "idle", "inch", "iron", "itch", "jack", "jade", "jail", "jape", "jazz", "jeer", "jell", "jerk", "jest", "jibe", "jilt", "jinx", "jive", "join", "joke", "jolt", "josh", "juke", "jump", "junk", "kayo", "keel", "keen", "keep", "kept", "kern", "kick", "kill", "kink", "kiss", "kite", "knap", "knew", "knit", "knot", "know", "lace", "lack", "laid", "lain", "lamb", "lame", "land", "lard", "lark", "lash", "last", "laud", "lave", "laze", "lead", "leaf", "leak", "lean", "leap", "leer", "left", "lend", "lent", "levy", "lick", "lift", "like", "lilt", "lime", "limp", "line", "link", "lisp", "list", "live", "load", "loaf", "loan", "lock", "loft", "loll", "long", "look", "loom", "loop", "loot", "lope", "lord", "lose", "lost", "lour", "love", "lube", "luck", "luff", "luge", "lull", "lump", "lure", "lurk", "lust", "made", "mail", "maim", "make", "mark", "mask", "mate", "maul", "meet", "meld", "melt", "mend", "meow", "mess", "miff", "milk", "mime", "mind", "mine", "miss", "moan", "mock", "moor", "moot", "mope", "move", "muck", "muff", "muse", "mush", "must", "mute", "nail", "name", "near", "neck", "need", "nest", "nick", "nock", "nose", "note", "nuke", "numb", "obey", "ogle", "okay", "omen", "omit", "ooze", "open", "oust", "pace", "pack", "page", "pain", "pair", "palm", "pant", "pare", "park", "part", "pass", "pave", "pawn", "peak", "peal", "peck", "peek", "peel", "peep", "peer", "perk", "pick", "pile", "pine", "plan", "plat", "play", "plod", "plop", "plot", "plow", "plug", "pock", "poke", "pool", "pore", "pose", "post", "pour", "pout", "pray", "prim", "prod", "prop", "puff", "pull", "pulp", "pump", "purl", "purr", "push", "putt", "quip", "quit", "quiz", "race", "rage", "raid", "rain", "rake", "rang", "rank", "rant", "rape", "rate", "raze", "read", "ream", "reap", "reef", "reek", "reel", "rein", "rely", "rend", "rent", "rest", "rice", "ride", "rile", "ring", "riot", "rise", "risk", "rive", "roam", "roar", "rock", "rode", "roil", "roll", "romp", "roof", "room", "root", "rope", "rout", "rove", "ruin", "rule", "rush", "rust", "sack", "said", "sail", "sale", "salt", "sass", "sate", "save", "sawn", "scab", "scam", "scan", "scar", "scat", "scud", "scum", "seal", "seam", "seat", "seed", "seek", "seem", "seen", "seep", "sell", "send", "sent", "sewn", "shag", "sham", "shed", "ship", "shit", "shoe", "shoo", "shop", "shot", "show", "shun", "shut", "side", "sift", "sigh", "sign", "sing", "sink", "sire", "site", "size", "skew", "skid", "skim", "skin", "skip", "slab", "slag", "slam", "slap", "slat", "slay", "sled", "slew", "slid", "slim", "slip", "slit", "slog", "slop", "slot", "slow", "slue", "slug", "slum", "slur", "smut", "snag", "snap", "snip", "snow", "snub", "soak", "soap", "soar", "sock", "soil", "sold", "sole", "solo", "sort", "sour", "sown", "spam", "span", "spar", "spat", "spay", "sped", "spew", "spin", "spit", "spot", "spud", "spur", "stab", "stag", "star", "stay", "stem", "step", "stet", "stew", "stir", "stop", "stow", "stub", "stud", "stun", "suck", "suit", "sulk", "sung", "sunk", "surf", "swab", "swam", "swap", "swat", "sway", "swig", "swim", "swob", "swot", "swum", "tack", "tail", "talc", "talk", "tame", "tamp", "tank", "tape", "task", "taxi", "team", "tear", "teem", "tell", "tend", "tent", "term", "test", "text", "thaw", "thin", "thud", "tick", "tide", "tile", "tilt", "time", "ting", "tint", "tire", "toil", "told", "toll", "tone", "took", "tool", "toot", "tope", "tore", "torn", "toss", "tote", "tour", "tout", "tram", "trap", "tree", "trek", "trim", "trip", "trod", "trot", "true", "tube", "tuck", "tune", "turf", "turn", "tusk", "twin", "twit", "type", "undo", "urge", "vamp", "vary", "veer", "veil", "vein", "vend", "vent", "vest", "veto", "vide", "view", "visa", "vise", "void", "vote", "wade", "waft", "wage", "wail", "wait", "wake", "walk", "wall", "wane", "want", "ward", "warm", "warn", "warp", "wash", "waul", "wave", "wawl", "wean", "wear", "weed", "weep", "weld", "well", "welt", "wend", "went", "wept", "were", "wert", "wham", "whap", "whet", "whip", "whir", "whiz", "whop", "will", "wilt", "wine", "wink", "wipe", "wire", "wish", "wist", "wive", "woke", "wolf", "woof", "word", "wore", "work", "worm", "worn", "wove", "wrap", "writ", "xray", "yack", "yank", "yarn", "yaup", "yawn", "yawp", "yean", "yell", "yelp", "yoke", "yowl", "zero", "zest", "zing", "zone", "zonk", "zoom"];
var randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)].toUpperCase();
console.log(randomWord);
closeBtn.addEventListener("click", function () {
  card.style.display = "none";
});
newGameBtn.addEventListener("click", function () {
  randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)].toUpperCase();
  console.log(randomWord);
  letters = [];
  count = 0;
  count2 = 0;
  count3 = 0;
  buttonsClicked = [];
  winner.innerHTML = "";

  for (var i = 0; i < lettersBtn.length; i++) {
    lettersBtn[i].style.backgroundColor = "rgb(98, 97, 97)";
  }

  for (var _i = 0; _i < squaresOfRowOne.length; _i++) {
    squaresOfRowOne[_i].innerHTML = "";
    squaresOfRowOne[_i].style.backgroundColor = "#3e3d3d";
    squaresOfRowOne[_i].style = "border: 2px solid #a8a7a7 !important";
  }

  for (var _i2 = 0; _i2 < squaresOfRowTwo.length; _i2++) {
    squaresOfRowTwo[_i2].innerHTML = "";
    squaresOfRowTwo[_i2].style.backgroundColor = "#3e3d3d";
    squaresOfRowTwo[_i2].style = "border: 2px solid #a8a7a7 !important";
  }

  for (var _i3 = 0; _i3 < squaresOfRowThree.length; _i3++) {
    squaresOfRowThree[_i3].innerHTML = "";
    squaresOfRowThree[_i3].style.backgroundColor = "#3e3d3d";
    squaresOfRowThree[_i3].style = "border: 2px solid #a8a7a7 !important";
  }

  for (var _i4 = 0; _i4 < squaresOfRowFour.length; _i4++) {
    squaresOfRowFour[_i4].innerHTML = "";
    squaresOfRowFour[_i4].style.backgroundColor = "#3e3d3d";
    squaresOfRowFour[_i4].style = "border: 2px solid #a8a7a7 !important";
  }

  for (var _i5 = 0; _i5 < squaresOfRowFive.length; _i5++) {
    squaresOfRowFive[_i5].innerHTML = "";
    squaresOfRowFive[_i5].style.backgroundColor = "#3e3d3d";
    squaresOfRowFive[_i5].style = "border: 2px solid #a8a7a7 !important";
  }
});

var createWord = function createWord(button) {
  var letter = button.innerHTML;
  letters.push(letter);
};

var counter = function counter() {
  count += 1;
};

var displayClickedLetter = function displayClickedLetter() {
  switch (count) {
    case 0:
      squaresOfRowOne[0].innerHTML = letters[0]; // squaresOfRowOne[0].style.border = "2px solid white";

      squaresOfRowOne[0].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      break;

    case 1:
      squaresOfRowOne[1].innerHTML = letters[1]; // squaresOfRowOne[1].style.border = "2px solid white";

      squaresOfRowOne[1].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      break;

    case 2:
      squaresOfRowOne[2].innerHTML = letters[2]; // squaresOfRowOne[2].style.border = "2px solid white";

      squaresOfRowOne[2].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      break;

    case 3:
      squaresOfRowOne[3].innerHTML = letters[3]; // squaresOfRowOne[3].style.border = "2px solid white";

      squaresOfRowOne[3].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      break;

    case 4:
      if (count3 == 1) {
        squaresOfRowTwo[0].innerHTML = letters[0]; // squaresOfRowTwo[0].style.border = "2px solid white";

        squaresOfRowTwo[0].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 5:
      if (count3 == 1) {
        squaresOfRowTwo[1].innerHTML = letters[1]; // squaresOfRowTwo[1].style.border = "2px solid white";

        squaresOfRowTwo[1].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 6:
      if (count3 == 1) {
        squaresOfRowTwo[2].innerHTML = letters[2]; // squaresOfRowTwo[2].style.border = "2px solid white";

        squaresOfRowTwo[2].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 7:
      if (count3 == 1) {
        squaresOfRowTwo[3].innerHTML = letters[3]; // squaresOfRowTwo[3].style.border = "2px solid white";

        squaresOfRowTwo[3].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 8:
      if (count3 == 2) {
        squaresOfRowThree[0].innerHTML = letters[0]; // squaresOfRowThree[0].style.border = "2px solid white";

        squaresOfRowThree[0].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 9:
      if (count3 == 2) {
        squaresOfRowThree[1].innerHTML = letters[1]; // squaresOfRowThree[1].style.border = "2px solid white";

        squaresOfRowThree[1].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 10:
      if (count3 == 2) {
        squaresOfRowThree[2].innerHTML = letters[2]; // squaresOfRowThree[2].style.border = "2px solid white";

        squaresOfRowThree[2].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 11:
      if (count3 == 2) {
        squaresOfRowThree[3].innerHTML = letters[3]; // squaresOfRowThree[3].style.border = "2px solid white";

        squaresOfRowThree[3].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 12:
      if (count3 == 3) {
        squaresOfRowFour[0].innerHTML = letters[0]; // squaresOfRowFour[0].style.border = "2px solid white";

        squaresOfRowFour[0].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 13:
      if (count3 == 3) {
        squaresOfRowFour[1].innerHTML = letters[1]; // squaresOfRowFour[1].style.border = "2px solid white";

        squaresOfRowFour[1].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 14:
      if (count3 == 3) {
        squaresOfRowFour[2].innerHTML = letters[2]; // squaresOfRowFour[2].style.border = "2px solid white";

        squaresOfRowFour[2].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 15:
      if (count3 == 3) {
        squaresOfRowFour[3].innerHTML = letters[3]; // squaresOfRowFour[3].style.border = "2px solid white";

        squaresOfRowFour[3].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 16:
      if (count3 == 4) {
        squaresOfRowFive[0].innerHTML = letters[0]; // squaresOfRowFive[0].style.border = "2px solid white";

        squaresOfRowFive[0].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 17:
      if (count3 == 4) {
        squaresOfRowFive[1].innerHTML = letters[1]; // squaresOfRowFive[1].style.border = "2px solid white";

        squaresOfRowFive[1].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 18:
      if (count3 == 4) {
        squaresOfRowFive[2].innerHTML = letters[2]; // squaresOfRowFive[2].style.border = "2px solid white";

        squaresOfRowFive[2].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      }

      break;

    case 19:
      squaresOfRowFive[3].innerHTML = letters[3]; // squaresOfRowFive[3].style.border = "2px solid white";

      squaresOfRowFive[3].style = "border: 2px solid white; -webkit-box-shadow: 0px 0px 4px #fff; -moz-box-shadow: 0px 0px 4px #fff; box-shadow: 0px 0px 4px #fff;";
      break;
    // default:
    //   console.log("done");
  }
};

var deleteDisplayedLetter = function deleteDisplayedLetter() {
  switch (count) {
    case 1:
      squaresOfRowOne[0].innerHTML = "";
      squaresOfRowOne[0].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 2:
      squaresOfRowOne[1].innerHTML = "";
      squaresOfRowOne[1].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 3:
      squaresOfRowOne[2].innerHTML = "";
      squaresOfRowOne[2].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      console.log(letters);
      break;

    case 4:
      squaresOfRowOne[3].innerHTML = "";
      squaresOfRowOne[3].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      console.log(letters);
      wrong.innerHTML = "";
      break;

    case 5:
      squaresOfRowTwo[0].innerHTML = "";
      squaresOfRowTwo[0].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 6:
      squaresOfRowTwo[1].innerHTML = "";
      squaresOfRowTwo[1].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 7:
      squaresOfRowTwo[2].innerHTML = "";
      squaresOfRowTwo[2].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 8:
      squaresOfRowTwo[3].innerHTML = "";
      squaresOfRowTwo[3].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      wrong.innerHTML = "";
      break;

    case 9:
      squaresOfRowThree[0].innerHTML = "";
      squaresOfRowThree[0].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 10:
      squaresOfRowThree[1].innerHTML = "";
      squaresOfRowThree[1].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 11:
      squaresOfRowThree[2].innerHTML = "";
      squaresOfRowThree[2].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 12:
      squaresOfRowThree[3].innerHTML = "";
      squaresOfRowThree[3].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      wrong.innerHTML = "";
      break;

    case 13:
      squaresOfRowFour[0].innerHTML = "";
      squaresOfRowFour[0].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 14:
      squaresOfRowFour[1].innerHTML = "";
      squaresOfRowFour[1].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 15:
      squaresOfRowFour[2].innerHTML = "";
      squaresOfRowFour[2].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 16:
      squaresOfRowFour[3].innerHTML = "";
      squaresOfRowFour[3].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      wrong.innerHTML = "";
      break;

    case 17:
      squaresOfRowFive[0].innerHTML = "";
      squaresOfRowFive[0].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 18:
      squaresOfRowFive[1].innerHTML = "";
      squaresOfRowFive[1].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 19:
      squaresOfRowFive[2].innerHTML = "";
      squaresOfRowFive[2].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;

    case 20:
      squaresOfRowFive[3].innerHTML = "";
      squaresOfRowFive[3].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      console.log("oops");
      break;

    case 21:
      squaresOfRowFive[3].innerHTML = "";
      squaresOfRowFive[3].style = "border: 2px solid #a8a7a7 !important";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      console.log("oops");

    default:
      squaresOfRowFive[3].innerHTML = ""; // letters.pop();
      // buttonsClicked.pop();
      // count -= 1;

      console.log("oops");
  }
};

backspaceBtn.addEventListener("click", function () {
  if (count == 0 || count == 4 && count3 == 1 || count == 8 && count3 == 2 || count == 12 && count3 == 3 || count == 16 && count3 == 4) {
    console.log("back");
    console.log(count);
    console.log(count3);
  } else {
    deleteDisplayedLetter();
  }
});

var wordChecker = function wordChecker() {
  if (count3 == 0) {
    var guessedWord = letters.toString().replaceAll(",", "");

    for (var i = 0; i < guessedWord.length; i++) {
      count2 += 1;

      for (var j = 0; j < randomWord.length; j++) {
        if (count2 == 1 && randomWord.includes(guessedWord[0]) && guessedWord[i] !== randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          squaresOfRowOne[i].style.transition = "0.8s";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 2 && randomWord.includes(guessedWord[1]) && guessedWord[i] !== randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          squaresOfRowOne[i].style.transition = "0.8s";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 3 && randomWord.includes(guessedWord[2]) && guessedWord[i] !== randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          squaresOfRowOne[i].style.transition = "0.8s";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 4 && randomWord.includes(guessedWord[3]) && guessedWord[i] !== randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          squaresOfRowOne[i].style.transition = "0.8s";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (guessedWord[i] !== randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "#EF0107";
          squaresOfRowOne[i].style.transition = "0.8s";
          buttonsClicked[i].style.backgroundColor = "#EF0107";
        } else if (guessedWord[i] == randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "rgb(24, 199, 24)";
          squaresOfRowOne[i].style.transition = "0.8s";
          buttonsClicked[i].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 1) {
    var _guessedWord = letters.toString().replaceAll(",", "");

    for (var _i6 = 0; _i6 < _guessedWord.length; _i6++) {
      count2 += 1;

      for (var _j = 0; _j < randomWord.length; _j++) {
        if (count2 == 1 && randomWord.includes(_guessedWord[0]) && _guessedWord[_i6] !== randomWord[_i6]) {
          squaresOfRowTwo[_i6].style.backgroundColor = "#FFAC1C";
          squaresOfRowTwo[_i6].style.transition = "0.8s";
          buttonsClicked[_i6].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 2 && randomWord.includes(_guessedWord[1]) && _guessedWord[_i6] !== randomWord[_i6]) {
          squaresOfRowTwo[_i6].style.backgroundColor = "#FFAC1C";
          squaresOfRowTwo[_i6].style.transition = "0.8s";
          buttonsClicked[_i6].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 3 && randomWord.includes(_guessedWord[2]) && _guessedWord[_i6] !== randomWord[_i6]) {
          squaresOfRowTwo[_i6].style.backgroundColor = "#FFAC1C";
          squaresOfRowTwo[_i6].style.transition = "0.8s";
          buttonsClicked[_i6].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 4 && randomWord.includes(_guessedWord[3]) && _guessedWord[_i6] !== randomWord[_i6]) {
          squaresOfRowTwo[_i6].style.backgroundColor = "#FFAC1C";
          squaresOfRowTwo[_i6].style.transition = "0.8s";
          buttonsClicked[_i6].style.backgroundColor = "#FFAC1C";
        } else if (_guessedWord[_i6] !== randomWord[_i6]) {
          squaresOfRowTwo[_i6].style.backgroundColor = "#EF0107";
          squaresOfRowTwo[_i6].style.transition = "0.8s";
          buttonsClicked[_i6].style.backgroundColor = "#EF0107";
        } else if (_guessedWord[_i6] == randomWord[_i6]) {
          squaresOfRowTwo[_i6].style.backgroundColor = "rgb(24, 199, 24)";
          squaresOfRowTwo[_i6].style.transition = "0.8s";
          buttonsClicked[_i6].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 2) {
    var _guessedWord2 = letters.toString().replaceAll(",", "");

    for (var _i7 = 0; _i7 < _guessedWord2.length; _i7++) {
      count2 += 1;

      for (var _j2 = 0; _j2 < randomWord.length; _j2++) {
        if (count2 == 1 && randomWord.includes(_guessedWord2[0]) && _guessedWord2[_i7] !== randomWord[_i7]) {
          squaresOfRowThree[_i7].style.backgroundColor = "#FFAC1C";
          squaresOfRowThree[_i7].style.transition = "0.8s";
          buttonsClicked[_i7].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 2 && randomWord.includes(_guessedWord2[1]) && _guessedWord2[_i7] !== randomWord[_i7]) {
          squaresOfRowThree[_i7].style.backgroundColor = "#FFAC1C";
          squaresOfRowThree[_i7].style.transition = "0.8s";
          buttonsClicked[_i7].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 3 && randomWord.includes(_guessedWord2[2]) && _guessedWord2[_i7] !== randomWord[_i7]) {
          squaresOfRowThree[_i7].style.backgroundColor = "#FFAC1C";
          squaresOfRowThree[_i7].style.transition = "0.8s";
          buttonsClicked[_i7].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 4 && randomWord.includes(_guessedWord2[3]) && _guessedWord2[_i7] !== randomWord[_i7]) {
          squaresOfRowThree[_i7].style.backgroundColor = "#FFAC1C";
          squaresOfRowThree[_i7].style.transition = "0.8s";
          buttonsClicked[_i7].style.backgroundColor = "#FFAC1C";
        } else if (_guessedWord2[_i7] !== randomWord[_i7]) {
          squaresOfRowThree[_i7].style.backgroundColor = "#EF0107";
          squaresOfRowThree[_i7].style.transition = "0.8s";
          buttonsClicked[_i7].style.backgroundColor = "#EF0107";
        } else if (_guessedWord2[_i7] == randomWord[_i7]) {
          squaresOfRowThree[_i7].style.backgroundColor = "rgb(24, 199, 24)";
          squaresOfRowThree[_i7].style.transition = "0.8s";
          buttonsClicked[_i7].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 3) {
    var _guessedWord3 = letters.toString().replaceAll(",", "");

    for (var _i8 = 0; _i8 < _guessedWord3.length; _i8++) {
      count2 += 1;

      for (var _j3 = 0; _j3 < randomWord.length; _j3++) {
        if (count2 == 1 && randomWord.includes(_guessedWord3[0]) && _guessedWord3[_i8] !== randomWord[_i8]) {
          squaresOfRowFour[_i8].style.backgroundColor = "#FFAC1C";
          squaresOfRowFour[_i8].style.transition = "0.8s";
          buttonsClicked[_i8].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 2 && randomWord.includes(_guessedWord3[1]) && _guessedWord3[_i8] !== randomWord[_i8]) {
          squaresOfRowFour[_i8].style.backgroundColor = "#FFAC1C";
          squaresOfRowFour[_i8].style.transition = "0.8s";
          buttonsClicked[_i8].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 3 && randomWord.includes(_guessedWord3[2]) && _guessedWord3[_i8] !== randomWord[_i8]) {
          squaresOfRowFour[_i8].style.backgroundColor = "#FFAC1C";
          squaresOfRowFour[_i8].style.transition = "0.8s";
          buttonsClicked[_i8].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 4 && randomWord.includes(_guessedWord3[3]) && _guessedWord3[_i8] !== randomWord[_i8]) {
          squaresOfRowFour[_i8].style.backgroundColor = "#FFAC1C";
          squaresOfRowFour[_i8].style.transition = "0.8s";
          buttonsClicked[_i8].style.backgroundColor = "#FFAC1C";
        } else if (_guessedWord3[_i8] !== randomWord[_i8]) {
          squaresOfRowFour[_i8].style.backgroundColor = "#EF0107";
          squaresOfRowFour[_i8].style.transition = "0.8s";
          buttonsClicked[_i8].style.backgroundColor = "#EF0107";
        } else if (_guessedWord3[_i8] == randomWord[_i8]) {
          squaresOfRowFour[_i8].style.backgroundColor = "rgb(24, 199, 24)";
          squaresOfRowFour[_i8].style.transition = "0.8s";
          buttonsClicked[_i8].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 4) {
    var _guessedWord4 = letters.toString().replaceAll(",", "");

    for (var _i9 = 0; _i9 < _guessedWord4.length; _i9++) {
      count2 += 1;

      for (var _j4 = 0; _j4 < randomWord.length; _j4++) {
        if (count2 == 1 && randomWord.includes(_guessedWord4[0]) && _guessedWord4[_i9] !== randomWord[_i9]) {
          squaresOfRowFive[_i9].style.backgroundColor = "#FFAC1C";
          squaresOfRowFive[_i9].style.transition = "0.8s";
          buttonsClicked[_i9].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 2 && randomWord.includes(_guessedWord4[1]) && _guessedWord4[_i9] !== randomWord[_i9]) {
          squaresOfRowFive[_i9].style.backgroundColor = "#FFAC1C";
          squaresOfRowFive[_i9].style.transition = "0.8s";
          buttonsClicked[_i9].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 3 && randomWord.includes(_guessedWord4[2]) && _guessedWord4[_i9] !== randomWord[_i9]) {
          squaresOfRowFive[_i9].style.backgroundColor = "#FFAC1C";
          squaresOfRowFive[_i9].style.transition = "0.8s";
          buttonsClicked[_i9].style.backgroundColor = "#FFAC1C";
        } else if (count2 == 4 && randomWord.includes(_guessedWord4[3]) && _guessedWord4[_i9] !== randomWord[_i9]) {
          squaresOfRowFive[_i9].style.backgroundColor = "#FFAC1C";
          squaresOfRowFive[_i9].style.transition = "0.8s";
          buttonsClicked[_i9].style.backgroundColor = "#FFAC1C";
        } else if (_guessedWord4[_i9] !== randomWord[_i9]) {
          squaresOfRowFive[_i9].style.backgroundColor = "#EF0107";
          squaresOfRowFive[_i9].style.transition = "0.8s";
          buttonsClicked[_i9].style.backgroundColor = "#EF0107";
        } else if (_guessedWord4[_i9] == randomWord[_i9]) {
          squaresOfRowFive[_i9].style.backgroundColor = "rgb(24, 199, 24)";
          squaresOfRowFive[_i9].style.transition = "0.8s";
          buttonsClicked[_i9].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  }
};

var winnerChecker = function winnerChecker() {
  var guessedWord = letters.toString().replaceAll(",", "");

  if (guessedWord == randomWord) {
    winner.innerHTML = "Congratulations, you guessed the word correctly!";
  } else if (count3 == 4 && guessedWord != randomWord) {
    winner.innerHTML = "Sorry, the word was ".concat(randomWord);
  }
};

enterButton.addEventListener("click", function () {
  if (count == 4 || count == 8 || count == 12 || count == 16 || count == 20) {
    wordChecker();
    winnerChecker();
    letters = [];
    count3 += 1;
    count2 = 0;
    buttonsClicked = [];
    wrong.innerHTML = "";
  } else {
    console.log(count);
    console.log("oops");
  }
});
lettersBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    buttonsClicked.push(button);
    createWord(button);
    displayClickedLetter();
    counter();
  });
});