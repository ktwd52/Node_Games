// Multilingual Rock, Paper, Scissor Game v0.20240607
// Defining variables

// Current year for the copyright
const currentyear = new Date().getUTCFullYear();

// Multilanguage input possibilities (EN,DE,HU)
const mlInput = [
  { name: "rock", id: 1 },
  { name: "Stein", id: 1 },
  { name: "kő", id: 1 },
  { name: "paper", id: 2 },
  { name: "Papier", id: 2 },
  { name: "papír", id: 2 },
  { name: "scissor", id: 3 },
  { name: "Schere", id: 3 },
  { name: "olló", id: 3 },
];

// Game possible results matrix
const ResMtrx = [
  { p1c_id: 1, p2c_id: 1, restext: "draw" },
  { p1c_id: 1, p2c_id: 2, restext: "lose" },
  { p1c_id: 1, p2c_id: 3, restext: "win" },
  { p1c_id: 2, p2c_id: 1, restext: "win" },
  { p1c_id: 2, p2c_id: 2, restext: "draw" },
  { p1c_id: 2, p2c_id: 3, restext: "lose" },
  { p1c_id: 3, p2c_id: 1, restext: "lose" },
  { p1c_id: 3, p2c_id: 2, restext: "win" },
  { p1c_id: 3, p2c_id: 3, restext: "draw" },
  1,
];

// Command-line input => array
const CLinput = process.argv.slice(2);

// input string to id
function getChoiceId(choice) {
  const choiceObject = mlInput.find(
    (item) => item.name.toLowerCase() === choice.toLowerCase()
  );
  return choiceObject ? choiceObject.id : null;
}

// Game mode and result

let p1_id;
let p2_id;

if (CLinput.length === 1 && getChoiceId(CLinput[0]) !== null) {
  console.log("1 player mode (vs Computer)");
  p1_id = getChoiceId(CLinput[0]);
  p2_id = Math.floor(Math.random() * 3) + 1;
} else if (
  CLinput.length === 2 &&
  getChoiceId(CLinput[0]) !== null &&
  getChoiceId(CLinput[1]) !== null
) {
  console.log("2 player mode (vs Human)");
  p1_id = getChoiceId(CLinput[0]);
  p2_id = getChoiceId(CLinput[1]);
} else {
  console.log(`\x1b[31m \x1b[45m
    TypeError: \x1b[0m Please type in one (vs Computer) or two (vs Human) possibilities from:\x1b[32m

     ${Object.values(mlInput)
       .filter((choice) => choice.name)
       .map((choice) => choice.name)
       .join(", ")}
\x1b[0m
     Let's try it again!`);
  process.exit(1);
}

// Result of the game

const gRes = ResMtrx.find(
  (res) => res.p1c_id === p1_id && res.p2c_id === p2_id
);

// Command line output: game mode, result, player/computer choices, copyright
console.log(
  "\x1b[31m",
  `
  You ${gRes.restext} the game!
  `,
  "\x1b[0m",
  `
Player 1 choose: ${CLinput[0]}
(You) 
Player 2 choose: ${CLinput[1] || mlInput.find((item) => item.id === p2_id).name}
(Opponent/Computer) 

 \u00A9 KT -`,
  currentyear
);
