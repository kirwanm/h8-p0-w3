//Week-3 Exercise 15 Group Animal
/*
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array
yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada).
Untuk kasus ini, anggap saja semua text lowercase.

Contoh, jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
  var strAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  var arrHasil = [];
  var arrKel = [];

  //perulangan ambil huruf pertama dari array dan simpan data ke variable array penampung
  for(var numLoop1=0; numLoop1<strAlphabet.length; numLoop1++) {
    var strHurufAwal = strAlphabet[numLoop1];
    for(numLoop2=0; numLoop2<animals.length; numLoop2++) {
      if(strHurufAwal === animals[numLoop2][0]) {
        arrKel.push(animals[numLoop2]);
      }
    }
    if(arrKel.length>0) {
      arrHasil.push(arrKel);
      arrKel = [];
    }
  } //end of for
  return arrHasil;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]