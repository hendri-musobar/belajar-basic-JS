// Function
// Penulisan nya ada 2 macam
// 1. Functional Function
// ini mmenggunakan kata function diikuti nama function
function namaFunction (){}

// 2. Arrow Function
// ini menggunakan kata const diikuti nama function dilanjutkan dengan =>
const namaFunction1=()=>{}

// function itu bisa menghasilkan sesuatu ditandai dengan kata "return" didalamnya 
// atau hanya menjalankan sesuatu/function yang lain, ini disebut void function
// didalam function ()bisa dilempar parameter bisa banyak dihubungkan dengan tanda koma (,) 
// cara menjalankan fungsi dengan menyebut nama functionya diikuti parameternya

function membuatRoti(bahanRoti){
    return `roti sudah matang dengan bahan baku:${bahanRoti}`
}
membuatRoti("tepung")
membuatRoti("tapioka")

// void function
const pabrikRoti=()=>{
    membuatRoti("tepung")
}