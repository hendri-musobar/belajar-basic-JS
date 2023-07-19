/*
 BUATLAH KODE FUNCTION DISINI
*/

function shoutOut() {
  return `Halo Function!`
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

/*
 BUATLAH KODE FUNCTION DISINI
*/

var num1 = 5;
var num2 = 6;

function calculateMultiply(i,j) {
  return i*j
}
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

let angka1 = 50
let angka2 = 60

console.log(calculateMultiply(angka1, angka2))

/*
 BUATLAH KODE FUNCTION DISINI
*/

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(k,l,m,n) {
  return `nama saya ${k}, umur saya ${l} tahun, alamat saya di ${m}, dan saya punya hobby yaitu ${n}!`
}
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"


function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
   return true
  } else if (angka1 > angka2) {
    return false
  } else {
    return -1
  }
  // you can only write your code here!
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

function balikKata(kata) {
  var hasilBalikKata = ""
  for (let i = kata.length-1; i >= 0; i--) {  
    hasilBalikKata += kata[i]
    console.log(i, kata[i])
  }
  return hasilBalikKata
  // you can only write your code here!
}

// TEST CASES
// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

function konversiMenit(menit) {
  // you can only write your code here!
  var getJam = Math.floor(menit / 60)
  var getMenit = menit % 60
  if (getMenit < 10) {
    getMenit = `0${getMenit}`
  }
  return `${getJam}:${getMenit}`
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

function xo(str) {
  // you can only write your code here!
  var jumlahX = 0
  var jumlahO = 0
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == "x") {
      jumlahX += 1
    } else {
      jumlahO += 1
    }
  }
  
  return jumlahX == jumlahO
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true