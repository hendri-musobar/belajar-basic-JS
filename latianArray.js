//input "hello world!"
//output
// '!dlrow olleh';

function balikString(string) {
  var balikString = ""
  for (let i = 0; i < string.length; i++) {
    balikString += string[string.length-i-1]
    
  }
  return balikString
}
console.log(balikString("hello world!"))


//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(array) {
  let hasil = ""
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(`Nomor ID: ${element[0]}`)
    // console.log(`Nama Lengkap: ${element[1]}`)
    // console.log(`TTL: ${element[2]} ${element[3]}`)
    // console.log(`Hobi: ${element[4]}`)
    
    hasil += `Nomor ID: ${element[0]} \nNama Lengkap: ${element[1]} \nTTL: ${element[2]} ${element[3]} \nHobi: ${element[4]} \n`;   
  }
  return hasil
    }        
console.log(dataHandling(input))
	// Nomor ID:  0001
	// Nama Lengkap:  Roman Alamsyah
	// TTL:  Bandar Lampung 21/05/1989
	// Hobi:  Membaca

	// Nomor ID:  0002
	// Nama Lengkap:  Dika Sembiring
	// TTL:  Medan 10/10/1992
	// Hobi:  Bermain Gitar

	// Nomor ID:  0003
	// Nama Lengkap:  Winona
	// TTL:  Ambon 25/12/1965
	// Hobi:  Memasak

	// Nomor ID:  0004
	// Nama Lengkap:  Bintang Senjaya
	// TTL:  Martapura 6/4/1970
	// Hobi:  Berkebun

	//contoh output
var input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function compareNumbers(a, b) {
	return b - a;
}



function dataHandling2(arr) {
	arr.splice(1, 1, 'Roman Alamsyah Elsharawy');
	arr.splice(2, 1, 'Provinsi Bandar Lampung');
	arr.splice(4, 0, 'Pria');
	arr.splice(5, 1, 'SMA Internasional Metro');
	console.log(arr);
	const tanggal = arr[3];
	const bulan = tanggal.split('/')[1];
	switch (bulan) {
		case '01':
			console.log('Januari');
			break;
		case '02':
			console.log('Februari');
			break;

		case '03':
			console.log('Maret');
			break;

		case '04':
			console.log('April');
			break;

		case '05':
			console.log('Mei');
			break;

		case '06':
			console.log('Juni');
			break;

		case '07':
			console.log('Juli');
			break;

		case '08':
			console.log('Agustus');
			break;

		case '09':
			console.log('September');
			break;
		case '10':
			console.log('Oktober');
			break;

		case '11':
			console.log('November');
			break;

		case '12':
			console.log('Desember');
			break;

		default:
			break;
	}
	const tanggalLahir = tanggal.split('/');
  const tanggalLahirSorted = tanggalLahir.sort(compareNumbers); 
  console.log(tanggalLahirSorted)
  const namaOrang = arr[1]
  console.log(namaOrang.slice(0,15))
}
dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */