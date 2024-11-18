function capitalizeWord(word) {
    /*
    const firstChar = word[0];
    const convertFirstCharToUppercase = word[0].toUpperCase();
    const restOfWord = word.replace(firstChar, convertFirstCharToUppercase);
    
    return restOfWord;
    */
    
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const sentence = 'a';
const first = sentence[0];
const firstLetter = sentence[0].toUpperCase();
const joinStrings = sentence.replace(first, firstLetter);

console.log(sentence);
console.log(firstLetter);
console.log(joinStrings);
