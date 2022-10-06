function panggilNestedArray(value){
 // tulis jawabanmu disini
    var hasil = [];
    for(i=0;i<value.length;i++){
        var rangkai =[];
        for(x=0;x<value[i].length+1;x++){
            rangkai.push(value[[x][i]]);
            
        }
        rangkai=rangkai.split(" ");
        
        rangkai.forEach(function(item,index){
            console.log("Item : ", item ," Index ke ", index);
        });
        // console.log(rangkai); 
    }
    console.log(hasil);
    
}
// 00
// 10
// 20

var nestedArray = [
   [1,2],
   ['Mark Zuckerberg','nur'],
   ['Facebook','google']
]

panggilNestedArray(nestedArray);
console.log(nestedArray[1][1]);