//MATCH = berfungsi mencari secara detail: kata,index, input, groups.
function cariKata(){
    var kata = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    console.log(kata.match("are"));
    console.log(kata.match("words"));
}
cariKata();


var kalimat = "Aku suka coding HTML, CSS, Javascript untuk menjadi suka menjadi dewa"

//INDEXOF = berfungsi mencari index ke berapa yang paling awal ditemukan
console.log(kalimat.indexOf("coding"));
//LASTINDEXOF = berfungsi mencari index ke berapa yang paling akhir ditemukan
console.log(kalimat.lastIndexOf("suka"));
//SEARCH = sama dengan indexOF dia juga dapat menjadi di convert menjadi regular extension
console.log(kalimat.search("coding"));
console.log(kalimat.search(/coding/)); //regular extension

//KONVERSI ke STRING JS
var kalimat1 = new String("Coding adalah jalan ninjaku");
console.log(typeof kalimat1); //type data
console.log(kalimat1); //cek data
console.log(kalimat1.toString()); //convert to string
