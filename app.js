document.addEventListener("keydown", (event) => {
    let keyNumber = event.key
    let key1 = document.getElementById("key1");
    let key2 = document.getElementById("key2");
    // keyPressed.innerHTML = keyNumber
    
    if (keyNumber == 1) {
        // hmm how do you restart the audio everytime the key is pressed?

        key1.pause()
        key1.currentTime = 0 // CAPITAL T!! tada moment...
        key1.play()

        // playSound()
        
    } else if (keyNumber = 2) {
        key2.pause()
        key2.currentTime = 0 // CAPITAL T!! tada moment...
        key2.play()
    }

})


// function playSound() {
//     key1.pause()
//     key1.currentTime = 0 // CAPITAL T!! tada moment...
//     key1.play()
// }