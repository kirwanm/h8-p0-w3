//Week-3 Exercise 13 Target Terdekat
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array
yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x'
yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
  var arrIdxX = [];
  var arrIdxO = [];
  var numHasil = 0;
  var numTemp = 0;
  //perulangan mencari lokasi index karakter o dan x
  for(var numLoop1=0; numLoop1<arr.length; numLoop1++) {
    if(arr[numLoop1]==='x') {
      arrIdxX.push(numLoop1); //simpan index dalam variable array
    }
    else if(arr[numLoop1]==='o') {
      arrIdxO.push(numLoop1); //simpan index dalam variable array
    }
    else {
      //nothing
    }
  }
  if(arrIdxX.length===0) {
    numHasil = 0;
  }
  else {
    //perulangan perbandingan selisih besaran index
    for(var numLoop1=0; numLoop1<arrIdxO.length; numLoop1++) {
      for(var numLoop2=0; numLoop2<arrIdxX.length; numLoop2++) {
        numTemp = Math.abs(arrIdxX[numLoop2]-arrIdxO[numLoop1]);
        if(numHasil===0) {
          numHasil = numTemp;
        }
        else if(numTemp<numHasil) {
          numHasil = numTemp;
        }
        else {
          //nothing
        }
      }
    }
  }
  //console.log(arrIdxX);
  //console.log(arrIdxO);
  return numHasil;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2