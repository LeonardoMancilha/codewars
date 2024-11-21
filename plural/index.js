const language = new Intl.PluralRules('en');

function plural(number) {
    const pluralCategory = language.select(number);
  
    switch (pluralCategory) {
    case 'one':
      return false;  // Para 1 item
    case 'other':
      return true;  // Para outros números
  }
}

console.log(plural(Infinity));