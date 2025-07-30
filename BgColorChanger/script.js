const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
//console.log(buttons); //node list which is eligible for forEach loop
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        if(e.target.id == 'pink'){
            body.style.backgroundColor = 'pink';
            body.style.color = 'black';
        }else if(e.target.id == 'green'){
            body.style.backgroundColor = 'green';
            body.style.color = 'white';
        }else if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }else if(e.target.id == 'purple'){
            body.style.backgroundColor = '#c910c9';
            body.style.color = 'white';
        }
    })
})