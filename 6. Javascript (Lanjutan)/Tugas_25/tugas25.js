function ascDesc(){
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    //TOSTRING = COVERT ARRAY TO STRING
    //JOIN = CONVER ARRAY TO STRING DENGAN dimasukkan jarak seperti apa terserah
    console.log("Sebelumnya : ", angka.toString());
    console.log("Sebelumnya : ", angka.join(","));
    
    console.log("Ascending : ", angka.sort().toString());
    console.log("Descending : ", angka.reverse().toString());
    console.log("Filter Angka > 10 :", angka.filter(angka1=>{
        return angka1>10;
    }).toString());
}
ascDesc();