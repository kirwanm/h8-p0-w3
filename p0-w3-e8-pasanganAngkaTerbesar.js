//Week-3 Exercise 8 Pasangan Angka Terbesar
/*
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
Contoh, jika angka adalah 183928, maka function akan me-return 92,
pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

function pasanganTerbesar(angka) {
  var strAngka1 = '';
  var strAngka2 = '';
  var strAngka = String(angka); 
  var numTerbesar = 0;

  for(i=0; i<strAngka.length;i++) {
    strAngka1=strAngka.substr(i, 1);
    strAngka2=strAngka.substr(i+1, 1);

    if(Number(strAngka1+strAngka2) > numTerbesar) {
      numTerbesar = Number(strAngka1 + strAngka2);
    }
  }
  return numTerbesar;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(1)); // 1
console.log(pasanganTerbesar(201)); // 20