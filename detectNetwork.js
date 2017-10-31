// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = cardNumber => {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix1st6 = cardNumber.slice(0, 6);
  var prefix1st4 = prefix1st6.slice(0, 4);
  var prefix1st3 = prefix1st6.slice(0, 3);
  var prefix1st2 = prefix1st6.slice(0, 2);
  var prefix1st1 = prefix1st6.slice(0, 1); 
  var length = cardNumber.length;

  if((prefix1st2 === '38' || prefix1st2 === '39') && length === 14) {
    return 'Diner\'s Club';
  }

  else if((prefix1st2 === '34' || prefix1st2 === '37') && length === 15) {
    return 'American Express'; 
  }
 
  else if((prefix1st4 === '4903' || prefix1st4 === '4905' || prefix1st4 === '4911' ||
  prefix1st4 === '4936' || prefix1st6 === '564182' || prefix1st6 === '633110' || 
  prefix1st4 === '6333' ||  prefix1st4 === '6759') && 
  (length === 16 || length === 18 || length ===  19)) {
    return 'Switch';
  }
 
  else if(prefix1st1 === '4' && (length === 13 || length === 16 || length ===  19)) {
    return 'Visa'; 
  } 
 
  else if(prefix1st2 >= 51 && prefix1st2 <= 55 && length === 16) {
    return 'MasterCard';
  } 

  else if((prefix1st4 === '6011' || (prefix1st3 >= 644 && prefix1st3 <= 649) ||
  prefix1st2  === '65') && (length === 16 || length === 19)) {
    return 'Discover';
  } 

  else if((prefix1st4 === '5018' || prefix1st4 === '5020' || prefix1st4 === '5038' || 
  prefix1st4 === '6304') && (length >= 12 && length <= 19)) {
    return 'Maestro';    
  } 

  else if(((prefix1st6 >= 622126 && prefix1st6 <= 622925) || 
  (prefix1st3 >= 624 && prefix1st3 <= 626) || 
  (prefix1st4 >= 6282 && prefix1st4 <= 6288)) && 
  length >= 16 && length <= 19) {
    return 'China UnionPay'; 
  }
};
