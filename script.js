let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    // Gets the voices available for the device
    voices = window.speechSynthesis.getVoices();
    // Sets the first voice available as the default voice    
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Adding change event on drop down for the other voices to work

voiceSelect.addEventListener("change",() =>{
    speech.voice = voices[voiceSelect.value];
})



document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
