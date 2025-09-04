// calculator code
const display = document.querySelector("#display")
const btn = document.querySelectorAll(".btn")
const operators = document.querySelectorAll(".operator-btn")
const calculateKey = document.querySelector("#calculate")
const clearBtn = document.querySelector("#clear")

btn.forEach((item) => {
    item.addEventListener("click", (e) => {
        // console.log(e.target.innerText);
        display.value += e.target.innerText
    })
})
// operators.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         // console.log(e.target.innerText);
//         display.value += e.target.innerText
//     })
// })

calculateKey.addEventListener("click", () => {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
})
clearBtn.addEventListener("click", () => {
    display.value = ""
})