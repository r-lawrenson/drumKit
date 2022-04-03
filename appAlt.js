// this is a copy of app.js to test an array to get the audio tag with no if statement
// WOW this works...
let audioFile = "";
let keyPressClick = "";

const audioFileName = [
    "boom",
    "clap",
    "hihat",
    "kick",
    "openhat",
    "ride",
    "snare",
    "tink",
    "tom"
];

document.addEventListener("click", (event) => {
    keyPressClick = (event.target).id;
    getAudioFile();
});

document.addEventListener("keydown", (event) => {
    keyPressClick = event.key;
    getAudioFile();
});

function getAudioFile() {
    audioFile = document.getElementById(`${audioFileName[keyPressClick-1]}`);
    playSound();
    clearVars();
};

function playSound() {
    audioFile.currentTime = 0;
    audioFile.play();
};

function clearVars() {
    audioFile = "";
    keyPressClick = "";
};