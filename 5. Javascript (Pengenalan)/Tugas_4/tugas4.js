andi = 159
ben = 171
cindy = 159

function tinggi_badan(x, y, z){
    if (x > y && x > z && y > z) {
        console.log(x + '\n' + y + '\n' + z)
    }
    else if (x > y && x > z && y < z){
        console.log(x + '\n' + z + '\n' + y)
    }
    else if (y > z && y > x && z > x){
        console.log(y + "\n" + z + '\n' + x)
    }
    else if (y > z && y > x && z < x){
        console.log(y + '\n' + x + '\n' + z)
    }
    else if (z > y && z > x && y > x){
        console.log(z + '\n' + y + '\n' + x)
    }
    else if (z > y && y > x && y < x){
        console.log(z + '\n' + x + '\n' + y)
    }
    else if (x > y &&  y === z){
        console.log(x + '\n' + 'Dua orang berumur ' + y)
    }
    else if (x < y && y === z){
        console.log('Dua orang berumur ' + y + '\n' + x)
    }
    else if (y > x && x === z){
        console.log(y + '\n' + 'Dua orang berumur ' + x)
    }
    else if (y < x && x === z ){
        console.log('Dua orang berumur ' + x + '\n' + y)
    }
    else if (z > x && x === y){
        console.log(z + '\n' + 'Dua orang berumur ' + x)
    }
    else if (z < x && x === y){
        console.log('Dua orang berumur ' + x + '\n' + z)
    }
    else{
        console.log("Semua umur sama :(")
    }
}

console.log("Urutan Tinggi Badan (Andi : " + andi + ", Ben : " + ben + ", Cindy : " + cindy + ")")
tinggi_badan(andi, ben, cindy)