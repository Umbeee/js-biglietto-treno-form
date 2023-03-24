// evento click bottone, collezionare i dati e stamparli

function acquistaBiglietto(){
    let nome = document.getElementById('nomeCognome').value;

    document.getElementById('span-nome').innerHTML = nome;


    let km = parseFloat(document.getElementById('kmViaggio').value);


    let fasciaEta = document.getElementById('fasciaEta').value;
    document.getElementById('span-eta').innerHTML = fasciaEta;

    console.log(nome, km, fasciaEta);
}

