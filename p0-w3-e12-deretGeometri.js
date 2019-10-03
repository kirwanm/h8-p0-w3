//Week-3 Exercise 12 Deret Geometri
/*
Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array
yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut
merupakan deret geometri. Deret geometri adalah sebuah deret dimana perbedaan setiap angka
di deret tersebut konsisten secara perkalian.
Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3,
dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena perbedaan selisih antar angka
yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).
*/

function tentukanDeretGeometri(arr) {
  var numAngkaLalu = 0;
  var numSelisih = 0;
  var arrHasil = [];
  var booDeret = true; //*

  //perulangan untuk mengetahui selisih antar angka
  for(var numLoop1=0; numLoop1<arr.length; numLoop1++) {
    if(numLoop1===0) {
      numAngkaLalu = arr[numLoop1]; //perulangan pertama simpan angka awal ke variabel
    }
    else {
      numSelisih = arr[numLoop1] / numAngkaLalu;
      arrHasil.push(numSelisih); //simpan hasil selisih antar angka ke variabel array
      numAngkaLalu = arr[numLoop1];
    }
  }
  //perulangan untuk menentukan deret aritmatika atau bukan
  for(var numLoop1=0; numLoop1<arrHasil.length; numLoop1++){
    if(numLoop1===0) {
      numSelisih = arrHasil[numLoop1];
    }
    else if(numSelisih!==arrHasil[numLoop1]) {
      booDeret = false;
    }
  }
  return booDeret;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false