/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', () => {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org
// 
//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 
// 
//   it('Throws an error so it fails', () => {
//     throw new Error('Delete me!');
//   });
// 
//   it('Doesn\'t throw an error, so it doesn\'t fail', () => {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });
// 
//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', () => {
//     var even = function(num){
//       return num/2 === 0;
//     }
// 
//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// }); 

describe('Diner\'s Club', () => {
  // Be careful, tests can have bugs too...
  var expect = chai.expect;
  for(var prefix = 38; prefix < 40; prefix++) {
    (prefix => {
      it('has a prefix of ' + prefix + ' and a length of 14', () => {
        expect(detectNetwork(prefix + '123456789012')).to.equal('Diner\'s Club');
      }); // close it
    })(prefix); // close IIFE
  } // close for loop
}); // close describe

describe('American Express', () => {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect;
//   var assert = function(isTrue) {
//     if(!isTrue) {
//       throw new Error('Test failed');
//     }
//  
//   };
  for(var prefix = 34; prefix < 38; prefix += 3) {
    (prefix => {
      it('has a prefix of ' + prefix + ' and a length of 15', () => {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('American Express');
      }); // close it
    })(prefix); // close IIFE
  } // close for loop
}); // close describe

describe('Visa', () => {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  // var assert = chai.assert.equal;
  var expect = chai.expect;
    for(var length = 13; length < 20; length += 3) {
      (length => {
        it('has a prefix of 4 and a length of ' + length, () => {
          expect(detectNetwork('4123456789012345678'.slice(0, length))).to.equal('Visa');
        }); // close it
      })(length); // close IIFE
    } // close for loop 
}); // close describe

describe('MasterCard', () => {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  for(var prefix = 51; prefix < 56; prefix++) {
    (prefix => {
      it('has a prefix of ' +  prefix + ' and a length of 16', () => {
        expect(detectNetwork((prefix + '12345678901234'))).to.equal('MasterCard');
      }); // close it
    })(prefix); // close IIFE
  } // close for loop
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
}); // close describe

describe('Discover', () => {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // var assert = chai.assert.equal;
  var expect = chai.expect;
  for(var length = 16; length < 20; length += 3) {
    (length => {
      it('has a prefix of 6011 and a length of ' + length, () => {
        expect(detectNetwork('6011123456789012345'.slice(0,length))).to.equal('Discover');    
      }); // close it
      it('has a prefix of 65 and a length of ' + length, () => {
        expect(detectNetwork('6511123456789012345'.slice(0,length))).to.equal('Discover');    
      }); // close it
    })(length); // close IIFE
  } // for loop
  
  for(var length = 16; length < 20; length += 3) {
  	for(var prefix = 644; prefix < 650; prefix++) {
  	  ((length, prefix) => {
  	    it('has a prefix of ' + prefix + ' and a length of ' + length, () => {
  	      expect(detectNetwork((prefix + '1234567890123456').slice(0,length))).to.equal('Discover')
  	    }); // close it
  	  })(length, prefix) // close IIFE
  	} // close inner for loop
  } // close outer for loop
}); // close describe

describe('Maestro', () => {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  
  for(var length = 12; length < 20; length++) {
    (length => {
      it('has a prefix of 5018 and a length of ' +  length, () => {
        expect(detectNetwork('5018123456789012345'.slice(0,length))).to.equal('Maestro');
      }); // close it

      it('has a prefix of 5020 and a length of ' +  length, () => {
        expect(detectNetwork('5020123456789012345'.slice(0,length))).to.equal('Maestro');
      }); // close it

      it('has a prefix of 5038 and a length of ' +  length, () => {
        expect(detectNetwork('5038123456789012345'.slice(0,length))).to.equal('Maestro');
      }); // close it

      it('has a prefix of 6304 and a length of ' + length, () => {
        expect(detectNetwork('6304123456789012345'.slice(0,length))).to.equal('Maestro');
      }); // close it
    })(length); // close Immediately invoked function expression (IIFE)
  } // close for loop
}); // close describe


describe('should support China UnionPay', () => {
  var expect = chai.expect;
  for(var length = 16; length < 20; length++) {
    for(var prefix = 622126; prefix < 622926; prefix++) {
      ((prefix, length) => { 
        it('has a prefix of ' + prefix + ' and a length of ' + length, () => {
          expect(detectNetwork((prefix + '1234567890123').slice(0, length))).to.equal('China UnionPay');
        }); // close it       
      })(prefix, length); // close IIFE
    } // close inner for loop

    for(var prefix = 624; prefix < 627; prefix++) {
      ((prefix, length) => { 
        it('has a prefix of ' + prefix + ' and a length of ' + length, () => {
          expect(detectNetwork((prefix + '1234567890123456').slice(0, length))).to.equal('China UnionPay');
        }); // close it      
      })(prefix, length); // close IIFE
    } // close inner for loop
      
    for(var prefix = 6282; prefix < 6289; prefix++) {
      ((prefix, length) => { 
        it('has a prefix of ' + prefix + ' and a length of ' + length, () => {
          expect(detectNetwork((prefix + '123456789012345').slice(0, length))).to.equal('China UnionPay');
        }); // close it        
      })(prefix, length); // close IIFE
    } // close inner for loop          
  } // close outer for loop   
}); // close describe

describe('should support Switch', () => {
  var expect = chai.expect;
  var lengths = [16,18,19];
  var prefixes = {
    4903: lengths,
    4905: lengths,
    4911: lengths,
    4936: lengths,
    564182: lengths,
    633110: lengths,
    6333: lengths,
    6759: lengths
  }
  for(var p in prefixes) {
    var l = prefixes[p];
    for(var i = 0; i < l.length; i++) {
      ((l, p) => {
        it('has a prefix of ' + p + ' and a length of ' + l, () => {
          expect(detectNetwork((p + '1234567890123456').slice(0, l))).to.equal('Switch');
        }); // close it
      })(l[i], p); // close IIFE
    } // close inner for loop
  } // close outer for loop
}); // close describe