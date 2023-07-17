// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding

var condition = 0;

while (condition <= 20) {
	condition++;
	if (condition % 2 == 0) {
		console.log(condition + ' - I love coding');
	}
}

// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

var condition1 = 20;

while (condition1 >= 2) {
	if (condition1 % 2 == 0) {
		console.log(condition1 + '- I will become fullstack developer');
	}
	condition1--;
}
