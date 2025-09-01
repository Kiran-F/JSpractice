const textarea = document.querySelector('textarea'),
speechBtn = document.querySelector('button'),
voiceList = document.querySelector('select');

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for (let voice of synth.getVoices()) {
        console.log(voice);
        let selected = voice.name === "Google US English" ? "selected" : ""; //selecting us english as default
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option); // adding option tag before ending of select tag
    }
}

synth.addEventListener('voiceschanged', voices);

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        // if the available device voice name is equal to the user selected voice name then set speech voice to 
        // ... user selected voice
        if (voice.name === voiceList.value) {
            utternance.voice = voice;
        }
    }
    synth.speak(utternance); //speaks the speech/utterance 
}

speechBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (textarea.value !== "") {
        if (!synth.speaking) { //if an utterance/speech is not currently in the process of speaking
            textToSpeech(textarea.value);
        }
        if (textarea.value.length > 80) {
            //if isSpeaking is true then change it's value to false and resume the utterance/speech
            //else change it's value to true and pause the speech
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
            //checking the utterance/speech in speaking process or not in every 100ms
            //if not then set the valur of isSpeaking as true and change the button's text
            setInterval(() => {
               if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
               } 
            }, 100);
        }else{
           speechBtn.innerText = "Convert To Speech"; 
        }
    }
})