function odd(num) {
    if (num % 2 != 0 && num > 1) {
        var i;

        for (i = 1; i < num; i += 2) {
            var empty = "";

            function printX(val) {

                for (j = 0; j < val; j++) {
                    empty += 'x';
                }
                console.log(empty);
            }

            printX(i);
        }
        for (x = num; x > 0; x -= 2) {
            var empty1 = "";

            function printX2(val2) {

                for (let j = val2; j > 0; j++) {
                    empty1 += 'x';
                }
                console.log(empty1);
            }

            printX2(x);
        }
    }
}
console.log(odd(9));