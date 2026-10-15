let indicator = document.querySelector(".scroll-indicator .progress")

window.addEventListener("scroll",()=>{
    let possible = document.documentElement.scrollHeight - window.innerHeight;

    let progress = window.scrollY / possible * 100;
    console.log(progress);
    
    indicator.style.width = progress + '%';
})
