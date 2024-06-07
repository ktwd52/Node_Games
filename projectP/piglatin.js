// Define variables
// consonant array
const c = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// vowel array
const v = ["a", "e", "i", "o", "u"];

// Errorcheck #1: only one input phrase
const CLinput = process.argv.slice(2);

if (CLinput.length === 1) {
  const PigLatinObject = CLinput.split(" ").reduce(
    (acc, word, index) => ({ ...acc, [`word${index + 1}`]: word.split("") }),
    {}
  );
  console.log(PigLatinObject);
} else {
  console.log("Please enter 'one text phrase' as an argument");
  process.exit(1);
}

// Definig variables

// } else if {
// } else if {
// } else if {
// } else {
// };

// pig latin translator engine v0.1
for (i = 0; i < PigLatinObject.word.length; i++) {}
// 'cv..'  => 'v..' + 'c' + 'ay'
// 'cc..' => '..' + 'cc' + 'ay'
// 'ccc..' => '..' + 'ccc' + 'ay'
// 'v..' => '..' + 'v' + 'way'

function translateToPigLatin(word) {
  if (v.includes(phraseToPiglatin[0].toLowerCase())) {
    return phraseToPiglatin + "way";
  } else {
    const vCheck = phraseToPiglatin
      .split("")
      .findIndex((char) => v.includes(char.toLowerCase()));
    return (
      phraseToPiglatin.slice(vCheck) + wordToPiglatin.slice(0, vCheck) + "ay"
    );
  }
}
