const colours = ["blue", "green", "yellow", "pink", "red", "orange", "purple"]
const mainBtn = document.querySelector(".main-btn")
const colour = document.querySelector('.colour')

mainBtn.addEventListener("click", function(){
    const randomNumber = createRandomNumber()
    document.body.style.backgroundColor = colours[randomNumber]
    colour.textContent = colours[randomNumber]
    
})

function createRandomNumber(){
    return Math.floor(Math.random() * colours.length)
}