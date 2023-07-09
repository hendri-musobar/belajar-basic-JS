console.log("Hello World") //perintah untuk print

// A. Membuat Variabel
// Untuk membuat variabel di JS itu ada 3 macam 
// nama variabel hanya boleh disebut satu kali dalam 1 file
// penamaan variabel tidak boleh dipisah menggunakan spasi, diawali dengan angka bila nama panjang digabung dengan kapital
// 1. var, diikuti nama Variabel
var namaOrang= "Hendri" // ini sudah jarang digunakan
// 2. const, diikuti nama variabel, ini hanya d=bisa diisi sekali 
const sabunMandi= "Lifebuoy" // nama sabun mandi ini tidak boleh diisi dengan nama sabun mandi lain
// contoh: sabunMandi= "Nuvo" (Tidak boleh)
// 3. let, diikuti nama variabel. Ini bisa diisi berulang ulang kali dengan nilai yang lain, nilai yang diambil adalah nilai yang terakhir
let minumanSoda= "Sprite" 
// boleh diganti isinya dengan yang lain
minumanSoda= "Coca-cola"

console.log(minumanSoda)
// B. Type-type data
// 1. String
// ini kata yang dibungkus oleh (petik 1, petik 2, back tik) => (', "", `)
let iniString= "ini string dengan petik 2"
iniString= 'ini string dengan petik 1'
iniString= `ini string dengan back tik ini bisa diisi variabel dengan $ yaitu ${namaOrang}` 
console.log(iniString)
// cara mengakses tiap string dengan menyebut nama variabel diikuti kurung siku [] yang dalamnya diisi index dimulai dari 0
// contoh sabunMandi[0] => akan mengambil huruf L dikata Lifebuoy
// cara menggabungkan string yaitu dnegan menggunakan +
console.log(minumanSoda[2]+minumanSoda[3]);// untuk mengambil c dan a

// 2. Number 
// Number di JS cuma dalam 1 bentuk saja yaitu tidak dibedakan antara bilangan desimal dan integer
// biasanya kalau di console log warnanya akan berbeda dengan string (kuning)
// operasinya berlaku sesuai kalkulator scientific
// bisa memanggil rumus dengan fungsi Math
let nomorRumah= 7
console.log(nomorRumah);
console.log(Math.sqrt(9));

// 3. Undefined
// ini untuk memanggil sebuah variabel tetapi didalam file tersebut tidak ada atau belum di declare
console.log(typeof handPhone) 

// 4. Null
// ini variabel sudah di declare tetapi belum di assigned / diisi
let kucing
console.log(kucing);

// 5. Array
// sekumpulan data yang dikelompokan dengan dibungkus oleh []
// cara memanggilnya haampir sama seperti string dengan menggunakan [] diikuti index
// apabila ada 2 dimensi kurung kotaknya bisa langsung dijejer untuk mengaksesnya [ke-i] [ke-j]
let sabun= ["lifebuoy", "Nuvo", "Lux"]
console.log(sabun[2]);// untuk memanggil sabun lux
let gudang= [
    ["Sprite", "Coca-cola"],
    ["triplek", "Kursi rusak"],
    [8, 9, 7]
]
console.log(gudang[0][1]);
// menambahkan data ke array
// dengan memanggil nama arraynya kemudian di chain .push() didalam kurung data yang mau ditambahkan
gudang.push("Kardus")
console.log(gudang);


// 6. object
// ini berbeda dengan array yang cara mengaksesnya menggunakan index dari 0
// untuk object terdapat key dan value 
// pembentukkan dikurung menggunakan {}
// untuk mengaksesnya dia chain dengan menggunakan titik (.)
const sabunColek= {
    ukuran:"125 gr", 
    warna:"biru",
    harga:"15000"
}
// harga sabun colek diakses dengan 
console.log(sabunColek.harga);
// menambahkan property pada object
// 1. memanggil namanya objectnya disambung menggunakan kurung siku [] yang berisi key = valuenya
sabunColek['bentuk']="bulat"
// 2. memanggil objectnya di chain menggunakan titik diikuti key nya=values
sabunColek.kemasan= "seng"
console.log(sabunColek);


// untuk dokumentasi lebih lengkapnya dapat dilihat di 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push