function whatCentury(year)
{
  let century = Math.ceil(year / 100); 
  
  let postfix = "th";
  if (!(century >= 10 && century <= 20)) {
    switch(century % 10) {
      case 1: {
        postfix = "st";
        break;
      }

      case 2: {
        postfix = "nd";
        break;
      }
      
      case 3: {
        postfix = "rd";
        break;
      }
    }
  }
  
  return century + postfix;
}
