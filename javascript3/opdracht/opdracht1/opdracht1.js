
function controleer(dier) {
    //check het dier
    console.log(dier);
    //lees de leeftijd uit
    let lft = document.getElementById("mijnLeeftijd").value;

    if (dier == "hond") {
        if (lft > 5.5) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Groot!";
            document.getElementById("resultaatImg").src = "arrow-down.gif";
        }

        else if (lft < 5.5) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Klein!";
            document.getElementById("resultaatImg").src = "arrow-up.gif";
        }
        else {
            document.getElementById("uitvoerVeld").innerHTML = "Goedzo!";
            document.getElementById("resultaatImg").src = "ok.gif";
        }
    }

    else if (dier == "gecko") {
        if (lft > 11) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Groot!";
        }

        else if (lft < 11) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Klein!";
        }
        else {
            document.getElementById("uitvoerVeld").innerHTML = "Goedzo!";
        }
    }

    else if (dier == "olifant") {
        if (lft > 1.6) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Groot!";
        }

        else if (lft < 1.6) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Klein!";
        }
        else {
            document.getElementById("uitvoerVeld").innerHTML = "Goedzo!";
        }
    }

    else if (dier == "vlieg") {
        if (lft > 12) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Groot!";
        }

        else if (lft < 12) {
            document.getElementById("uitvoerVeld").innerHTML = "Te Klein!";
        }
        else {
            document.getElementById("uitvoerVeld").innerHTML = "Goedzo!";
        }
    }
}