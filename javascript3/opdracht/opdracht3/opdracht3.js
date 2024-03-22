window.addEventListener("keypress", function(event) 
{
    if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
        playLetterSound(event.key); 
    } else if (event.key === " ") { 
        pauseAllSounds();
    }

    console.log(event);
    document.getElementById("tekst").innerHTML = "Key Pressed: " + event.key + "<br>";
});



function playLetterSound(key) {
    let audio;
    switch(key.toLowerCase()) { 
        case 'w':
            audio = document.getElementById("audioW");
            break;
        case 'a':
            audio = document.getElementById("audioA");
            break;
        case 's':
            audio = document.getElementById("audioS");
            break;
        case 'd':
            audio = document.getElementById("audioD");
            break;
        default:
            return; 
    }
    audio.pause(); 
    audio.currentTime = 0; 
    audio.play(); 
}

function pauseAllSounds() {
    var audioW = document.getElementById("audioW");
    var audioA = document.getElementById("audioA");
    var audioS = document.getElementById("audioS");
    var audioD = document.getElementById("audioD");
    
    audioW.pause();
    audioA.pause();
    audioS.pause();
    audioD.pause();
}