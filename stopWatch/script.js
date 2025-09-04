window.addEventListener('load', () => {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendtens = document.querySelector('#tens'); 

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');

    let interval;
    const startTimer = () => {
        tens++;
        if(tens<=9){
            appendtens.innerHTML = '0' + tens;
        }
        if(tens > 9){
            appendtens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendtens.innerHTML = '0' + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    }
    startBtn.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(interval);
    });

    resetBtn.addEventListener('click', () => {
        minutes = 0;
        seconds = 0;
        tens = 0;

        appendtens.innerHTML = '0' + 0;
        appendSeconds.innerHTML = '0' + 0;
        appendMinutes.innerHTML = '0' + 0;
    })
});

