function phraseParser(phrase){
    return {
        characters: phrase.length,
        words: phrase.replace("\n", " ").split(" ").length,
        lines: phrase.split("\n").length,
    }
}

console.log(phraseParser("Once Upon a time"));
console.log(phraseParser("Once Upon a time\nto testando isso aqui"));