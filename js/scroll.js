const main_bg = document.querySelector(".main_banner .center .bg");
const contact_bg = document.querySelector(".contact .center .bg");
const all = document.querySelector("*");

const main_banner = document.querySelector(".main_banner").offsetTop;
const artwork = document.querySelectorAll(".artworks .artwork");
const artwork01 = document.querySelector(".artworks .artwork01");
const artwork02 = document.querySelector(".artworks .artwork02");
const artwork03 = document.querySelector(".artworks .artwork03");
const contact = document.querySelector(".contact").offsetTop;

window.addEventListener("scroll",() => {
    scTop = window.scrollY;
    if(scTop > 0){
        main_bg.style.left = scTop + "px";
    }
    if(scTop > artwork01.offsetTop) {
        artwork.forEach((item, index) => {
            item.classList.add("black");
        });
    }
    if(scTop > artwork02.offsetTop) {
        artwork.forEach((item, index) => {
            item.classList.remove("black");
        });
    }
    if(scTop > artwork03.offsetTop) {
        artwork.forEach((item, index) => {
            item.classList.add("black");
        });
        if(window.matchMedia('screen and (min-width:1201px)').matches) {
            contact_bg.style.left = (scTop - artwork03.offsetTop - 3000) + "px";
        }
        else if(window.matchMedia('screen and (max-width:1200px) and (min-width:1023px)').matches) {
            contact_bg.style.left = (scTop - artwork03.offsetTop - 2000) + "px";
        }
        else if (window.matchMedia('screen and (max-width:1023px) and (min-width:768px)').matches) {
            contact_bg.style.left = (scTop - artwork03.offsetTop - 1000) + "px";
        }
    }
});