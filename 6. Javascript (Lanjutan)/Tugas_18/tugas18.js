var kalimat = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

//SLICE = kata yang di inginkan
function ambilKata(x){
    console.log(x.slice(8,24));
}
ambilKata(kalimat);

//membuat Kalimat Menjadi ARRAY
console.log(kalimat.split(" "));

//Fungsi TRIM Menghilangkan SPASI di awal
console.log(kalimat.trim());


var string1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var string2 = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
// CONCAT menggabungkan kata
function menggabungkanKata(a,b){
    hasil=a.concat(b);
    return hasil;
}
console.log(string1,string2);




