// evento click bottone, collezionare i dati e stamparli

function acquistaBiglietto(){
    let nome = document.getElementById('nomeCognome').value;

    document.getElementById('span-nome').innerHTML = nome;


    let km = parseFloat(document.getElementById('kmViaggio').value);


    let fasciaEta = document.getElementById('fasciaEta').value;
    document.getElementById('span-eta').innerHTML = fasciaEta;

    console.log(nome, km, fasciaEta);


    const prezzoAlKm = 0.21;
    let costo = km * prezzoAlKm;

    if(fasciaEta == 'over_65'){
        costo = costo * 0.6;
        costo = costo.toFixed(2);
    }else if(fasciaEta == 'minorenne'){
        costo = costo * 0.8;
        costo = costo.toFixed(2);
        }else{
        costo = costo.toFixed(2);
    }
    document.getElementById('span-costo').innerHTML = costo + ' €';

    let carrozza = Math.floor(Math.random() * 10) + 1;

    document.getElementById('span-carrozza').innerHTML = carrozza;

    let codice = Math.floor(Math.random () * 10000) +1;

    document.getElementById('span-codice').innerHTML = codice;
}

