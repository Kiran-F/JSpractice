//generate a random color
function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor());

let IntervalId;
function startChangingColor(){
    function colorChangeRepeat (){
        document.querySelector('body').style.backgroundColor = randomColor();
    }
    if (!IntervalId){
        IntervalId = setInterval(colorChangeRepeat, 1000);
    }
}

function stopChangingColor(){
    clearInterval(IntervalId);
    IntervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);