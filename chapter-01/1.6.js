//  Approach  1
function compress1(str) {
  let curr = str[0];
  let charCount = 0;
  let index = 0;
  let result = "";

  while (index < str.length) {
    if (str[index] === curr) {
      charCount++;
    }

    if (index < str.length && str[index + 1] === curr) {
      index++;
      continue;
    }

    result += `${curr}${charCount}`;
    charCount = 0;
    curr = str[index + 1];
    index++;
  }

  return result;
}

//  Approach 2
function compress2(str) {
  let prev = str[0];
  let count = 1;
  let result = "";

  if (str === "") {
    return str;
  }

  for (const curr of str.substring(1)) {
    if (prev !== curr) {
      result += `${prev}${count}`;
      count = 1;
      prev = curr;
      continue;
    }

    if (prev === curr) {
      count++;
    }
  }

  result += `${prev}${count}`;

  return result;
}

console.log(compress1("aabcccccaaa"));
console.log(compress1("abcd"));
console.log(compress1("abacdd"));
console.log(compress1("a"));
console.log(compress1(""));
