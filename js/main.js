// Palindroma

function isWordPalidrome(word) {
  let isPalindrome = true;
  for (let i = 0; i <= word.length - 1; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

const input = prompt("Inserire una parola");

if (input) {
  const result = isWordPalidrome(input);

  alert(`La parola inserita ${result ? "" : "non "}é palindroma!`);
} else {
  alert("Devi inserire una parola!");
}
