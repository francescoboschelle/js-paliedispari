// Palindroma

function isWordPalindrome(word) {
  for (let i = 0; i <= word.length - 1; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      return false;
    }
  }

  return true;
}

const input = prompt("Inserire una parola");

if (input) {
  const result = isWordPalindrome(input);

  alert(`La parola inserita ${result ? "" : "non "}é palindroma!`);
} else {
  alert("Devi inserire una parola!");
}

// Pari e Dispari

function generateRandomScore() {
  return Math.floor(Math.random() * 5 + 1);
}

const choice = prompt("Scegli 'pari' o 'dispari'");

if (choice && (choice === "pari" || choice === "dispari")) {
  const num = Number(prompt("Inserisci un numero da 1 a 5"));

  if (num && !isNaN(num) && 1 <= num <= 5) {
    const sum = num + generateRandomScore();

    alert(
      `Hai ${
        (sum % 2 === 0 && choice === "pari") ||
        (sum % 2 !== 0 && choice === "dispari")
          ? "vinto"
          : "perso"
      }! La tua scelta: ${choice}. Somma: ${sum}`
    );
  } else {
    alert("Devi inserire un numero valido!");
  }
} else {
  alert("Devi inserire un opzione valida!");
}
