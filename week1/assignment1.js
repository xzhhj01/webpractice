let num = prompt("몇번 치실래요?");

num = Number(num);

const cnt_dom = document.getElementById("cnt");
const egg_dom = document.getElementById("cnt");

cnt_dom.innerHTML = num;

const hitegg = egg_dom.addEventListener("click");
