// First Approach

function isUnique1(str) {
  const checker = [];

  for (const char of str) {
    if (checker[char.charCodeAt()]) {
      return false;
    }

    checker[char.charCodeAt()] = true;
  }

  return true;
}

// Second approach

function isUnique2(str) {
  // size of number is 8 byte
  let checker = 0;

  for (const char of str) {
    if ((checker & (1 << (char.charCodeAt() - 97))) > 0) {
      return false;
    }

    checker |= 1 << (char.charCodeAt() - 97);
  }

  return true;
}

console.log(isUnique2("aa"));
console.log(isUnique2("abcdefgh"));
