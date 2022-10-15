let sortLetters = word => word.split('').sort().join('');
let anagrams = (word, words) => words.filter(item => (item.length === word.length && sortLetters(word) === (sortLetters(item))));

console.log(anagrams("abba", ["aabb", "abcd", "bbaa"]));
console.log(anagrams("racer", ["crazer", "crazer", "carer", "racar", "racer"]));

