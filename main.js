import {paros} from "./fuggvenyek.js"

//console.log(paros(5))

/* függvény elött is meglehet hívni a függvényt, mert úgy is működik */

/* var let cons - hatókörök */
//console.log(szam); // szam --> undefined (var-nál)
//console.log(szam); // szam --> hibaüzenet -  nem fut tovább a program - initialization (let-nél)

/* var - ra deklarált változók esetén is működik a hoisting vagyis a felemelés, ami azt jelenti, 
hogy a a deklaráció olyan, mintha a hatókörén kívül történt volna az értékadása abban a sorban történik, 
ahova azt leírtuk*/
/* a var - ral deklarált változó hatóköre modul szintű vagy lehet függvény szintű */
/* var hatóköre függvény szintű és fájl szintű
let hatóköre blokk szintű azaz egy kapcsoszárójelen {} belül van értelmezve */
let szam = 12;

function fv1(){
    let szam = 5;
    console.log(szam);
    let masikszam = 23;
    console.log(masikszam);
}

//console.log(masikszam); // hibaüzenet - reference error
//console.log(szam);
//fv1();

function fv2(){
    let x = 2
    {
        let x = 3
        console.log(x)
    }
    // let x = 4 - nem fogja engedni a let miatt
    console.log(x)
}

//fv2()

function fv3(){
    for (let index = 0; index < 3; index++) {
        console.log(index)
    }
    console.log(index)
}

//fv3()

function fv4(szam){
    /* ternális operátorral oldd meg! */
    /* A függvény adja vissza a 3-mal való osztási maradékát */
    let szoveg = "";
    szam % 3 === 0 ? (szoveg = "nulla") : szam % 3 === 1 ? (szoveg = "egy") : (szoveg = "kettő" );
    /* 
    szam % 3 === 0  --> első feltétel
    ? (szoveg = "nulla") --> ha a feltétel igaz
    : (szam % 3 === 1) --> ha hamis, akkor megint meg kell vizsgálni
    ? (szoveg = "egy")
    : (szoveg = "kettő" )); 
    */
    return szoveg;
    // szoveg: "nulla", "egy", "kettő"
}

console.log(fv4(4))