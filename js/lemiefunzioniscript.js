/*
creare un alert dopo tot secondi
var seconds = parseInt(prompt("Quanto manca alla cottura della pasta?"));
setTimeout(() => alert("la pasta è pronta!!"), seconds * 1000);
*/

/*
// creare un cronometro
var clock;
const divEl = document.getElementById("grid"); 
const startBtn = document.getElementById("mystart");
const endBtn = document.getElementById("myend");

// click che fa partire il tempo e aumenta di secondo in secondo
startBtn.addEventListener("click",

    ()=> {
        let time = 0;
        clock = setInterval(
            function() {
                time++;
                divEl.innerHTML = time;
            }
        , 1000);
    }

);

endBtn.addEventListener("click", 

    ()=> {
        clearInterval(clock);
    }
)
*/


/*
creare un countdown
const divEl = document.getElementById("grid");
let seconds2 = 10;
const counting = setInterval(conteggio, 1000);
*/
// funzione che crea un countdown
function conteggio() {

    divEl.innerHTML = seconds;

    if (seconds === 0) {

        // clearInterval ti ferma il setInterval
        clearInterval(counting);
        alert("Buon anno");

    } else{
        
        seconds--;
        // seconds = seconds - 1;
    }
}


// funzione che pusha numeri che scegli te da un min ad un max sempre diversi nell'array della dimensione che dai te
function createRandUniqueNumArr(numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let randNumInt = getRandomNumMinMax(min, max);
        if(!arrInt.includes(randNumInt)){
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}


// funzione che crea un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


// funzione che controlla se un numero è pari o dispari
function pariODispari(numeroCheck) {
    // ritorna una stringa "pari" se il numero passato è pariODispari, sennò dispari
    let risultato;
    if (numeroCheck % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    return risultato;
}


// funzione che crea 16 numeri casuali senza doppioni e nel range della difficoltà scelta
function getRandomBombMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}

// funzione che controlla se la parola è palindroma o no
/*
let myWord = prompt("Inserisci una parola");
console.log(myWord);

let palindromaResult = palindroma(myWord);
console.log(palindromaResult);
*/
// funzione che controlla se la parola è palindroma o no
function palindroma(wordCheck) {

    // prendo la parola, la divido in singole lettere minuscole, la inverto e la converto in stringa
    let myWordChecking = myWord.toLowerCase().split("").reverse().toString();
    console.log(typeof myWordChecking);
    console.log(typeof myWord);

    // con questa operazione condizionale controllo se la parola inserita (anch'essa divisa in singole lettere minuscole e convertita in stringa) è uguale alla variante creata sopra
    if (myWordChecking === myWord.toLowerCase().split("").toString()) {
        return "La parola è palindroma.";
    } else {
        return "La parola non è palindroma.";
    }
}