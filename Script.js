let _1vh = (Math.round(window.innerHeight))/2;

let nav = document.getElementById("back-to-top");

document.addEventListener("scroll", (scroll)=> {
    if(scrollY > _1vh) {
        nav.classList.add("show")
    }
    if(scrollY < _1vh) {
        nav.classList.remove("show")
    }
})