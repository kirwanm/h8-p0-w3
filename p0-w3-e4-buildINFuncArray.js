//Week-3 Exercise-4 Build In Function Array
/*
Contoh Input:
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

*Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti Contoh Input.
*Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah.
 Lalu console.log array yang baru.

*Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4),
  ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
  Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
  Format tanggal pada data adalah dd-mm-YYYY.
  Misal angka bulan 01, tuliskan "Januari".
  Gunakan switch case untuk menuliskan bulan di atas.
*Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending
 dan console.log array yang sudah di-sort.
*Masih pada array hasil split dari elemen tanggal/bulan/tahun,
 gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
*Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja.
 Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice,
 sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Hasil akhir:
 ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria",
  "SMA Internasional Metro"]
 Mei
 ["1989", "21", "05"]
 21-05-1989
 Roman Alamsyah
*/

var arrPersonal = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arrString) {
  var arrTanggal = [];
  var strTanggal = '';
  var arrBulan = [];
  var strBulan = ''; 

  arrString.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  arrString.splice(4, 2, 'Pria', 'SMA Internasional Metro');
  console.log(arrString);

  arrTanggal = arrString.slice(3, 4); //hasil .slice adalah tipe data ARRAY
  strTanggal = String(arrTanggal);
  arrBulan = strTanggal.split('/'); //.split hanya bisa digunakan di tipe data STRING
                                    //dan hasil nya adalah ARRAY
  strBulan = String(arrBulan).substr(3, 2);
  switch(strBulan) {
    case '01': strBulan = 'Januari'; break;
    case '02': strBulan = 'Februari'; break;
    case '03': strBulan = 'Maret'; break;
    case '04': strBulan = 'April'; break;
    case '05': strBulan = 'Mei'; break;
    case '06': strBulan = 'Juni'; break;
    case '07': strBulan = 'Juli'; break;
    case '08': strBulan = 'Agustus'; break;
    case '09': strBulan = 'September'; break;
    case '10': strBulan = 'Oktober'; break;
    case '11': strBulan = 'November'; break;
    case '12': strBulan = 'Desember'; break;
    default: strBulan = ''; break;
  }
  console.log(strBulan);
  
  arrBulan.sort(function(value1, value2) { return value2 - value1 }); //?
  console.log(arrBulan);

  arrBulan = strTanggal.split('/');
  arrBulan = arrBulan.join('-')
  console.log(arrBulan);

  var strNama = String(arrString.slice(1, 2));
  if(strNama.length>15) {
    strNama = strNama.substr(0, 15);
  }
  console.log(strNama);
}

dataHandling2(arrPersonal);