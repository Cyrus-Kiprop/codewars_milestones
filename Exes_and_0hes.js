function XO(str) {
    //code here
    if (str.match(/x/gim) === null ||  str.match(/o/gim) === null){
            return false;
    }else if (str.match(/x/gim).length -1 < 0 ||  str.match(/o/gim).length - 1 < 0 ) {
            return false;
    }else if (str.match(/x/gim).length === str.match(/o/gim).length ) {
            return true;
    }else {
            return false;
        }
}
XO('');
//alternatively
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}
