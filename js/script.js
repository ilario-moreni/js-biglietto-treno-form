let numOfKm, fullName, fullPrice, finalPrice, eta;

const submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    numOfKm = document.getElementById('numOfKm').value;

    fullName = document.getElementById('name').value;



    document.getElementById('output_name').innerHTML = fullName;

    numOfKm = parseFloat(numOfKm);
    console.log(numOfKm)

    fullPrice = 0.21 * numOfKm;

    console.log(fullPrice);
    
    eta = document.getElementById('my_select').value;
    if( eta == 'minorenne' ){
        finalPrice = fullPrice * 0.8;
        document.getElementById('ticket_type').innerHTML = 'Biglietto Scontato'
    } else if (eta == 'over' ){
        finalPrice = fullPrice * 0.6;
        document.getElementById('ticket_type').innerHTML = 'Biglietto Scontato'
    } else {
        finalPrice = fullPrice;
        document.getElementById('ticket_type').innerHTML = 'Biglietto Standard'
    }
    console.log(eta);
    finalPrice = finalPrice.toFixed(2);
    document.getElementById('finalPrice').innerHTML = finalPrice+'€';
});
