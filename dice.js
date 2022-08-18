document.querySelector("button").addEventListener("click", checkWinner)


function checkWinner(){
    const randoms = Math.floor(Math.random() * 6) + 1
const randomImage = "dice" + randoms + ".png"
const imageSource = "images/" + randomImage
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", imageSource)
// set random element for image2
const random2 = Math.floor(Math.random() * 6) + 1
const imageSource2 = "images/" + "dice" + random2 + ".png"

let image2 = document.querySelectorAll("img")[1]
var a = image2.setAttribute("src", imageSource2)

if (randoms > random2){
    document.querySelector("h1").innerHTML = "🚩🚩player 1 wins"
}else if (random2 > randoms){
    document.querySelector("h1").innerHTML = "palyer 2 wins🚩🚩"
}else{
    document.querySelector("h1").innerHTML = "🚩Draw!!!🚩"

}

}    