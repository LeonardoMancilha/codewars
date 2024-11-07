function switchItUp(number){
    const wordsNumbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    if (number <= 0 || number > 9) return 'Zero';
    
    return wordsNumbers[number - 1];
}
