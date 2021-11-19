const keys = document.getElementById("keys");
const clapA = document.getElementById("clap");
const hiHatS = document.getElementById("hihat");
const kickD = document.getElementById("kick");
const openHatF = document.getElementById("openhat");
const boomG = document.getElementById("boom");
const rideH = document.getElementById("ride");
const snareJ = document.getElementById("snare");
const tomK = document.getElementById("tom");
const tinkL = document.getElementById("tink");

document.addEventListener("keypress",(event)=>{
    if(event.code == "KeyA"){
        clapA.play();
    }
    else if (event.code == "KeyS"){
        hiHatS.play();
    }
    else if (event.code == "KeyD"){
        kickD.play();
    }
    else if (event.code == "KeyF"){
        openHatF.play();
    }
    else if (event.code == "KeyG"){
        boomG.play();
    }
    else if (event.code == "KeyH"){
        rideH.play();
    }
    else if (event.code == "KeyJ"){
        snareJ.play();
    }
    else if (event.code == "KeyK"){
        tomK.play();
    }
    else if (event.code == "KeyL"){
        tinkL.play();
    }
})
console.log(clapA)