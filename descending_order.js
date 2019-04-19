function descendingOrder(n){
    //...
    if (n > 0) {
        let str = n.toString();
        let str_num = str.split("").sort((a,b)=>{return b-a}).join("");
        let result = Number(str_num);
        console.log(result); 
    }
  }

  descendingOrder(344453432);