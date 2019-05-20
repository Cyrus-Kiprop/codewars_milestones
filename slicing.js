function slice(array) {
    let result = 0;
    function recurse(array) {
        if (array.length > 0) {
            result += 1;
            console.log(array.length);
            return recurse(array.slice(5))

        } 

        return result;

    }recurse(array);

}
console.log(slice([1, 2, 3, 4, 5, 6, 7, 7]));
