const rapid = (cadena) => {
    let cadenaLowerCase = cadena.toLowerCase();
    let cadenaSinVocales = removeVowels(cadenaLowerCase);
    let cadenaUpperCase = cadenaSinVocales.toUpperCase();

    return cadenaUpperCase;
};
function removeVowels(string) {
  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (!vowels[letter]) {
      result += string[i];
    }
  };
  return result;
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));