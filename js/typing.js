const typing = document.querySelector("#wrap .main_banner .center .top_line h2");
let context = "류다연의 포트폴리오 입니다.";
let dummy_num = 0;

let typing_act = setInterval(() => {
    typing.innerHTML += context[dummy_num];
    dummy_num++;
    if(dummy_num >= context.length) {
        clearInterval(typing_act);
    }
},200);