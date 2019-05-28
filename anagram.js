// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. 
// For example:

// ‘abba’ & ‘baab’ == true

// ‘abba’ & ' == true

// ‘abba’ & ‘abbba’ == false

// ‘abba’ & ‘abca’ == false
// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none.
function anagrams(word, words) {
    // your code
    word1 = Array.from(new Set(word.split('')));
    console.log(word1);

    let str = word1.join('+]|[');
    console.log(str);

    let regex = new RegExp("/[" + str + "+]/", "g");
    // words is an array of strings containing words
    let match = words.filter(value => {
        // let regex = /[b+]|[a+]/g
        // if (word.length === value.length) {
        return regex.test(value);
        // }
    });

    return match;
}

console.log(anagrams('aabb', ['aabb', 'bbaa', 'dada', 'abba', 'aaaa']));
