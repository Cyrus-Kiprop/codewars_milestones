
function removearr(arr) {
    const emptyArr = [];
    arr.forEach((i) => {
     if (Array.isArray(i)) {
        function recurse(arr1){
            return arr1.forEach((element)=>{
                if (Array.isArray(element)) {
                    return recurse(element);
                }else{
                    emptyArr.push(element)
                }
            })
        }
        return recurse(i)
      }
      if (!Array.isArray(i)) {
        //  i.forEach(element=>emptyArr.push(element));
        emptyArr.push(i);
      }
    });
    return emptyArr;
  }
  console.log(removearr([1, 2, [3, 4, [5,6,[7,8]]],9]));

  // using RegEx 
function spread(arrays){
let arr6=[];
let result = ((arrays.join('').replace(/\[|\]|\,/gim, '')).split(''));
result.forEach(value=>arr6.push(Number(value)));
return arr6;
}
// call the fuction with a nested array
console.log(spread([1, 2, [3, 4, [5,6,[7,8]]],9]));
