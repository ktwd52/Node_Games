const vowels = ["a", "e", "i", "o", "u"];

function toPigLatinWord(word) {
  word = word.toLowerCase();
  if (vowels.includes(word[0])) {
    return word + "way";
  }

  let consonantLastIndex = 0;
  while (
    consonantLastIndex < word.length &&
    !vowels.includes(word[consonantLastIndex])
  ) {
    consonantLastIndex++;
  }

  const consonantCluster = word.slice(0, consonantLastIndex);
  const restOfWord = word.slice(consonantLastIndex);
  return restOfWord + consonantCluster + "ay";
}

function toPigLatinPhrase(phrase) {
  const words = phrase.split(" ");
  const pigLatinWords = words.map((word) => toPigLatinWord(word));
  return pigLatinWords.join(" ");
}

function translateToPigLatin() {
  const CLinput = process.argv.slice(2);

  if (CLinput.length === 0) {
    console.log(
      "Please enter any text that you would like to translate to Pig Latin."
    );
    process.exit(1);
  }

  const inputPhrase = CLinput.join(" ");
  const pigLatinPhrase = toPigLatinPhrase(inputPhrase);
  console.log(`Pig Latin translation: \x1b[32m ${pigLatinPhrase}`);
}

translateToPigLatin();
