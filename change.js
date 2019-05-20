// function countChange(money, coins, money) {

//     if(money === 0) return 1; // Perfect!

//     if(money < 0) return 0; // No solution exists for negative money

//     if(coins < 0 && money > 0) return 0; // We don't have coins left!

//     return countChange(money, coins, money - money[coins]) + 
//            countChange(money, coins - 1, money);
// }

// var money = [1, 2, 3];
// var money = 4;
// console.log(countChange(money, money.length - 1, money));
// // console.log(countChange(money,money));

function countChange(money, coins) {

    var possibleWays = [];
    for (var i = 0; i <= money; i++) {
        possibleWays[i] = 0;
    }

    possibleWays[0] = 1;

    for (var j = 0; j < coins.length; j++) {

        var coin = coins[j];

        for (var i = coin; i <= money; i++) {
            var emainder = i - coin;

            possibleWays[i] += possibleWays[emainder];
        }
    }

    return possibleWays[money];
}

var coins = [1, 2, 3];
var money = 4;
console.log(countChange(money, coins));