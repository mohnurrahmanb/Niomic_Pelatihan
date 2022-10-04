function ascDesc(){
    var angka = [32,33,16,40,9,7,11,2,44,1,66];

    //TOSTRING = COVERT ARRAY TO STRING
    //JOIN = CONVER ARRAY TO STRING DENGAN dimasukkan jarak seperti apa terserah
    console.log("Sebelumnya : ", angka.toString());
    console.log("Sebelumnya : ", angka.join(","));
    console.log("Ascending : ", angka.sort().toString());
    console.log("Descending : ", angka.reverse().toString());
}
ascDesc();