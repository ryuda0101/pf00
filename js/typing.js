const typing = document.querySelector("#wrap .main_banner .center .top_line h2");
let context = '프론트 개발자\n류다연 입니다.';
let dummy_num = 0;

let typing_act = setInterval(() => {
    typing.innerHTML += context[dummy_num];
    dummy_num++;
    if(dummy_num >= context.length) {
        clearInterval(typing_act);
    }
},200);