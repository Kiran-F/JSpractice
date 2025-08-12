startChangingColor//random color generation
const newColor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color
}
let intervalId;
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')

function startChangingColor() {
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = newColor()
        }, 1000);
}
function stopChangingColor() {
    clearInterval(intervalId);
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);