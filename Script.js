let _1vh = Math.round(window.innerHeight);

let nav = document.getElementsByTagName("nav");

document.addEventListener("scroll", (scroll)=> {
    if(scrollY > _1vh) {
        nav[0].classList.add("show")
    }
    if(scrollY < _1vh) {
        nav[0].classList.remove("show")
    }
})