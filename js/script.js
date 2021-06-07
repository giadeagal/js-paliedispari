var parola = prompt("Inserisci una parola");

function palindromo(x) {
    for (i = 0; i < x.length / 2; i++) {
        console.log(x[i])
    };
    for (i = x.length; i >= i.length / 2 ; i--) {
        console.log(x[i])
    };
};

palindromo(parola);
