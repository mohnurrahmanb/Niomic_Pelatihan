function perulanganForEach(){
    var string = "Saya ingin belajar bersama";
    
    //SPLIT = merubah type data string, menjadi ARRAY
    string = string.split(" ");
    
    //FOREACH = untuk perulangan data(item,index,array)
    string.forEach(function(item,index){
        console.log("Item : ", item ," Index ke ", index);
    }
    );
}
perulanganForEach();

//MAP = Perulangan untuk memunculkan item, index, array. Sama seperti FOREACH
function perulanganMap(){
    var string = ["Jakarta","Surabaya","Bandung","Semarang"];
    string.map(function(item,index,array){
        console.log(item);
        console.log(index);
        console.log(array);
    })
}
perulanganMap();