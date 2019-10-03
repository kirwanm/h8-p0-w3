//Week-3 Exercise 6 Palindrome Angka
/*
Directions:
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrome.
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome.
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome,
yaitu 9.
*/

function angkaPalindrome(num) {
  var counterNum = 1; //mulai dari 1 spy num awal yg sdh palindrome tidak diproses
  var NotYet = true;
  var balikNum = '';
  var strNum = String(num);
  //perulangan selama angka palindrome belum ketemu
  while(NotYet) {
    strNum = String(num + counterNum); //num dijadikan string agar dapat diambil per karakter
    //perulangan ambil karakter num mulai dari belakang
    for(i=strNum.length; i>0; i--) {
      balikNum += strNum.substr(i-1, 1); //simpan karakter yg sdh dibalik ke variabel penampung
    }
    if(strNum === balikNum) {
      NotYet = false; //palindrome ketemu
    }
    else {
      NotYet = true; //palindrome belum ketemu
    }
    balikNum = '';
    counterNum++;
  }
  return Number(strNum);
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(12)); // 22
console.log(angkaPalindrome(22)); // 33
