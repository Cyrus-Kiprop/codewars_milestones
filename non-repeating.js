function firstNonRepeatingLetter(s) {
    // Add your code here
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // $& means the whole matched string
    }
    let result = [];
    let empty = "";
    if (s !== '') {
        let array = s.split('');
        array.map((v, i) => {
            // return an array
            let escape = escapeRegExp(v);
            let regEx = new RegExp(escape, "gi");
            let matched = s.match(regEx);

            (matched.length === 1) ? result.push(v) : false
        });
        if (result.length === 0) {
            return empty;
        }
        else {
            return result[0];
        }
    } else {

        return empty;
    }

    console.log(firstNonRepeatingLetter('[]fdjkfd[]'));