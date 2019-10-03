//Week-3 Exercise 5 Palindrome String
/*
Directions:
Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome,
dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  var strNewKata = '';
  console.log(kata.length);
  for(i=kata.length; i>0; i--) {
    strNewKata += kata.substr(i-1, 1);
  }
  if(strNewKata === kata) {
      console.log(strNewKata + ' ' + kata);
    return true;
  }
  else {
    console.log(strNewKata + ' ' + kata);
    return false;
  }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false