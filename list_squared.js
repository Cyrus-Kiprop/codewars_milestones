//version one
function listSquared(m, n) {
    var arr = [];
    for (var i = m; i <= n; i++) {
        var temp = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) temp += j * j;
        };
        if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
    };
    return arr;
}
//   my version
function listSquared(m, n) {
    let secondArr = [];
    let index = [];
    let result = [];
    for (let i = m; i < n; i++) {
        let result = [];
        let arr1 = [];
        for (let j = 1; j <= i; j++) {
            (i % j === 0) ? result.push(j) : false

        }

        let add = result.reduce((acc, v) => {
            return (acc + v ** 2);

        });

        secondArr.push(add)
        index.push(i)

    }
    secondArr.map((v, i) => {
        let thisArr = [];
        if (Math.sqrt(v) % 1 === 0) {
            thisArr.push(index[i]);
            thisArr.push(v);
            result.push(thisArr);
        }
    })
    return result;



}
console.log(listSquared(42, 250));