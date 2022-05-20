const students = {

    name : "Paolo",
    age : 30,
    emaik: "paolo@email.it"
};

const {name, email} = students;

// uguale a

// const name = students.name;
// const email = students.email;

// ---------------------------------------

const myArr = [1,24,34,5];

// const firstEl = myArr[0];
// const secondEl = myArr[1];

const [firstEl, secondEl] = myArr;
console.log(firstEl, secondEl);

// ---------------------------------------------
// Rest and Spread
function myFunction(...myArguments) {
    console.log(myArguments);
}
myFunction("uno", 3);

const obj = {name: "palla", peso: 50};
console.log(obj);
const copyObj = {...obj, colore: "blue"};
console.log(copyObj);

// Anche per gli array
const myArr2 = [1,2,35, "asdasd"];
console.log(myArr2);
const myArr2Copy = [...myArr2, "altroitem", 12];
console.log(myArr2Copy);

// -----------------------------------
// JSnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// ++++BONUS creazione nuovo array identico al precedente, ma con aggiunta nuova bc


const myNewArr = [

    {
        "nome" : "bici1",
        "peso" : 10
    },
    {
        "nome" : "bici2",
        "peso" : 15
    },
    {
        "nome" : "bici3",
        "peso" : 20
    },
    {
        "nome" : "bici4",
        "peso" : 25
    },
    {
        "nome" : "bici5",
        "peso" : 30
    },

]

/*
console.log(myNewArr[1].nome);

const [primoEl] = myNewArr;
console.log(primoEl);

const printPage = document.querySelector("header");

let element = `<div>
${primoEl}
</div>`;
printPage.innerHTML = element;
console.log(element);
*/


// ------------------------ Correzione

// destructuring su arr
let [biciLeggera] = myNewArr;
// alternativa
// let biciLeggera = myNewArr[0];

myNewArr.forEach((element) => {
    if (element.peso < biciLeggera.peso) {
        biciLeggera = element;
    }
});

console.log(biciLeggera);

// stampiamo a schermo il risultato
// destructuring su obj (con cambio nome const)
const {peso, nome: bcName} = biciLeggera;

document.querySelector("header").innerHTML =
`
<ul>
    <li>Nome: ${bcName}</li>
    <li>Nome: ${peso}</li>
</ul>`;

// BONUS creazione nuovo array identico al precedente, ma con aggiunta nuova bc

// nuovo obj bc
const nuovaBici = {
        "nome" : "trek",
        "peso" : 7
};

// nuovo arr bici
const bici2 = [...myNewArr, nuovaBici];
// output
console.log("array bici 2", bici2);
console.log("array bici invariato", myNewArr);

// -----------------------------------
// JSnack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

 const mySquad = [
    {
        "nome" : "squadra1",
        "punti fatti" : 0,
        "falli_subiti" : 0
    },
    {
        "nome" : "squadra2",
        "punti fatti" : 0,
        "falli_subiti" : 0
    },
    {
        "nome" : "squadra3",
        "punti fatti" : 0,
        "falli_subiti" : 0
    },
    {
        "nome" : "squadra4",
        "punti fatti" : 0,
        "falli_subiti" : 0
    },
    {
        "nome" : "squadra5",
        "punti fatti" : 0,
        "falli_subiti" : 0
    },
];


mySquad.forEach((element) => {
    element["punti fatti"] = getRandomNumMinMax(1,100);
    element.falli_subiti = getRandomNumMinMax(1,100);
});
console.log("valori delle mie squadre", mySquad);

/*
qui ti manca un modo per ciclare la costante che crei che destruttura le parti che ti interessano

let [mySquadValues] = mySquad;
console.log("solo falli e punti", mySquadValues);
const {["punti fatti"]: puntiFat, ["falli subiti"]: falliSub} = mySquadValues;
console.log("punti fatti:", puntiFat);
console.log("falli subiti:", falliSub);
*/

// alternativa

const newTeams = mySquad.map(
    (element) => {
        // destrutturazione
        const {["punti fatti"]: puntiFat, falli_subiti} = element;
        return {["punti fatti"]: puntiFat, falli_subiti} 
        // sintassi compressa creazione oggetto da ritornare
    }
);

// versione più classica
/*
const newTeams = [];
for (let i = 0; i < mySquad.length; i++) {
    const thisTeam = mySquad[i];

    const {
        nome,
        falli_subiti
    } = thisTeam;

    newTeams.push({
        nome,
        falli_subiti
    });
};
*/

console.log("finale", newTeams);
