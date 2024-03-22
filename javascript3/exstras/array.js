let getallen = new Array;
function voegToe(){


    let getal = document.getElementById("getalVeld").value
    getallen.push(getal);

    console.log(getallen);

    let aantal = getallen.length;

    document.getElementById("resultaat").innerHTML = aantal + "elementen.<br/>";
    for(let i=0; i<aantal; i++)
    {
        document.getElementById("resultaat").innerHTML += getallen[i] + "<br/>";
    }
}