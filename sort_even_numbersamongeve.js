function sortOdd(array){
        if (array.join(',').match(/\b\d*[13579]+\b/gi) != null) {
        let sorted_arr = (array.join(',').match(/\b\d*[13579]+\b/gi)).sort((a,b)=>{return a-b;});
        let result = [];
        for (let i = 0; i < sorted_arr.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] % 2 != 0) {
                    result.push(Number(sorted_arr[i]));
                    i++;
                } else {
                    result.push(array[j]);
                }  
            } 
        }
        return result;
    }else {
        return array;
    }
   
}
console.log(sortOdd([9,2,7,1,6,0]));// -->[ 1, 2, 7, 9, 6, 0 ];