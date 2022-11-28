
let numOfKm;

const submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    numOfKm = document.getElementById('numOfKm').value;
    document.getElementById('output_km').innerHTML = numOfKm;
    console.log(numOfKm)
});



numOfKm = parseFloat(numOfKm);

let fullName = document.getElementById('name');


/* let age = prompt('Inserisci la tua età:');

age = parseFloat(age);

console.log(`${age}: età del passeggero`);


let fullPrice = 0.21 * numOfKm;

console.log(`${fullPrice}: prezzo pieno`);


let youthSale, seniorSale, finalPrice;

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



let finalSentece = `Il prezzo del biglietto è di ${finalPrice}€`;

console.log(finalSentece)


document.getElementById('ticketPrice').innerHTML = finalSentece;
 */