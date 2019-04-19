/** let obj = {
    "M":1000,
    "D":500,
    "C":100,
    "L":50,
    "X":10,
    "V":5,
    "I":1
}

function numerals(roman){
let arr = [];
for (let i = 0; i < roman.length; i++) {
    arr.push(obj[roman[i]]);    
}
let result = 0;
let i = 0;
   while(i<arr.length){
    if (arr[i] < arr[i + 1]) {
        result +=((arr[i + 1])-(arr[i]));
        i++;
    }else{
        result +=(arr[i]);
    }
i++;

}
return result;
}

var arr  = numerals("MMVIII");
console.log(arr);
**/
function reg(roman){

var conversion = {M: 1000, CM: 900, D: 500, CD: 400, 
    C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, 
    V: 5, IV: 4, I: 1};
    console.log(roman.match(/CM|CD|XC|XL|IX|IV|\w/g));
    
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
};
console.log(reg("MCMXC"));