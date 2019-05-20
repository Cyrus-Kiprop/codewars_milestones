let number_game = (x, y) => {
    let result = [];
    if (x > y) {
        for (let i = y + 1; i < x; i++) {
            if (i % 2 === 0) {
                result.push(i);
            }
        }
    } else {
        for (let j = x + 1; j < y; j++) {
            if (j % 2 !== 0) {
                result.push(j);
            }
        }
    }
    return result;
}
console.log(number_game(30, 20));
