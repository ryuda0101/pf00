// 변수 세팅
const ham_btn = document.querySelector("#wrap .header .center .ham_btn");
const mo_header = document.querySelector("#wrap .header .ham");
const mo_header_list = document.querySelectorAll("#wrap .header .ham ul li");
const close_btn = document.querySelector("#wrap .header .ham button");

ham_btn.addEventListener('click', () => {
    mo_header.style.display = 'block';
})

mo_header_list.forEach((item, index) => {
    item.addEventListener('click', () => {
        mo_header.style.display = 'none';
    })
})

close_btn.addEventListener('click', () => {
    mo_header.style.display = 'none';
})

window.addEventListener('resize',() => {
    mo_header.style.display = 'none';
})