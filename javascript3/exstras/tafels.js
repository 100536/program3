
function calculateTable(event) {
    event.preventDefault();
    let getalInput = document.getElementById('getal');
    let getalValue = parseInt(getalInput.value);

    if (!isNaN(getalValue)) {
        for (let i = 1; i <= 10; i++) {
            console.log(getalValue + ' x ' + i + ' = ' + getalValue * i);
        }
    } else {
        alert('Please enter a valid number.');
    }
}

function tafel() {
    let getalInput = document.getElementById('getal');
    let getalValue = parseInt(getalInput.value);

    if (!isNaN(getalValue)) {
        let result = '';
        for (let i = 1; i <= 10; i++) {
            result += getalValue + ' x ' + i + ' = ' + getalValue * i + '\n';
        }
        alert(result);
    } else {
        alert('Please enter a valid number.');
    }
}

function tafel(){
    let getal= document.getElementById("getal").value;
    document.getElementById("resaltaat").innerHTML = "";
    for(let i=1; i<=10; i++){
        let antwoord = i * getal;
        document.getElementById("resultaat").innerHTML  += i + " x " + getal + " = " + ant
    }
}