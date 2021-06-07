var parola = prompt("Inserisci una parola");
var firstHalf = [];
var secondHalf = [];

function palindromo(x) {
    for (i = 0; i < x.length / 2; i++) {
        firstHalf.push(x.charAt(i))
    };
    for (i = x.length; i >= i.length / 2 + 1; i--) {
        secondHalf.push(x.charAt(i));
    };
};

palindromo(parola);

console.log(firstHalf + secondHalf);