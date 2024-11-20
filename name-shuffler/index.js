function nameShuffler(str){
    return str.split(' ').reduce((reversed, word) => word + ' ' + reversed, '').trim();
}

console.log(nameShuffler('john McClane'));
