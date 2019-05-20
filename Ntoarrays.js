function digitize(n){
    let result = [];
    (n.toString().split('')).forEach(element => {
       result.push(Number(element))
   });
   return result;
}
console.log(digitize(123));
