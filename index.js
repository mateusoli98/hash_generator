const UPPER_LATTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_LATTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%&*()_+=/[]{}";

const TYPE_CHARACTERS = [UPPER_LATTERS, LOWER_LATTERS, NUMBERS, SYMBOLS];

const lengthHash = 16;

const getRandomValue = (value) => Math.floor(Math.random() * value);

const getRandomCharacter = (type) => TYPE_CHARACTERS[type][getRandomValue(TYPE_CHARACTERS[type].length)];

const generateHash = () => {
  let hash = "";

  for (let i = 0; i <= lengthHash; i++) {
    const typeCharacter = getRandomValue(TYPE_CHARACTERS.length);

    hash += getRandomCharacter(typeCharacter);
  }

  return hash;
};

const hash = generateHash();

console.log(hash);
