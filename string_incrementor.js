const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));
 
 incrementString("str000") // str001

// Alternative solution
function incrementString (strng) {
  // return incrementedString
  let string = strng.replace(/\d+$/g, ''); // string without the number.
  let len = strng.length - string.length
  console.log(len);
  let num = strng.match(/\d+/g) || '0' 

  let s = ((number)=>Number(number) + 1)(num[0]).toString()
 
  let pad = (()=> {
   
    while(s.length < len){
      s = '0' + s;
    }
    return s
  })()

  return string + pad
}

 
 let x =incrementString("fooo")
 console.log(x)
