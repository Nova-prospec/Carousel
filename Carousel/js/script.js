

const image  = document.querySelector(".image")
const forwardArrow  = document.querySelector(".forward-arrow")
const backwardArrow  = document.querySelector(".backward-arrow")
const numberOfImages = document.querySelectorAll(".carousel-images img").length
const carouselContainer = document.querySelector(".carousel-images")
const carousel = document.querySelector(".carousel");

let imgIndex = 1;
let translateX  = 0;

carousel.addEventListener("mouseenter" , ()=>{
    forwardArrow.classList.add("show")
    backwardArrow.classList.add("show")
})

carousel.addEventListener("mouseleave",  ()=>{
    forwardArrow.classList.remove("show")
    backwardArrow.classList.remove("show")
})

forwardArrow.addEventListener("click", ()=>{
if ( imgIndex === numberOfImages) {
    translateX = -300
    carouselContainer.style.transform = `translateX(${translateX}px)`
    translateX = 0
    imgIndex = 1
}else{
    imgIndex++
    translateX -= 300
}
carouselContainer.style.transform = `translateX(${translateX}px)`
})


backwardArrow.addEventListener("click", ()=>{
    if ( imgIndex === 1) {
        translateX = -300
        carouselContainer.style.transform = `translateX(${translateX}px)`
        translateX =  (numberOfImages - 1) * -300
        imgIndex  = numberOfImages
    }else{
        imgIndex--;
        translateX += 300

    }
    carouselContainer.style.transform = `translateX(${translateX}px)`
})