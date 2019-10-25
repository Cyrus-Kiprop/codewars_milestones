const duplicateEncode = word => word.split('').map((val, i, arr)=>{
  return arr.indexOf(val) === arr.lastIndexOf(val)? ')' : '('
}).join('')


console.log(duplicateEncode("Success" ))
