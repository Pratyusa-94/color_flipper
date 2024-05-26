const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const mainBtn = document.querySelector(".main-btn")
const colour = document.querySelector(".colour") 

mainBtn.addEventListener('click',function(){
    let hexColour = "#"
    for(let i = 0; i < 6; i++){
       hexColour += hex[createRandomNumber()] 
    }
    document.body.style.backgroundColor = hexColour
    colour.textContent = hexColour
})

function createRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
