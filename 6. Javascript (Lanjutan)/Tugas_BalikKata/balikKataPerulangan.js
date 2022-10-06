function balikKata(kata) {
    var hasil="";
    for(i=kata.length;i>=0;i--){
        hasil=hasil+kata.charAt(i);
        // hasil+=kata.charAt(i);
    }
    return hasil;
}

// testCase
console.log(balikKata("Niomic!")) 
console.log(balikKata("JavaScript"))  
console.log(balikKata("alohahola"))  
console.log(balikKata("Jawa_Barat"))