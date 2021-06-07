var parola = prompt("Inserisci una parola");
var palindromo = false;

function palin(parola) {
    for (i = 0; i<parola.length/2; i++) {
        if (parola.charAt(i) == parola.charAt(i + parola.length / 2 -1)) {
            return true;
        }
    }
}
console.log(palindromo)