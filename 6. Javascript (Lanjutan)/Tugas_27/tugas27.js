//convert INT = parseInt, parseFloat
//convert string = String/toString/join

var kata = ["No","rumah saya",30,"A"];
var kalimat = "";

for(i=0;i<kata.length;i++){
    kalimat+=kata[i]+" ";
}
console.log(kalimat);

var kata1= ["Jalan pangeran Tirtayasa No", 70];
console.log(kata1.join(" "));