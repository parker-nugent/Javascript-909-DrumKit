//Checking the code
console.log("Welcome to the 909");

window.addEventListener('keydown', function(e){
    //checking the code
    console.log(e.keyCode);
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //chekcing the code
    
    console.log(audio);
    //stoping the function from running if other keys are clicked that are not part of the Event
    if(!audio) return; // !audio means NO AUDIO on specific key
    audio.currentTime = 0; //rewinding audio to start
    audio.play();
    console.log(key);
    key.classList.add('playing');
    
})

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
