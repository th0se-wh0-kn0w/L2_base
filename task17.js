function cache(func) {
  let cache = {};
  return (...args) => {
    let id = JSON.stringify(args);
    if (id in cache)
      return cache[id];
    
    let value = func(...args);
    cache[id] = value;
    
    return value;
  }
}
