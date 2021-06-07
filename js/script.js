var parola = prompt("Inserisci una parola");


// function palindromo(x) {
//     var controllo = false;
//     for (var i = 0; i < x.length / 2; i++) {
//         if (x[i] == x[x.length - 1 - i]) {
//             controllo = true;
//         } else {
//             controllo = false
//         }
//     } return controllo;
// }

// var risultato = palindromo(parola)
// console.log(risultato)

function palindromo(x) {
    var reverse = "";
    for (var i = x.length - 1; i >= 0; i--) {
        reverse += x[i];
    }
    return reverse;
}

var risultato = palindromo(parola);

console.log(risultato);