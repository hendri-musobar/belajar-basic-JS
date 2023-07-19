// var rows1; // input the number of rows

// // do loops to display asterisks in the console.
// *
// *
// *
// *
// *

var rows1 = 5

for (let i = 0; i < rows1; i++) {
  console.log("*")
  
}

var rows2 = 6; // input the number of rows

// do loops to display asterisks in the console.
// *****
// *****
// *****
// *****
// *****
for (let i = 0; i < rows2; i++) {
  let bariskei= ""
  for (let j = 0; j < rows2; j++) {
    bariskei += "*"
  }  
  console.log(bariskei)
}

var rows3=7; // input the number of rows

// do loops to display asterisks in the console.
// *
// **
// ***
// ****
// *****
for (let i = 0; i < rows3; i++) {
  let bariskei = ""
  for (let j = 0; j < rows3; j++){
    if (j == i) break
    bariskei += "*"
    
  }
  console.log(bariskei)
}
for (let i = 0; i < rows3; i++) {
  let bariskei = ""
  for (let j = 0; j < rows3; j++){
    if (j >= i) bariskei += "*"
    else bariskei += " "
    
  }
  console.log(bariskei)
}