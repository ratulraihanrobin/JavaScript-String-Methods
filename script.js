const text = 'Hello World';
const charAt = text.charAt(0);
const charCodeAt = text.charCodeAt(0);
const concat = charAt.concat(charCodeAt);
const constructor = text.constructor;
const endsWith = text.endsWith('World');
const fromCharCode = String.fromCharCode(65, charCodeAt);
const includes = text.includes('World'); //The includes() method is case sensitive.
const indexOf = text.indexOf('World'); //The includes() method is case sensitive.
const lastIndexOf = text.lastIndexOf('rld'); //The includes() method is case sensitive.
const length = text.length;
const localeCompare = text.localeCompare(indexOf); // -1 if sorted before, 1 if sorted after, 0 if equal
const match = text.match('orl');
const repeat = text.repeat(2); // The repeat() method returns a new string. The repeat() method does not change the original string.
const replace = text.replace('World', 'Robin');
const replaceAll = text.replaceAll('o', 'O');
const search = text.search('orl'); // The search() method returns the index (position) of the first match. , The search() method returns -1 if no match is found.
const slice = text.slice(0, 5);
const startWith = text.startsWith('Hello');
const substr = text.substr(0, 5);
const toLowerCase = text.toLowerCase();
const toUpperCase = text.toUpperCase();

console.log(
  'charAt() returns the character at a specified index (position) in a string.' +
    ' => ' +
    charAt
);
console.log(
  'charCodeAt() returns the Unicode of the character at a specified position in a string.' +
    ' => ' +
    charCodeAt
);
console.log(
  'The concat() method joins two or more strings.' +
    ' ' +
    'charAt + charCodeAt => ' +
    concat
);
console.log(
  'The constructor property returns the function that created the String prototype:' +
    ' => ' +
    constructor
);
console.log(
  'endsWith() returns true if a string ends with a specified string, otherwise false.' +
    ' => ' +
    endsWith
);
console.log(
  'String.fromCharCode() converts Unicode values to strings.' +
    ' => ' +
    fromCharCode
);
console.log(
  'includes() returns true if a string contains a specified string.' +
    ' => ' +
    includes
);
console.log(
  'indexOf() returns the position of the first occurrence of a value in a string.' +
    ' => ' +
    indexOf
);
console.log(
  'lastIndexOf() returns the index of the last occurrence of a specified value in a string.' +
    ' => ' +
    lastIndexOf
);
console.log(
  'The length property returns the length of a string.' + ' => ' + length
);
console.log(
  'localeCompare() returns one of 3 numbers indicating the sort order.' +
    ' => ' +
    localeCompare
);
console.log('match() searches for a match in a string.' + ' => ' + match);
console.log(
  'repeat() returns a new string with a number of copies of a string:' +
    ' => ' +
    repeat
);
console.log(
  'replace() searches a string for a value, and returns a new string with the specified value(s) replaced:' +
    ' => ' +
    replace
);
console.log('change all lowercase o to uppercase O' + ' => ' + replaceAll);
console.log(
  'search() searches a string for a value and returns the position of the first match:' +
    ' => ' +
    search
);
console.log(
  'slice() extracts a part of a string and returns the extracted part:' +
    ' => ' +
    slice
);
console.log(
  'startsWith() returns true if a string starts with a specified string:' +
    ' => ' +
    startWith
);
console.log('substr() extracts a part of a string:' + ' => ' + substr);
console.log(
  'toLowerCase() converts a string to lowercase letters, using current locale:' +
    ' => ' +
    toLowerCase
);
console.log(
  'toUpperCase() converts a string to uppercase letters, using current locale:' +
    ' => ' +
    toUpperCase
);
