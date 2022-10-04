//REPEAT = berfungsi sebagai mengulang nilai
var kalimat = "Semangat...";
console.log(kalimat.repeat(5));

var bintang = "*****";
console.log(bintang.repeat(2));
console.log(bintang.repeat(5));
console.log(bintang.repeat(7));
console.log(bintang.repeat(9));
console.log(bintang.repeat(11));
console.log(bintang.repeat(9));
console.log(bintang.repeat(7));
console.log(bintang.repeat(5));
console.log(bintang.repeat(2));

//INCLUDES = berfungsi mengecek nilai, apakah ada data tersebut. output(TRUE/FALSE)
console.log(kalimat.includes("at"));

//STARTSWITH = berfungsi sebagai apakah nilai tersebut awalannya seperti itu. output(TRUE/FALSE)
//ENDSWITH = berfungsi sebagai apakah nilai tersebut akhirannya seperti itu. output(TRUE/FALSE)
console.log(kalimat.startsWith("at"));
console.log(kalimat.endsWith("..."));