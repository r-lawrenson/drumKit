let audioFile = "";
let keyPressClick = "";
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

document.addEventListener("click", (event) => {
    click = (event.target);
    keyPressClick = click.id // really?
    checkIf()
});

document.addEventListener("keydown", (event) => {
    let keyDown = event.key
    keyPressClick = keyDown // send to outside variable
    checkIf(); 
});

function checkIf() {
    if (keyPressClick == 1) {
        audioFile = key1
        playSound();
    } else if (keyPressClick == 2) {
        audioFile = key2
        playSound();
    } else if (keyPressClick == 3) {
        audioFile = key3
        playSound();
    } else if (keyPressClick == 4) {
        audioFile = key4
        playSound();
    } else if (keyPressClick == 5) {
        audioFile = key5
        playSound();
    } else if (keyPressClick == 6) {
        audioFile = key6
        playSound();
    } else if (keyPressClick == 7) {
        audioFile = key7
        playSound();
    } else if (keyPressClick == 8) {
        audioFile = key8
        playSound();
    } else if (keyPressClick == 9) {
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
    keyPressClick = "";
};