function tampilkanArray(){
    var buah = ["Pisang","Jeruk"];
    return buah;
}
console.log(tampilkanArray());

//Menambahkan Data Bagian Depan
function manipulasiUnshift(){
    buah1=tampilkanArray();
    buah1.unshift("Apel","Mangga");
    return buah1;
}
console.log(manipulasiUnshift());

//dapat menambahkan/menghapus data dimulai index terserah dengan Splice
function manipulasiSplice(){
    buah2=manipulasiUnshift();
    //splice = (mulai index, ada yang di remove berapa?, "isi nilainya")
    buah2.splice(2,0,"Semangka");
    return buah2;
}
console.log(manipulasiSplice());