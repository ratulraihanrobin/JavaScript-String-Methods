const text = 'Hello World';
const charAt = text.charAt(0);
const charCodeAt = text.charCodeAt(0);
const concat = charAt.concat(charCodeAt);
const constructor = text.constructor;
const endsWith = text.endsWith('World');

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
