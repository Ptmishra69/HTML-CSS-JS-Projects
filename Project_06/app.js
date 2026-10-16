let color_lane = ["#FF5733", "#28A745", "#6C5CE7", "#F39C12"]
let background_color = document.querySelector("body")
let color_text = document.querySelector(".color")
let button = document.querySelector(".changing-btn")


button.addEventListener("click",()=>{
    let color = color_lane[Math.floor(Math.random() * color_lane.length)]
    background_color.style.backgroundColor=color
    color_text.textContent = color;
})