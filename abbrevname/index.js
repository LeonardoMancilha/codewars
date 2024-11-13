function abbrevName(name){
  return name.match(/\b(\w)/g).join('.').toUpperCase();
}
