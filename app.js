let keyDownClick = ""
// place var outside eventListener for function to access
document.addEventListener("keydown", (event) => {

    
    let keyNumber = event.key
    let key1 = document.getElementById("boom");
    let key2 = document.getElementById("clap");
    // keyPressed.innerHTML = keyNumber
    
    if (keyNumber == 1) {
        // hmm how do you restart the audio everytime the key is pressed?

        keyDownClick = key1
        // keyDownClick.pause()
        // keyDownClick.currentTime = 0
        // keyDownClick.play()

        playSound()

    } else if (keyNumber = 2) {
        key2.pause()
        key2.currentTime = 0 // CAPITAL T!! tada moment...
        key2.play()
    }

})


function playSound() {
    keyDownClick.pause()
    keyDownClick.currentTime = 0
    keyDownClick.play()
}