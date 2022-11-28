/* 1 */

let numOfKm = prompt('Inserisci i kilometri da percorrere:');

numOfKm = parseFloat(numOfKm);

console.log(`${numOfKm}: numero di kilometri`)

/* 2 */

let age = prompt('Inserisci la tua età:');

age = parseFloat(age);

console.log(`${age}: età del passeggero`);

/* 3 */

let fullPrice = 0.21 * numOfKm;

console.log(`${fullPrice}: prezzo pieno`);

/* 4 */

let youthSale, seniorSale, finalPrice;

/* il sottraendo (20 e 40) corrisponde allo sconto applicato */
youthSale = (100 - 20) / 100;
console.log(`${youthSale}: sconto per minorenni`);


seniorSale = (100 - 40) / 100;
console.log(`${seniorSale}: sconto per anziani`);



if (age < 18){
    finalPrice = fullPrice * youthSale
} else if (age > 65){
    finalPrice = fullPrice * seniorSale
} else{
    finalPrice = fullPrice
}

console.log(`${finalPrice}: prezzo scontato non arrotondato`);

finalPrice = finalPrice.toFixed(2);


/* 5 */

let finalSentece = `Il prezzo del biglietto è di ${finalPrice}€`;

console.log(finalSentece)

/* 6 (bonus) */

document.getElementById('ticketPrice').innerHTML = finalSentece;