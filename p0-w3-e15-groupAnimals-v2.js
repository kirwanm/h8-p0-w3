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
  var arrHasil = [];
  var arrKel = [];

  //perulangan ambil huruf pertama dari array dan simpan data ke variable array penampung
  for(var numLoop1=0; numLoop1<animals.length; numLoop1++) {
    var strHurufAwal = animals[numLoop1][0];
    //console.log('1' + strHurufAwal);
    for(numLoop2=0; numLoop2<animals.length; numLoop2++) {
      //console.log('2' + animals[numLoop2][0]);
      if(strHurufAwal === animals[numLoop2][0]) {
        //console.log(strHurufAwal + ' ' + animals[numLoop2][0]);
        arrKel.push(animals[numLoop2]);
        //console.log(arrKel);
      }
    }
    arrHasil.push(arrKel);
    arrKel = [];
  } //end of for
  //perulangan hapus duplikat
  for(var numLoop1=0; numLoop1<arrHasil.length; numLoop1++) {
    //console.log('1 ' + numLoop1 + ' ' + arrHasil[numLoop1]);
    for(var numLoop2=0; numLoop2<arrHasil.length; numLoop2++) {
      if(arrHasil[numLoop1][0] === arrHasil[numLoop2][0] && numLoop1 !== numLoop2) {
        //console.log(numLoop1 + ' ' + numLoop2);
        arrHasil.splice(numLoop2, 1);
      }
      //console.log('1 ' + numLoop1 + ' ' + arrHasil[numLoop1][0][0]);
      //console.log('2 ' + numLoop2 + ' ' + arrHasil[numLoop2][0][0]);
      //console.log(arrHasil[numLoop1][0][0]===arrHasil[numLoop2][0][0]);
      //console.log();
    }
  }
  return arrHasil;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]