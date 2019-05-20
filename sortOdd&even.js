function mySort(nums){
    let even= [];
    let odd= [];
    let other= [];
    // num is an array
    nums.forEach(element => {
        if (!isNaN(element)){
        (element % 2 !== 0)? odd.push(element): (element % 2 === 0)?even.push(element):false 
        }else{
            other.push(element);
        }
    });
    console.log(other);
return (((odd.sort((a,b)=>{return a-b})).concat(other)).concat(even.sort((a,b)=>{return a-b})))


}
console.log(mySort([1,2,3,'bye',4,5,6,7,8,9]));