/**
 * Determine whether the given string is one or two edits away
 */

function editAway(str1, str2) {
  const str1_sorted = str1.split("").sort().join("");
  const str2_sorted = str2.split("").sort().join("");

  let i, j;
  i = j = 0;
  const diff = [];

  while (i < str1_sorted.length && j < str2_sorted.length) {
    if (str1_sorted[i] < str2_sorted[j]) {
      diff.push(str1_sorted[i]);
      i++;
    } else if (str1_sorted[i] > str2_sorted[j]) {
      diff.push(str2_sorted[j]);
      j++;
    } else {
      i++;
      j++;
    }
  }

  if (i === str1_sorted.length) {
    diff.push(...str2_sorted.substring(j).split(""));
  }

  if (j === str2_sorted.length) {
    diff.push(...str1_sorted.substring(i).split(""));
  }

  //   console.log(str1_sorted, str2_sorted);
  console.log(diff);

  return diff.length <= 2;
}

console.log(editAway("pale", "ale"));
console.log(editAway("pale", "abe"));
console.log(editAway("pale", "ple"));
console.log(editAway("pales", "pale"));
console.log(editAway("pale", "bale"));
console.log(editAway("pale", "bale"));
console.log(editAway("pale", "bae"));
console.log(editAway("apple", "aple"));
console.log(editAway("begon", "begin"));
console.log(editAway("begon", "being"));
