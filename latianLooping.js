// // Problem
// // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // Di dalam perulangan, periksa setiap angka counter:
// // Apabila angka counter adalah angka genap, tuliskan GENAP
// // Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.

// // Pada 3 perulangan baru ini periksa setiap angka counter:
// // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // "3 kelipatan 3" dan seterusnya.

// //contoh - ganjil genap
// //counter sekarang = 1,
// //output
// "GANJIL"
// //counter sekarang = 2,
// //output
// "GENAP"
// // dan seterusnya :)
for (let i = 0; i <= 100; i++) {
	if (i == 0) continue;

	if (i % 2 == 0) {
		console.log(i + 'GENAP');
	} else {
		console.log(i + 'GANJIL');
	}
}

// //contoh - untuk pertambahan counter 2
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 3,
// //output
// "3 KELIPATAN 3"
// // dan seterusnya :)

for (let i = 1; i <= 100; i += 2) {
	if (i % 3 == 0) {
		console.log(i + 'KELIPATAN 3');
	} else {
		console.log('""');
	}
}
// //contoh - untuk pertambahan counter 5
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 6,
// //output
// "6 KELIPATAN 6"
// // dan seterusnya :)
for (let i = 1; i <= 100; i += 5) {
	if (i % 6 == 0) {
		console.log(i + 'KELIPATAN 6');
	} else {
	}
}
// //contoh - untuk pertambahan counter 9
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 10,
// //output
// "10 KELIPATAN 10"
// // dan seterusnya :)
for (let i = 1; i <= 100; i+=9) {
  if (i % 10 == 0) {
    console.log(i + 'KELIPATAN 10')
  } 
  
}
