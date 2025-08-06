let firstName: string = "john";
let lastName: string = "doe";

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = `${firstName} ${lastName}`;

console.log(fullName);
