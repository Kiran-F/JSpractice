//selecting all required elements...

const wrapper = document.querySelector('.wrapper');
const toast = wrapper.querySelector('.toast');
const wifiIcon = wrapper.querySelector('.icon');
const title = wrapper.querySelector('.details span');
const subTitle = wrapper.querySelector('.details p');
const closeIcon = wrapper.querySelector('.close-icon');

window.onload = () => {
    function ajax(){
        let xhr = new XMLHttpRequest(); //creating new xml object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request to this URL
        xhr.onload = (e) => { //once ajax loaded
            // if ajax status is 200 or less than 300, it means the user is getting the data/response using the URL
            // in other words user is online and getting the response
            if(xhr.status == 200 && xhr.status < 300){
                console.log("Online");
                toast.classList.remove("offline");
                title.innerText = "You're back online";
                subTitle.innerText = "Hurray! internet is connected.";
                wifiIcon.innerHTML = '<i class="fa-solid fa-wifi"></i>';

                closeIcon.addEventListener('click', () => {
                    wrapper.classList.add("hide");
                });

                setTimeout(() => {
                   wrapper.classList.add("hide"); 
                }, 5000); //after 5 seconds wrapper will be hidden automatically


            }else { //user isn't online or may getting some error
                offline();
            }
        }
        xhr.onerror = (e) => { // if the passed URL is incorrect or returning 404 or other error
            console.log("Offline");
            offline();
        }
        xhr.send();
    }
    function offline(){
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Oops! internet is disconnected.";
        wifiIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    //putting ajax call in setInterval so that if automatically refreshes the page and notifies the network
    //status without any manual refresh of browser window.
    setInterval(() => {
        ajax();
    }, 100);
}
