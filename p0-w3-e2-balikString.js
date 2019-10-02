//Week-3 Exercise-2 Balik String
//Directions:
//Buatlah sebuah fungsi dengan nama balikString.
//Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
//Contoh:
//input : "hello world!"
//output: "!dlrow olleh"

//Algoritma:
//1. Deklarasi (Inisialisasi) variabel untuk kata/kalimat yang diproses
//2. Deklarasi (Inisialisasi) variabel penampung kata/kalimat hasil proses,
//   simpan data awal dengan karakter kosong
//3. Lakukan perulangan mulai dari panjang kata/kalimat yang diproses,
//   dengan kondisi angka perulangan lebih besar dari posisi terakhir kata/kalimat
//4. Ambil karakter dari kata/kalimat dari posisi angka perulangan sebanyak 1 karakter,
//   simpan hasil di penampung
//5. Kurangi angka perulangan dengan 1
//6. Ulang langkah 4 dan 5 sampai angka perulangan lebih besar dari posisi awal karakter pada kata/kalimat
//7. Tampilkan hasil proses

function balikString(strSentence) {
  var strTempText = '';

  for(var i=strSentence.length-1; i>-1; i--) {
    strTempText += strSentence.substr(i, 1);
  }

  return strTempText
}

console.log(balikString('hello world!'));