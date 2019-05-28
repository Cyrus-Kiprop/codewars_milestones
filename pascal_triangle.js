function pascal(numRows) {
    pascalTriangle = [];
    for (let i = 0; i < numRows; i++) {
        pascalTriangle[i] = new Array(i + 1);
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
            }


        }
    }

    let arr1 = [];
    let result = ((pascalTriangle.join('').replace(/\[|\]|\,/gim, '')).split(''));
    result.forEach(value => arr1.push(Number(value)));
    return arr1;


}
console.log(pascal(4));
