//when form then submit is the event
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault(); //to prevent values to pass to the server
    const height = parseInt(document.querySelector('#height').value); //if store values out of this eventlistener then empty values are stored as soon as the page loads
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const catagory = document.querySelector('#catagory');
    

    if(height === '' || height < 0 || isNaN(height)){
        result.innerText = `Please give a valid height ${height}`;
    } else
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerText = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/1000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
        //checking the catagory
        if(bmi <= 18.6){
            catagory.innerText = 'You are underweight!';
        }else if(bmi > 18.6 && bmi <= 24.9){
            catagory.innerText = 'You are normal.';
        }else if(bmi > 24.9){
            catagory.innerText = 'You are overweight!';
    }

    }
})

