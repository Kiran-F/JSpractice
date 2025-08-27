const products = [
    {name: "Black Chair", headline: "Sit comfortably", price: 10000, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Sofa Chair", headline: "Soft chai", price: 13000, image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Transparent Chair", headline: "Clear as water", price: 15500, image: "https://images.unsplash.com/photo-1651983856233-ba269c92bf17?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

let popular = [
    {name: "Outdoor Chair", headline: "Best for outside", price: 8000, image: "https://plus.unsplash.com/premium_photo-1685133855062-d2ab722c4ae0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Sofa Chair", headline: "Soft chai", price: 13000, image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Transparent Chair", headline: "Clear as water", price: 15500, image: "https://images.unsplash.com/photo-1651983856233-ba269c92bf17?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

];

//display products
function addProducts(){
let clutter = '';
products.forEach((product, index) => { //this index is the index of the product that it's working on
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                        <img class="w-full h-full object-cover " src="${product.image}"/>
                    </div>
                    <div class="data w-full px-2 py-5">
                        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                        <div class="flex justify-between w-full items-center mt-2">
                            <div class="w-1/2">
                                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                <h4 class="font-semibold mt-2">Rs.${product.price.toLocaleString('en-IN')}</h4>
                            </div>
                            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                            <i data-index="${index}" class="add ri-add-line"></i></button>
                        </div>
                    </div>
                </div>`
});
    document.querySelector('.products').innerHTML = clutter;
};
addProducts();

//display popular products
function addPopularProducts(){
    let clutter = ""
    popular.forEach((product) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[80%] flex-shrink-0">
                        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                            <img class="w-full h-full object-cover" src= ${product.image} alt="">
                        </div>
                        <div class="data py-2 w-full">
                            <h1 class="leading-none font-semibold">${product.name}</h1>
                            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                            <h4 class="mt-3 font-semibold text-zinc-500">Rs.${product.price.toLocaleString('en-IN')}</h4>
                        </div>
                    </div> `
    });
    document.querySelector('.populars').innerHTML = clutter;
}
addPopularProducts();

//on click on add button, add it to the cart
let cart = [];
function addToCart(){
    document.querySelector('.products').addEventListener('click', (e) => {
        if(e.target.classList.contains('add')){
            console.log(e.target.dataset.index); //this gives the index of the added product
            cart.push(products[e.target.dataset.index]); //this navigates to exact product and push to cart

            //to increase in the cart's number of products
            document.querySelector('#cartItemsNumber').textContent = `${cart.length}`;
        }
        
    });
};
addToCart();

//check cart
function showCart(){
    let cartItemList = document.querySelector('.cartexpand');
    cartItemList.style.display = "none";

    document.querySelector('.carticon').addEventListener('click', () => {
        if(cartItemList.style.display === "none"){
            cartItemList.style.display = "block";
            let clutter = "";
            cart.forEach((product) => {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                                    <img class="w-full h-full object-cover" src="${product.image}"/>
                                </div>
                                <div>
                                    <h3 class="font-semibold">${product.name}</h3>
                                    <h5 class="text-sm opacity-80 font-semibold">Rs.${product.price.toLocaleString('en-IN')}</h5>
                                </div>
                            </div>`
            })
            cartItemList.innerHTML = clutter;
        } else if(cartItemList.style.display === "block"){
            cartItemList.style.display = "none";
        }

    });
};
showCart();