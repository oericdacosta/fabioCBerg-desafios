let capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

function hashtagGenarator(string){
    let words = string.split(" ");
    for(let i in words){
        words[i] = capitalize(words[i]);
    }
    string = words.join('');
    return `#${string}`;
}

console.log(hashtagGenarator("javascript challenges"));
console.log(hashtagGenarator("formatting strings"));
console.log(hashtagGenarator("uppercase first letter"));