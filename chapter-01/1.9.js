function isRotation(s1, s2) {
  return (s1 + s2).includes(s2);
}

console.log(isRotation("waterbottle", "bottlewater"));
