function ip2int(ip) {
    return ip.split(".")
      .reduce((ipInt, octet) => (ipInt<<8) + parseInt(octet, 10), 0) >>> 0;
}

function convert(value) {
  return (value >>> 24)
    + "." + (value >> 16 & 0xFF)
    + "." + (value >> 8 & 0xFF)
    + "." + (value & 0xFF);
}

function ipv4Parser(ip, mask){
  let ipInt = ip2int(ip);
  let maskInt = ip2int(mask);
  return [convert(ipInt & maskInt), convert(ipInt & ~maskInt)];
}
