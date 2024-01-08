const text = 'Hello World';
const charAt = text.charAt(0);
const charCodeAt = text.charCodeAt(0);
const concat = charAt.concat(charCodeAt);

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
