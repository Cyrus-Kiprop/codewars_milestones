function duplicateCount(text){
    //...
   let reg = /(.)\1+/gi;
   let str_arr = (text.split("").sort().join("").match(reg));
   return(str_arr != null? str_arr.length : '0' );

    
    
  }
  console.log(duplicateCount("adsfasdsa"));