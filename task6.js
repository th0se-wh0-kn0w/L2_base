function toWeirdCase(string){
  return string.split(" ").map(word => {
    return word.split("").map((x, i) => (i % 2 != 0 ? x.toLowerCase() : x.toUpperCase())).join("")
  }).join(" ");
}

