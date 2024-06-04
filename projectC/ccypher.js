const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const CLInput = process.argv;
const phrase = CLInput[2];
const shift = parseInt(CLInput[3], 10);

if (CLInput.length !== 4 || isNaN(shift) || shift < -25 || shift > 25) {
  console.log(
    "Usage: node ccypher.js 'Phrase Text within quotes' shifting_argument(int -25 to 25)"
  );
  process.exit(1);
}

const caesarCipher = (str, shift) => {
  const upperStr = str.toUpperCase();
  const result = [];

  for (let i = 0; i < upperStr.length; i++) {
    const char = upperStr[i];
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      let newIndex = (index + shift) % alphabet.length;
      if (newIndex < 0) newIndex += alphabet.length; // Handle negative shifts
      result.push(alphabet[newIndex]);
    } else {
      result.push(char); // Non-alphabet characters are added unchanged
    }
  }
  return result.join("");
};

const encryptedText = caesarCipher(phrase, shift);
console.log(`Original: ${phrase}`);
console.log(`Encrypted: ${encryptedText}`);
