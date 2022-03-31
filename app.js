let audioFile = "";
let keyDownPress = "";
// place var outside eventListener for function to access

let key1 = document.getElementById("boom");
let key2 = document.getElementById("clap");
let key3 = document.getElementById("hihat");
let key4 = document.getElementById("kick");
let key5 = document.getElementById("openhat");
let key6 = document.getElementById("ride");
let key7 = document.getElementById("snare");
let key8 = document.getElementById("tink");
let key9 = document.getElementById("tom");

// document.addEventListener("click", (event) => {
//     let click = event.target // get event
//     keyDownPress = click // send event to outside variable keydown press
//     checkIf(); 
// });

document.addEventListener("keydown", (event) => {
    let keyDown = event.key // get event
    keyDownPress = keyDown // send event to outside variable keydown press
    checkIf(); 
});

function checkIf() {
    if (keyDownPress == 1) {
        audioFile = key1
        playSound();
    } else if (keyDownPress == 2) {
        audioFile = key2
        playSound();
    } else if (keyDownPress == 3) {
        audioFile = key3
        playSound();
    } else if (keyDownPress == 4) {
        audioFile = key4
        playSound();
    } else if (keyDownPress == 5) {
        audioFile = key5
        playSound();
    } else if (keyDownPress == 6) {
        audioFile = key6
        playSound();
    } else if (keyDownPress == 7) {
        audioFile = key7
        playSound();
    } else if (keyDownPress == 8) {
        audioFile = key8
        playSound();
    } else if (keyDownPress == 9) {
        audioFile = key9
        playSound();
        }
        clearVars()
};

function playSound() {
    audioFile.pause()
    audioFile.currentTime = 0
    audioFile.play()
    
};

function clearVars() {
    audioFile = "";
    keyDownPress = "";
}