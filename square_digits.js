function square_dig(num) {
    let arr = [];
    ((num.toString()).split('')).forEach(element => {
        (arr.push(Math.pow(element, 2)));
    });
    return Number(arr.join(''));
}
console.log(square_dig(9999));

let str1 = '4567'

console.log(str1.split(''));
str1.split('').forEach(keys=> console.log(keys));

