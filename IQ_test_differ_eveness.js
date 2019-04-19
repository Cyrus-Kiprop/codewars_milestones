function check(str){
    let arr =str1.split(' ');
if (str1.match(reg).length === 1 ) {
    return (arr.indexOf(str.match(/(\s*\b\d*([02468]+)\b\s*)/g).join().trim(" "))+1)
}else{
    return (arr.indexOf(str.match(/(\s*\b\d*([13579]+)\b\s*)/g).join().trim())+1)
}
}
console.log(check(str1));