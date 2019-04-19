

/**
  let str = ['a','b','c','d','f'];
let reg = /[A-Z]/gi;
let str1 = str.join('');
console.log(str1);
console.log(str1.search(/[a-z]/g));
 */
/**  ;
let array = [];
test = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z','A','B',
'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let str = 'ABCDF';

let arr1 = str.split('');
console.log(arr1);

let arr2 = test.slice(test.indexOf(arr1[0]),(test.indexOf((arr1[str.length-1]))+1));
console.log(arr2);
arr2.forEach(element=>{
    if(!(arr1.includes(element))){
        console.log(element);
    }
});**/

function findMissingLetter(array)
{
test = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z','A','B',
'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
'R','S','T','U','V','W','X','Y','Z'];
let arr2 = test.slice(test.indexOf(array[0]),(test.indexOf((array[array.length-1]))+1));
console.log(arr2);
let result = [];
arr2.forEach(element=>{
    if(!(array.includes(element))){
    result.push(element);

    }
});
return result.join('');
}
console.log(findMissingLetter(['B','M']));




/**let reg = /[A-Z]/g;
console.log(reg)
for (var i = 0; i < test.length; i++) {
   
  match = str.match(test[i]);
  if (!match) {
    array.push(test[i]);
  }
  
}
let arr1 = str.split('');
let arr2 =array + arr1;
let str2 = arr2.replace(/[,]/g,'').split('');
str2.sort((a, b)=>{
    return a-b;
});
console.log(str2);
**/