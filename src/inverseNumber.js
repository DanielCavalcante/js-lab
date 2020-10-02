function checkPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log(`A palavra: ${str} é panlindromo!`);
  } else {
    console.log(`A palavra: ${str} não é panlindromo!`);
  }
}

checkPalindrome("anna");
checkPalindrome("subinoonibus");
checkPalindrome("kayak");
checkPalindrome("toroudento");
