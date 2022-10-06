function balikKata(kata) {
    var splitString =kata.split("");
    var reverseArray=splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

// testCase
console.log(balikKata("Niomic!"));   
console.log(balikKata("JavaScript")); 
console.log(balikKata("alohahola")); 
console.log(balikKata("Jawa_Barat"));
