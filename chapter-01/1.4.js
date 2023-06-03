// Find whether the permutation of the given string is palindrome or not

//  Solution 1
function palindromicPerm1(str) {
  const chars = new Array(128).fill(0);
  for (const ch of str) {
    chars[ch.charCodeAt()]++;
  }

  //   console.log(chars);

  let sum = 0;
  for (const count of chars) {
    sum += count % 2;
  }

  return sum <= 1;
}

//  Solution 2
/**
 * Another solution would be to use an object to keep track of character count.
 * then, iterate  through the object, if there are two or more characters with odd
 * count then the string permutation is not palindrome. Otherrwise, it is.
 */

// Solution 3

function bitAlmostOne(bits) {
  return (bits & (bits - 1)) === 0;
}

function palindromicPerm2(str) {
  let bitVector = 0;
  for (const ch of str) {
    if ((bitVector & (1 << (ch.charCodeAt() - 97))) === 0) {
      // bit not set, so set it
      bitVector = bitVector | (1 << (ch.charCodeAt() - 97));
    } else {
      // bit is set, so unset it
      bitVector = bitVector & ~(1 << (ch.charCodeAt() - 97));
    }
  }

  return bitVector === 0 || bitAlmostOne(bitVector);
}

console.log(palindromicPerm1("aa"));
console.log(palindromicPerm1("abcbca"));
console.log(palindromicPerm1("z"));
console.log(palindromicPerm1(""));
console.log(palindromicPerm1("ba"));
