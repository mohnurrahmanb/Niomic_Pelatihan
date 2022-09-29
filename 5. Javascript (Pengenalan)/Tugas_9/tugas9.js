function callObj(){
    var handphone = {  
        merk: "xiaomi",
        tahun: 2022,
        type: "MI 13",
        processor: ["Snapdragon 1080","Intel","mediatek"],
    }

    for (let i in handphone){
        console.log(handphone[i]);
    }
}

callObj();
