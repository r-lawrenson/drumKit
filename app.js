document.addEventListener("keydown", (event) => {
    let keyNumber = event.key
    let key1 = document.getElementById("key1");

    // keyPressed.innerHTML = keyNumber
    
    if (keyNumber == 1) {
        // hmm how do you restart the audio everytime the key is pressed?

        playSound()
    } else {}

})


function playSound() {
    key1.pause()
    key1.currentTime = 0 // CAPITAL T!! tada moment...
    key1.play()
}