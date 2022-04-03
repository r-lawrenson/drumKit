// audio file as variable and use if statement to play audio file
let audioFile = "";
let keyPressClick = "";

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
    let click = (event.target);
    keyPressClick = click.id;
    checkIf()
});

document.addEventListener("keydown", (event) => {
    let keyDown = event.key;
    keyPressClick = keyDown;
    checkIf()
});

const checkIf = () => {
    if (keyPressClick == 1) {
        audioFile = key1
    } else if (keyPressClick == 2) {
        audioFile = key2
    } else if (keyPressClick == 3) {
        audioFile = key3
    } else if (keyPressClick == 4) {
        audioFile = key4
    } else if (keyPressClick == 5) {
        audioFile = key5
    } else if (keyPressClick == 6) {
        audioFile = key6
    } else if (keyPressClick == 7) {
        audioFile = key7
    } else if (keyPressClick == 8) {
        audioFile = key8
    } else if (keyPressClick == 9) {
        audioFile = key9
    }
    playSound();
    clearVars();
};

const playSound = () => {
    audioFile.currentTime = 0;
    audioFile.play();
};

const clearVars = () => {
    audioFile = "";
    keyPressClick = "";
};