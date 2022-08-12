const lettersBtn = document.querySelectorAll(".letter");
const squaresOfRowOne = document.querySelectorAll(".row_one");
const squaresOfRowTwo = document.querySelectorAll(".row_two");
const squaresOfRowThree = document.querySelectorAll(".row_three");
const squaresOfRowFour = document.querySelectorAll(".row_four");
const squaresOfRowFive = document.querySelectorAll(".row_five");
const enterButton = document.querySelector(".enter");
const backspaceBtn = document.querySelector(".backspace");
const winner = document.querySelector(".p_winner");
const newGameBtn = document.querySelector(".new_game");
const card = document.querySelector(".card");
const closeBtn = document.querySelector(".close_button");
const infoBtn = document.querySelector(".info");


let letters = [];
let buttonsClicked = [];
let count = 0;
let count2 = 0;
let count3 = 0;
const guessingWords = [
  "abet",
  "abut",
  "ache",
  "alit",
  "ante",
  "arch",
  "aver",
  "avow",
  "bach",
  "back",
  "bade",
  "bail",
  "bait",
  "bake",
  "bale",
  "balk",
  "ball",
  "band",
  "bang",
  "bank",
  "barb",
  "bard",
  "bare",
  "barf",
  "bark",
  "base",
  "bash",
  "bask",
  "bate",
  "bawl",
  "bead",
  "beam",
  "bean",
  "bear",
  "beat",
  "beef",
  "been",
  "beep",
  "bell",
  "belt",
  "bend",
  "bent",
  "bias",
  "bide",
  "biff",
  "bike",
  "bilk",
  "bill",
  "bind",
  "bird",
  "birl",
  "birr",
  "bite",
  "bitt",
  "blab",
  "blat",
  "bled",
  "blew",
  "blob",
  "blot",
  "blow",
  "blub",
  "blue",
  "blur",
  "boat",
  "bode",
  "body",
  "boil",
  "bolt",
  "bomb",
  "bond",
  "bone",
  "bong",
  "bonk",
  "book",
  "boom",
  "boot",
  "bore",
  "born",
  "boss",
  "bowl",
  "brag",
  "bray",
  "bred",
  "brew",
  "brim",
  "buck",
  "buff",
  "bulk",
  "bull",
  "bump",
  "bung",
  "bunk",
  "bunt",
  "buoy",
  "burl",
  "burn",
  "burp",
  "burr",
  "bury",
  "bush",
  "busk",
  "buss",
  "bust",
  "busy",
  "butt",
  "buzz",
  "caca",
  "cage",
  "cake",
  "calk",
  "call",
  "calm",
  "came",
  "camp",
  "cane",
  "cant",
  "card",
  "care",
  "cart",
  "case",
  "cash",
  "cast",
  "cave",
  "cede",
  "cere",
  "chap",
  "char",
  "chat",
  "chaw",
  "chid",
  "chin",
  "chip",
  "chop",
  "chug",
  "chum",
  "cite",
  "clad",
  "clam",
  "clap",
  "claw",
  "clew",
  "clip",
  "clog",
  "clop",
  "clot",
  "cloy",
  "club",
  "clue",
  "coal",
  "coat",
  "coax",
  "cock",
  "code",
  "coif",
  "coil",
  "coin",
  "coke",
  "comb",
  "come",
  "comp",
  "cone",
  "conk",
  "cook",
  "cool",
  "coop",
  "cope",
  "copy",
  "cord",
  "core",
  "cork",
  "corn",
  "cosh",
  "cost",
  "cowl",
  "crab",
  "cram",
  "crap",
  "crew",
  "crib",
  "crop",
  "crow",
  "cube",
  "cuff",
  "cull",
  "curb",
  "cure",
  "curl",
  "cuss",
  "dado",
  "damn",
  "damp",
  "dang",
  "dare",
  "darn",
  "dart",
  "dash",
  "date",
  "daub",
  "dawn",
  "daze",
  "deal",
  "deck",
  "deed",
  "deem",
  "defy",
  "deke",
  "demo",
  "dent",
  "deny",
  "dial",
  "dice",
  "died",
  "diet",
  "dike",
  "dine",
  "ding",
  "disc",
  "dish",
  "disk",
  "diss",
  "dive",
  "dock",
  "doff",
  "dole",
  "done",
  "doom",
  "dope",
  "doss",
  "dote",
  "dove",
  "down",
  "doze",
  "drag",
  "draw",
  "drew",
  "drip",
  "drop",
  "drub",
  "drug",
  "drum",
  "duck",
  "duel",
  "dull",
  "dump",
  "dung",
  "dunk",
  "dupe",
  "dusk",
  "dust",
  "earn",
  "ease",
  "echo",
  "edge",
  "edit",
  "emit",
  "envy",
  "espy",
  "etch",
  "even",
  "exit",
  "face",
  "fade",
  "fail",
  "fake",
  "fall",
  "fare",
  "farm",
  "fart",
  "fast",
  "fate",
  "fawn",
  "faze",
  "fear",
  "feed",
  "feel",
  "fell",
  "felt",
  "fend",
  "fess",
  "fete",
  "feud",
  "file",
  "fill",
  "film",
  "find",
  "fine",
  "fink",
  "fire",
  "firm",
  "fish",
  "fist",
  "fizz",
  "flag",
  "flap",
  "flat",
  "flaw",
  "flay",
  "fled",
  "flee",
  "flew",
  "flex",
  "flip",
  "flit",
  "flog",
  "flop",
  "flow",
  "flub",
  "flux",
  "foal",
  "foam",
  "foil",
  "fold",
  "fond",
  "fool",
  "foot",
  "ford",
  "fork",
  "form",
  "foul",
  "fowl",
  "frag",
  "frap",
  "fray",
  "free",
  "fret",
  "frit",
  "fuel",
  "full",
  "fume",
  "fund",
  "funk",
  "furl",
  "fuse",
  "fuss",
  "futz",
  "gain",
  "gait",
  "gall",
  "game",
  "gang",
  "gaol",
  "gape",
  "garb",
  "gash",
  "gasp",
  "gate",
  "gave",
  "gawk",
  "gawp",
  "gaze",
  "gear",
  "geld",
  "gibe",
  "gift",
  "gild",
  "gimp",
  "gird",
  "give",
  "glom",
  "glow",
  "glue",
  "glug",
  "glut",
  "gnaw",
  "goad",
  "golf",
  "gone",
  "gong",
  "goof",
  "gore",
  "gown",
  "grab",
  "gray",
  "grew",
  "grey",
  "grid",
  "grin",
  "grip",
  "grit",
  "grow",
  "grub",
  "gull",
  "gulp",
  "gush",
  "gust",
  "gybe",
  "hack",
  "hail",
  "hale",
  "halt",
  "hand",
  "hang",
  "hare",
  "hark",
  "harm",
  "harp",
  "hash",
  "hasp",
  "hast",
  "hate",
  "hath",
  "haul",
  "have",
  "hawk",
  "haze",
  "head",
  "heal",
  "heap",
  "hear",
  "heat",
  "heed",
  "heel",
  "heft",
  "held",
  "helm",
  "help",
  "herd",
  "hewn",
  "hide",
  "hike",
  "hill",
  "hint",
  "hire",
  "hiss",
  "hive",
  "hoax",
  "hock",
  "hold",
  "hole",
  "home",
  "hone",
  "honk",
  "hood",
  "hoof",
  "hook",
  "hoop",
  "hoot",
  "hope",
  "horn",
  "hose",
  "host",
  "hove",
  "howl",
  "huff",
  "hulk",
  "hull",
  "hump",
  "hung",
  "hunt",
  "hurl",
  "hurt",
  "hush",
  "husk",
  "hymn",
  "hype",
  "idle",
  "inch",
  "iron",
  "itch",
  "jack",
  "jade",
  "jail",
  "jape",
  "jazz",
  "jeer",
  "jell",
  "jerk",
  "jest",
  "jibe",
  "jilt",
  "jinx",
  "jive",
  "join",
  "joke",
  "jolt",
  "josh",
  "juke",
  "jump",
  "junk",
  "kayo",
  "keel",
  "keen",
  "keep",
  "kept",
  "kern",
  "kick",
  "kill",
  "kink",
  "kiss",
  "kite",
  "knap",
  "knew",
  "knit",
  "knot",
  "know",
  "lace",
  "lack",
  "laid",
  "lain",
  "lamb",
  "lame",
  "land",
  "lard",
  "lark",
  "lash",
  "last",
  "laud",
  "lave",
  "laze",
  "lead",
  "leaf",
  "leak",
  "lean",
  "leap",
  "leer",
  "left",
  "lend",
  "lent",
  "levy",
  "lick",
  "lift",
  "like",
  "lilt",
  "lime",
  "limp",
  "line",
  "link",
  "lisp",
  "list",
  "live",
  "load",
  "loaf",
  "loan",
  "lock",
  "loft",
  "loll",
  "long",
  "look",
  "loom",
  "loop",
  "loot",
  "lope",
  "lord",
  "lose",
  "lost",
  "lour",
  "love",
  "lube",
  "luck",
  "luff",
  "luge",
  "lull",
  "lump",
  "lure",
  "lurk",
  "lust",
  "made",
  "mail",
  "maim",
  "make",
  "mark",
  "mask",
  "mate",
  "maul",
  "meet",
  "meld",
  "melt",
  "mend",
  "meow",
  "mess",
  "miff",
  "milk",
  "mime",
  "mind",
  "mine",
  "miss",
  "moan",
  "mock",
  "moor",
  "moot",
  "mope",
  "move",
  "muck",
  "muff",
  "muse",
  "mush",
  "must",
  "mute",
  "nail",
  "name",
  "near",
  "neck",
  "need",
  "nest",
  "nick",
  "nock",
  "nose",
  "note",
  "nuke",
  "numb",
  "obey",
  "ogle",
  "okay",
  "omen",
  "omit",
  "ooze",
  "open",
  "oust",
  "pace",
  "pack",
  "page",
  "pain",
  "pair",
  "palm",
  "pant",
  "pare",
  "park",
  "part",
  "pass",
  "pave",
  "pawn",
  "peak",
  "peal",
  "peck",
  "peek",
  "peel",
  "peep",
  "peer",
  "perk",
  "pick",
  "pile",
  "pine",
  "plan",
  "plat",
  "play",
  "plod",
  "plop",
  "plot",
  "plow",
  "plug",
  "pock",
  "poke",
  "pool",
  "pore",
  "pose",
  "post",
  "pour",
  "pout",
  "pray",
  "prim",
  "prod",
  "prop",
  "puff",
  "pull",
  "pulp",
  "pump",
  "purl",
  "purr",
  "push",
  "putt",
  "quip",
  "quit",
  "quiz",
  "race",
  "rage",
  "raid",
  "rain",
  "rake",
  "rang",
  "rank",
  "rant",
  "rape",
  "rate",
  "raze",
  "read",
  "ream",
  "reap",
  "reef",
  "reek",
  "reel",
  "rein",
  "rely",
  "rend",
  "rent",
  "rest",
  "rice",
  "ride",
  "rile",
  "ring",
  "riot",
  "rise",
  "risk",
  "rive",
  "roam",
  "roar",
  "rock",
  "rode",
  "roil",
  "roll",
  "romp",
  "roof",
  "room",
  "root",
  "rope",
  "rout",
  "rove",
  "ruin",
  "rule",
  "rush",
  "rust",
  "sack",
  "said",
  "sail",
  "sale",
  "salt",
  "sass",
  "sate",
  "save",
  "sawn",
  "scab",
  "scam",
  "scan",
  "scar",
  "scat",
  "scud",
  "scum",
  "seal",
  "seam",
  "seat",
  "seed",
  "seek",
  "seem",
  "seen",
  "seep",
  "sell",
  "send",
  "sent",
  "sewn",
  "shag",
  "sham",
  "shed",
  "ship",
  "shit",
  "shoe",
  "shoo",
  "shop",
  "shot",
  "show",
  "shun",
  "shut",
  "side",
  "sift",
  "sigh",
  "sign",
  "sing",
  "sink",
  "sire",
  "site",
  "size",
  "skew",
  "skid",
  "skim",
  "skin",
  "skip",
  "slab",
  "slag",
  "slam",
  "slap",
  "slat",
  "slay",
  "sled",
  "slew",
  "slid",
  "slim",
  "slip",
  "slit",
  "slog",
  "slop",
  "slot",
  "slow",
  "slue",
  "slug",
  "slum",
  "slur",
  "smut",
  "snag",
  "snap",
  "snip",
  "snow",
  "snub",
  "soak",
  "soap",
  "soar",
  "sock",
  "soil",
  "sold",
  "sole",
  "solo",
  "sort",
  "sour",
  "sown",
  "spam",
  "span",
  "spar",
  "spat",
  "spay",
  "sped",
  "spew",
  "spin",
  "spit",
  "spot",
  "spud",
  "spur",
  "stab",
  "stag",
  "star",
  "stay",
  "stem",
  "step",
  "stet",
  "stew",
  "stir",
  "stop",
  "stow",
  "stub",
  "stud",
  "stun",
  "suck",
  "suit",
  "sulk",
  "sung",
  "sunk",
  "surf",
  "swab",
  "swam",
  "swap",
  "swat",
  "sway",
  "swig",
  "swim",
  "swob",
  "swot",
  "swum",
  "tack",
  "tail",
  "talc",
  "talk",
  "tame",
  "tamp",
  "tank",
  "tape",
  "task",
  "taxi",
  "team",
  "tear",
  "teem",
  "tell",
  "tend",
  "tent",
  "term",
  "test",
  "text",
  "thaw",
  "thin",
  "thud",
  "tick",
  "tide",
  "tile",
  "tilt",
  "time",
  "ting",
  "tint",
  "tire",
  "toil",
  "told",
  "toll",
  "tone",
  "took",
  "tool",
  "toot",
  "tope",
  "tore",
  "torn",
  "toss",
  "tote",
  "tour",
  "tout",
  "tram",
  "trap",
  "tree",
  "trek",
  "trim",
  "trip",
  "trod",
  "trot",
  "true",
  "tube",
  "tuck",
  "tune",
  "turf",
  "turn",
  "tusk",
  "twin",
  "twit",
  "type",
  "undo",
  "urge",
  "vamp",
  "vary",
  "veer",
  "veil",
  "vein",
  "vend",
  "vent",
  "vest",
  "veto",
  "vide",
  "view",
  "visa",
  "vise",
  "void",
  "vote",
  "wade",
  "waft",
  "wage",
  "wail",
  "wait",
  "wake",
  "walk",
  "wall",
  "wane",
  "want",
  "ward",
  "warm",
  "warn",
  "warp",
  "wash",
  "waul",
  "wave",
  "wawl",
  "wean",
  "wear",
  "weed",
  "weep",
  "weld",
  "well",
  "welt",
  "wend",
  "went",
  "wept",
  "were",
  "wert",
  "wham",
  "whap",
  "whet",
  "whip",
  "whir",
  "whiz",
  "whop",
  "will",
  "wilt",
  "wine",
  "wink",
  "wipe",
  "wire",
  "wish",
  "wist",
  "wive",
  "woke",
  "wolf",
  "woof",
  "word",
  "wore",
  "work",
  "worm",
  "worn",
  "wove",
  "wrap",
  "writ",
  "xray",
  "yack",
  "yank",
  "yarn",
  "yaup",
  "yawn",
  "yawp",
  "yean",
  "yell",
  "yelp",
  "yoke",
  "yowl",
  "zero",
  "zest",
  "zing",
  "zone",
  "zonk",
  "zoom",
];

let randomWord =
  guessingWords[Math.floor(Math.random() * guessingWords.length)].toUpperCase();
  console.log(randomWord);

closeBtn.addEventListener("click", () => {
  card.style.display = "none";
});


newGameBtn.addEventListener("click", () => {
  randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)].toUpperCase();
  console.log(randomWord);
  letters = [];
  count = 0;
  count2 = 0;
  count3 = 0;
  buttonsClicked = [];
  winner.innerHTML = "";
  for(let i = 0; i < lettersBtn.length; i++) {
    lettersBtn[i].style.backgroundColor = "rgb(98, 97, 97)";
  }
  for (let i = 0; i < squaresOfRowOne.length; i++) {
    squaresOfRowOne[i].innerHTML = "";
    squaresOfRowOne[i].style.backgroundColor = "#6b6a6a";
  }
  for (let i = 0; i < squaresOfRowTwo.length; i++) {
    squaresOfRowTwo[i].innerHTML = "";
    squaresOfRowTwo[i].style.backgroundColor = "#6b6a6a";
  }
  for (let i = 0; i < squaresOfRowThree.length; i++) {
    squaresOfRowThree[i].innerHTML = "";
    squaresOfRowThree[i].style.backgroundColor = "#6b6a6a";
  }
  for (let i = 0; i < squaresOfRowFour.length; i++) {
    squaresOfRowFour[i].innerHTML = "";
    squaresOfRowFour[i].style.backgroundColor = "#6b6a6a";
  }
  for (let i = 0; i < squaresOfRowFive.length; i++) {
    squaresOfRowFive[i].innerHTML = "";
    squaresOfRowFive[i].style.backgroundColor = "#6b6a6a";
  }
});

const createWord = (button) => {
   let letter = button.innerHTML;
  letters.push(letter);
};

const counter = () => {
  count += 1;
};

const displayClickedLetter = () => {
  switch (count) {
    case 0:
      squaresOfRowOne[0].innerHTML = letters[0];
      break;
    case 1:
      squaresOfRowOne[1].innerHTML = letters[1];
      break;
    case 2:
      squaresOfRowOne[2].innerHTML = letters[2];
      break;
    case 3:
      squaresOfRowOne[3].innerHTML = letters[3];
      break;
    case 4:
      squaresOfRowTwo[0].innerHTML = letters[0];
      break;
    case 5:
      squaresOfRowTwo[1].innerHTML = letters[1];
      break;
    case 6:
      squaresOfRowTwo[2].innerHTML = letters[2];
      break;
    case 7:
      squaresOfRowTwo[3].innerHTML = letters[3];
      break;
    case 8:
      squaresOfRowThree[0].innerHTML = letters[0];
      break;
    case 9:
      squaresOfRowThree[1].innerHTML = letters[1];
      break;
    case 10:
      squaresOfRowThree[2].innerHTML = letters[2];
      break;
    case 11:
      squaresOfRowThree[3].innerHTML = letters[3];
      break;
    case 12:
      squaresOfRowFour[0].innerHTML = letters[0];
      break;
    case 13:
      squaresOfRowFour[1].innerHTML = letters[1];
      break;
    case 14:
      squaresOfRowFour[2].innerHTML = letters[2];
      break;
    case 15:
      squaresOfRowFour[3].innerHTML = letters[3];
      break;
    case 16:
      squaresOfRowFive[0].innerHTML = letters[0];
      break;
    case 17:
      squaresOfRowFive[1].innerHTML = letters[1];
      break;
    case 18:
      squaresOfRowFive[2].innerHTML = letters[2];
      break;
    case 19:
      squaresOfRowFive[3].innerHTML = letters[3];
      break;
  }
};

const deleteDisplayedLetter = () => {
  switch (count) {
    case 1:
      squaresOfRowOne[0].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 2:
      squaresOfRowOne[1].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 3:
      squaresOfRowOne[2].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      console.log(letters);
      break;
    case 4:
      squaresOfRowOne[3].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      console.log(letters);
      break;
    case 5:
      squaresOfRowTwo[0].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 6:
      squaresOfRowTwo[1].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 7:
      squaresOfRowTwo[2].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 8:
      squaresOfRowTwo[3].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 9:
      squaresOfRowThree[0].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 10:
      squaresOfRowThree[1].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 11:
      squaresOfRowThree[2].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 12:
      squaresOfRowThree[3].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 13:
      squaresOfRowFour[0].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 14:
      squaresOfRowFour[1].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 15:
      squaresOfRowFour[2].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 16:
      squaresOfRowFour[3].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 17:
      squaresOfRowFive[0].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 18:
      squaresOfRowFive[1].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 19:
      squaresOfRowFive[2].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
    case 20:
      squaresOfRowFive[3].innerHTML = "";
      letters.pop();
      buttonsClicked.pop();
      count -= 1;
      break;
  }
};

backspaceBtn.addEventListener("click", () => {
  deleteDisplayedLetter();
});

const wordChecker = () => {
  if (count3 == 0) {
    let guessedWord = letters.toString().replaceAll(",", "");
    for (let i = 0; i < guessedWord.length; i++) {
      count2 += 1;
      for (let j = 0; j < randomWord.length; j++) {
        if (
          count2 == 1 &&
          randomWord.includes(guessedWord[0]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 2 &&
          randomWord.includes(guessedWord[1]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 3 &&
          randomWord.includes(guessedWord[2]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 4 &&
          randomWord.includes(guessedWord[3]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowOne[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (guessedWord[i] !== randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "#EF0107";
          buttonsClicked[i].style.backgroundColor = "#EF0107";
        } else if (guessedWord[i] == randomWord[i]) {
          squaresOfRowOne[i].style.backgroundColor = "rgb(24, 199, 24)";
          buttonsClicked[i].style.backgroundColor = "rgb(24, 199, 24)";
        }
        
      }
    }
  } else if (count3 == 1) {
    let guessedWord = letters.toString().replaceAll(",", "");
    for (let i = 0; i < guessedWord.length; i++) {
      count2 += 1;
      for (let j = 0; j < randomWord.length; j++) {
        if (
          count2 == 1 &&
          randomWord.includes(guessedWord[0]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowTwo[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 2 &&
          randomWord.includes(guessedWord[1]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowTwo[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 3 &&
          randomWord.includes(guessedWord[2]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowTwo[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 4 &&
          randomWord.includes(guessedWord[3]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowTwo[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (guessedWord[i] !== randomWord[i]) {
          squaresOfRowTwo[i].style.backgroundColor = "#EF0107";
          buttonsClicked[i].style.backgroundColor = "#EF0107";
        } else if (guessedWord[i] == randomWord[i]) {
          squaresOfRowTwo[i].style.backgroundColor = "rgb(24, 199, 24)";
          buttonsClicked[i].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 2) {
    let guessedWord = letters.toString().replaceAll(",", "");
    for (let i = 0; i < guessedWord.length; i++) {
      count2 += 1;
      for (let j = 0; j < randomWord.length; j++) {
        if (
          count2 == 1 &&
          randomWord.includes(guessedWord[0]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowThree[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 2 &&
          randomWord.includes(guessedWord[1]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowThree[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 3 &&
          randomWord.includes(guessedWord[2]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowThree[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 4 &&
          randomWord.includes(guessedWord[3]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowThree[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (guessedWord[i] !== randomWord[i]) {
          squaresOfRowThree[i].style.backgroundColor = "#EF0107";
          buttonsClicked[i].style.backgroundColor = "#EF0107";
        } else if (guessedWord[i] == randomWord[i]) {
          squaresOfRowThree[i].style.backgroundColor = "rgb(24, 199, 24)";
          buttonsClicked[i].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 3) {
    let guessedWord = letters.toString().replaceAll(",", "");
    for (let i = 0; i < guessedWord.length; i++) {
      count2 += 1;
      for (let j = 0; j < randomWord.length; j++) {
        if (
          count2 == 1 &&
          randomWord.includes(guessedWord[0]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFour[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 2 &&
          randomWord.includes(guessedWord[1]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFour[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 3 &&
          randomWord.includes(guessedWord[2]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFour[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 4 &&
          randomWord.includes(guessedWord[3]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFour[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (guessedWord[i] !== randomWord[i]) {
          squaresOfRowFour[i].style.backgroundColor = "#EF0107";
          buttonsClicked[i].style.backgroundColor = "#EF0107";
        } else if (guessedWord[i] == randomWord[i]) {
          squaresOfRowFour[i].style.backgroundColor = "rgb(24, 199, 24)";
          buttonsClicked[i].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  } else if (count3 == 4) {
    let guessedWord = letters.toString().replaceAll(",", "");
    for (let i = 0; i < guessedWord.length; i++) {
      count2 += 1;
      for (let j = 0; j < randomWord.length; j++) {
        if (
          count2 == 1 &&
          randomWord.includes(guessedWord[0]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFive[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 2 &&
          randomWord.includes(guessedWord[1]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFive[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 3 &&
          randomWord.includes(guessedWord[2]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFive[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (
          count2 == 4 &&
          randomWord.includes(guessedWord[3]) &&
          guessedWord[i] !== randomWord[i]
        ) {
          squaresOfRowFive[i].style.backgroundColor = "#FFAC1C";
          buttonsClicked[i].style.backgroundColor = "#FFAC1C";
        } else if (guessedWord[i] !== randomWord[i]) {
          squaresOfRowFive[i].style.backgroundColor = "#EF0107";
          buttonsClicked[i].style.backgroundColor = "#EF0107";
        } else if (guessedWord[i] == randomWord[i]) {
          squaresOfRowFive[i].style.backgroundColor = "rgb(24, 199, 24)";
          buttonsClicked[i].style.backgroundColor = "rgb(24, 199, 24)";
        }
      }
    }
  }
};


const winnerChecker = () => {
  let guessedWord = letters.toString().replaceAll(",", "");
  if (guessedWord == randomWord) {
    winner.innerHTML = "Congratulations, you guessed the word correctly!";
  }else if(count3 == 4 && guessedWord != randomWord) {
    winner.innerHTML = `Sorry, the word was ${randomWord}`;
  }
};

enterButton.addEventListener("click", () => {
  wordChecker();
  winnerChecker();
  letters = [];
  count3 += 1;
  count2 = 0;
  buttonsClicked = [];
});

lettersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    buttonsClicked.push(button);
    createWord(button);
    displayClickedLetter();
    counter();
  });
});
