const mlInput = [
  { name: "rock", id: 1 },
  { name: "stein", id: 1 },
  { name: "kő", id: 1 },
  { name: "paper", id: 2 },
  { name: "papier", id: 2 },
  { name: "papír", id: 2 },
  { name: "scissor", id: 3 },
  { name: "schere", id: 3 },
  { name: "olló", id: 3 },
];

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
];

function getChoiceId(choice) {
  const choiceObj = mlInput.find(
    (item) => item.name.toLowerCase() === choice.toLowerCase()
  );
  return choiceObj ? choiceObj.id : null;
}

const p1_inpChML = process.argv[2];
const p2_inpChML = process.argv[3];

const p1_id = getChoiceId(p1_inpChML);
let p2_id;

if (!p1_id) {
  console.error(
    "Invalid choice for Player 1. Please choose rock, paper, or scissor."
  );
  process.exit(1);
}

if (p2_inpChML === undefined) {
  // 1 Player mode Human vs Computer
  console.log("1 player mode: Human vs Computer");
  p2_id = Math.floor(Math.random() * 3) + 1;
} else {
  // 2 Player mode Human vs Human
  console.log("2 player mode: Human vs Human");
  p2_id = getChoiceId(p2_inpChML);

  if (!p2_id) {
    console.error(
      "Invalid choice for Player 2. Please choose rock, paper, or scissor."
    );
    process.exit(1);
  }
}

const gRes = ResMtrx.find(
  (res) => res.p1c_id === p1_id && res.p2c_id === p2_id
);
// Current Year (Tested/OK: 2024-06-03)
const today = new Date();
const year = today.getUTCFullYear();

// Console Output Result Field - (Tested/OK: 2024-06-03)
console.log(
  "\x1b[31m",
  `You ${gRes.restext} the game!`,
  "\x1b[0m",
  `
Player 1 choose: ${p1_inpChML}
(You) 
Player 2 choose: ${p2_inpChML || mlInput.find((item) => item.id === p2_id).name}
(Opponent/Computer) 

Copyright KT -`,
  year
);
