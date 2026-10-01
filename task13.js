function hexStringToRGB(hexString) {
  let x = parseInt(hexString.slice(1), 16);
  return {
    "r": x >> 16 & 0xFF,
    "g": x >> 8 & 0xFF,
    "b": x & 0xFF
  }
}
