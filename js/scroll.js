// 변수 세팅
// 배경에 움직이는 글자
const main_bg = document.querySelector(".main_banner .center .bg");
const contact_bg = document.querySelector(".contact .center .bg");
// 스크롤 이동 될 태그들
let container = document.querySelectorAll("#wrap .container .cont");
// 스크롤 이동시 검은색으로 변할 태그들
let blackWork01 = document.querySelector('#wrap .container .artwork01')
let blackWork02 = document.querySelector('#wrap .container .artwork02')
// 헤더의 gnb 메뉴
const gnb_menu = document.querySelectorAll("#wrap .header .center ul li");

// gnb 메뉴 클릭시 해당 태그로 이동 이벤트
gnb_menu.forEach((item,index) => {
    item.addEventListener("click",(event) => {
        event.preventDefault();
        window.scrollTo({
            top:container[index].offsetTop + 1,
            behavior:"smooth"
        });
    });
});

// 스크롤 이벤트시 해당 태그 디자인 변화
window.addEventListener("scroll",() => {
    scTop = window.scrollY;
    if(scTop > 0){
        main_bg.style.left = scTop + "px";
        header_remove();
    }
    for(let i = 0; i < container.length; i++){
        if (scTop > container[i].offsetTop) {
            header_remove();
            gnb_menu[i].classList.add("black");
            if (scTop > container[2].offsetTop) {
                if(window.matchMedia('screen and (min-width:1201px)').matches) {
                    bg_left(3000);
                }
                else if(window.matchMedia('screen and (max-width:1200px) and (min-width:1023px)').matches) {
                    bg_left(2000);
                }
                else if (window.matchMedia('screen and (max-width:1023px) and (min-width:768px)').matches) {
                    bg_left(1000);
                }
            }
        }
        if (scTop > container[0].offsetTop && scTop < container[1].offsetTop) {
            addBlack();
        }
        else if (scTop > container[2].offsetTop && scTop < container[3].offsetTop) {
            addBlack();
        }
        else {
            removeBlack();
        }
    }
});

// 함수 세팅
function addBlack (){
    container.forEach((item, index) => {
        item.classList.add("black");
    });
}

function removeBlack () {
    container.forEach((item, index) => {
        item.classList.remove("black");
    });
}

function bg_left (minus) {
    contact_bg.style.left = (scTop - container[2].offsetTop - minus) + "px";
}

function header_remove () {
    gnb_menu.forEach((item,index) => {
        item.classList.remove("black");
    });
}