function sayHello( name, city, state ) {
    return `Hello, ${Array.isArray(name) ? name.join(' ') : name.replace(/,\s*/, ' ')}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
