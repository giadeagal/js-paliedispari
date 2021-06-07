var choice = prompt("pari o dispari?");
var userNum = parseInt(prompt("Inserisci un numero"));
var pcNum = getRandom(1, 5);
var totalNum = userNum + pcNum; 
var oddResult = isOdd(totalNum)

function getRandom(x, y) {
    return Math.floor(Math.random() * (x - y + 1) ) + y;
}

function isOdd(x) {
    var evenOdd = "";

    if (x % 2 != 0) {
        evenOdd = true
    } else {
        evenOdd = false
    }

    return evenOdd
}

if (choice == "pari" && oddResult == false) {
    document.getElementById("printer").innerHTML = "Hai vinto";
} else if (choice == "dispari" && oddResult == true){
    document.getElementById("printer").innerHTML = "Hai vinto";
} else {
    document.getElementById("printer").innerHTML = "Hai perso";
}


console.log(choice + " - choice")
console.log(userNum + " - userNum")
console.log(pcNum + " - pcNum")
console.log(totalNum + " - totalNum")
console.log(oddResult + " - result")