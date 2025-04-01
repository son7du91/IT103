function words(str) {
    str = str.toLowerCase();
    str = str.replace(/\b\w/g, c => c.toUpperCase());
    return str;
}
console.log(words("hello WORLD"));
console.log(words("rIKKei acaDEMy"));
