const addBtn = document.querySelector(".addBtn")
const input = document.querySelector(".input-task")
const listContainer = document.querySelector(".list-container")


addBtn.addEventListener("click", () => {
    if(input.value == ""){
        alert("Enter a task!")
    }else{
        let li = document.createElement("li")
        li.innerText = input.value
        listContainer.append(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.append(span)
    }
    input.value = ""
    saveData()
})
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()