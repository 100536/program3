let encodedText = ""; // Variabele om de gecodeerde tekst op te slaan

function encodeText() {
    let input = document.getElementById("inputField").value;
    let output = "";

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        let encodedCharCode = charCode + 1;

        if (encodedCharCode > 122) {
            encodedCharCode = 97;
        }

        if (input[i] === " ") {
            output += " ";
            continue;
        }

        output += String.fromCharCode(encodedCharCode);
    }

    encodedText = output; // Sla de gecodeerde tekst op
    document.getElementById("outputField").value = output;
}
