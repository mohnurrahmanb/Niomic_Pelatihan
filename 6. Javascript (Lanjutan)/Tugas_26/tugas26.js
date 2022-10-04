//isFinite = ketika object maka akan bernilai FALSE
// SAMA
//isNaN = ketika object bernilai TRUE

function infiNotInfi(){
    var angka=[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    // var angka=-990;
    console.log(isFinite(angka));

    if(isFinite(angka)===false){
        for(i=0;i<angka.length;i++){
            console.log("Angka",angka[i],"NOT Infinity.");
        }
    }if(isFinite(angka)===true){
            console.log("Angka",angka,"IS Infinity.");
    }
}
infiNotInfi();