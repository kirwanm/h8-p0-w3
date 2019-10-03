//Week-3 Exercise 11 Deret Aritmatika
/*
Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter
berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true
jika array dari parameter tersebut merupakan deret aritmatika.
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten.
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2,
dan [2, 4, 6, 9] bukanlah deret aritmatika karena perbedaan selisih antar angka yang tidak konsisten.
*/

function tentukanDeretAritmatika(arr) {
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
       numSelisih = arr[numLoop1] - numAngkaLalu;
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

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 8])); // false