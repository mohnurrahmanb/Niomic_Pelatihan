// FILTER = menfilter nilai ARRAY
function bilanganDeret(){
    var angkas = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    let angka = angkas.filter(angka1 =>{
        return angka1 >15;
    });
    console.log(angka);
}
bilanganDeret();

// EVERY = Jika object tidak sama semua typenya, maka akan FALSE. jadi harus sama semua
// SOME = Jika object yang di cari ada salah satu typenya ada, maka akan TRUE.
let products =
[
    {name : "Apple", type : "HP"},
    {name : "RAIZER", type : "COMPUTER"},
    {name : "Samsung", type : "HP"},
    {name : "ACER", type : "Laptop"},
    {name : "HP", type : "COMPUTER"},
    {name : "Xiaomi", type : "HP"}
];

console.log(typeof products);
console.log(products.every(produk=>produk.type === "HP"));
console.log(products.some(produk=>produk.type === "HP"));