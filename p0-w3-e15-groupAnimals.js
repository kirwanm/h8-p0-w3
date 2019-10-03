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
  var arrA = [], arrB = [], arrC = [], arrD = [], arrE = [], arrF = [], arrG = [], arrH = [], arrI = [];
  var arrJ = [], arrK = [], arrL = [], arrM = [], arrN = [], arrO = [], arrP = [], arrQ = [], arrR = [];
  var arrS = [], arrT = [], arrU = [], arrV = [], arrW = [], arrX = [], arrY = [], arrZ = [];
  var arrHasil = [];
  //perulangan ambil huruf pertama dari array dan simpan data ke variable array penampung
  for(var numLoop1=0; numLoop1<animals.length; numLoop1++) {
    var strHurufAwal = animals[numLoop1];
    //console.log(strHurufAwal);
    strHurufAwal = strHurufAwal.substr(0, 1);
    //console.log(strHurufAwal);
    switch(strHurufAwal) {
      case 'a': arrA.push(animals[numLoop1]); break;
      case 'b': arrB.push(animals[numLoop1]); break;
      case 'c': arrC.push(animals[numLoop1]); break;
      case 'd': arrD.push(animals[numLoop1]); break;
      case 'e': arrE.push(animals[numLoop1]); break;
      case 'f': arrF.push(animals[numLoop1]); break;
      case 'g': arrG.push(animals[numLoop1]); break;
      case 'h': arrH.push(animals[numLoop1]); break;
      case 'i': arrI.push(animals[numLoop1]); break;
      case 'j': arrJ.push(animals[numLoop1]); break;
      case 'k': arrK.push(animals[numLoop1]); break;
      case 'l': arrL.push(animals[numLoop1]); break;
      case 'm': arrM.push(animals[numLoop1]); break;
      case 'n': arrN.push(animals[numLoop1]); break;
      case 'o': arrO.push(animals[numLoop1]); break;
      case 'p': arrP.push(animals[numLoop1]); break;
      case 'q': arrQ.push(animals[numLoop1]); break;
      case 'r': arrR.push(animals[numLoop1]); break;
      case 's': arrS.push(animals[numLoop1]); break;
      case 't': arrT.push(animals[numLoop1]); break;
      case 'u': arrU.push(animals[numLoop1]); break;
      case 'v': arrV.push(animals[numLoop1]); break;
      case 'w': arrW.push(animals[numLoop1]); break;
      case 'x': arrX.push(animals[numLoop1]); break;
      case 'y': arrY.push(animals[numLoop1]); break;
      case 'z': arrZ.push(animals[numLoop1]); break;
    } //end of switch
  } //end of for
  //pengecekan apakah ada data di variable penampung array
  if(arrA.length>0) {
    arrHasil.push(arrA);
  }
  if(arrB.length>0) {
    arrHasil.push(arrB);
  }
  if(arrC.length>0) {
    arrHasil.push(arrC);
  }
  if(arrD.length>0) {
    arrHasil.push(arrD);
  }
  if(arrE.length>0) {
    arrHasil.push(arrE);
  }
  if(arrF.length>0) {
    arrHasil.push(arrF);
  }
  if(arrG.length>0) {
    arrHasil.push(arrG);
  }
  if(arrH.length>0) {
    arrHasil.push(arrH);
  }
  if(arrI.length>0) {
    arrHasil.push(arrI);
  }
  if(arrJ.length>0) {
    arrHasil.push(arrJ);
  }
  if(arrK.length>0) {
    arrHasil.push(arrK);
  }
  if(arrL.length>0) {
    arrHasil.push(arrL);
  }
  if(arrM.length>0) {
    arrHasil.push(arrM);
  }
  if(arrN.length>0) {
    arrHasil.push(arrN);
  }
  if(arrO.length>0) {
    arrHasil.push(arrO);
  }
  if(arrP.length>0) {
    arrHasil.push(arrP);
  }
  if(arrQ.length>0) {
    arrHasil.push(arrQ);
  }
  if(arrR.length>0) {
    arrHasil.push(arrR);
  }
  if(arrS.length>0) {
    arrHasil.push(arrS);
  }
  if(arrT.length>0) {
    arrHasil.push(arrT);
  }
  if(arrU.length>0) {
    arrHasil.push(arrU);
  }
  if(arrV.length>0) {
    arrHasil.push(arrV);
  }
  if(arrW.length>0) {
    arrHasil.push(arrW);
  }
  if(arrX.length>0) {
    arrHasil.push(arrX);
  }
  if(arrY.length>0) {
    arrHasil.push(arrY);
  }
  if(arrZ.length>0) {
    arrHasil.push(arrZ);
  }
  return arrHasil;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]