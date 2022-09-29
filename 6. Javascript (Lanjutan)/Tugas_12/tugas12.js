function tampilkanArray(){
    var buah = ["Pisang","Jeruk","Apel","Mangga"];
    return buah;
}
console.log(tampilkanArray());

//Manipulasi hapus bagian belakang POP
function manipulasiArrayPop(){
    buah=tampilkanArray();
    buah.pop();
    return buah;
}
console.log(manipulasiArrayPop());

//Manipulasi hapus bagian Depan SHIFT
function manipulasiArrayShift(){
    buah=tampilkanArray();
    buah.shift();
    buah.pop();
    return buah;
}
console.log(manipulasiArrayShift());

// Manipulasi menambahkan Data Array Mulai dari Bagian Belakang
function manipulasiArrayPush(){
    buah=tampilkanArray();
    buah.push("Duren");
    return buah
}
console.log(manipulasiArrayPush());