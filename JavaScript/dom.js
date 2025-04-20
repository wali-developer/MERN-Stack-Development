const title = document.querySelector("#welcome");
title.innerHTML = "Welcome to Programming, <span>sa da sar dard de</span>!";
title.style.color = "blue";
title.style.background = "gray";

let paras = document.getElementsByClassName("para");
paras[0].innerHTML = "Paragrph..";

const btn = document.getElementById("btn");
btn.innerText = "Click";
btn.addEventListener("click", () => {
  alert("Button Clicked...");
});
