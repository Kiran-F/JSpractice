let arr=[
    {name: "petals of roses", image: "https://images.unsplash.com/photo-1585768750637-ada36319a484?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "animals of town", image: "https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Crowd of City", image: "https://images.unsplash.com/photo-1565191826792-50cf68b0a95f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "fruits of planet", image: "https://plus.unsplash.com/premium_photo-1674228288354-40143dd296b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Professional girl", image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "cake", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "chocolate cake", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "laptop", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "sofa", image: "https://images.unsplash.com/photo-1630585308572-f53438fc684f?q=80&w=521&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "dining table", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

function showTheCards(){
    let clutter = "";
    arr.forEach((obj) => {
        clutter += `<div class="box">
                        <img class="cursor-pointer" src="${obj.image}" alt="image">
                        <div class="caption">Lorem ipsum </div>
                    </div>`
    })
    document.querySelector('.container').innerHTML = clutter;
}

function searchFunctionality(){
    const input = document.querySelector('#searchinput');
    const searchdropdown = document.querySelector('.searchdata');

    input.addEventListener('focus', function(){
        //when the input field is focused, rest of the screen gets dim
        document.querySelector('.overlay').style.display = "block";
        //for displaying the list below the input field which starts with the input.value
        input.addEventListener('input', function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        console.log(filteredArray);
        let clutter = '';
        filteredArray.forEach(obj => {
            clutter += `<div class="res flex px-8 py3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="semi-bold">${obj.name}</h3>
                        </div>`
        });
        searchdropdown.style.display = 'block';
        searchdropdown.innerHTML = clutter;
    });
    });
    //to hide the overlay div and the searchdrop down
    input.addEventListener('blur', function(){
        document.querySelector('.overlay').style.display = "none";
        searchdropdown.style.display = "none";
    });
}
searchFunctionality();
showTheCards();