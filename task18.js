function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for (let digit of numbers) {
    format = format.replace("x", digit);
  }
  
  return format;
}
