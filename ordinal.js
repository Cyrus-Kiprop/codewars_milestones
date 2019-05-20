

function numberToOrdinal(n) {
    let result = '';
    if ((/^\d+[0-9]$/g).exec(n)) {
        return result = n + 'th';
    } else {
        if ((/^\d*[1]$/).exec(n)) {
            result = n + 'st';
        } else if ((/^\d*[2]$/).exec(n)) {
            result = n + 'nd';
        } else if ((/^\d*[3]$/).exec(n)) {
            result = n + 'rd';
        } else {
            result = n + 'th';
        }

        
    }
    return `'${result}'`;
}
console.log(numberToOrdinal(9));
