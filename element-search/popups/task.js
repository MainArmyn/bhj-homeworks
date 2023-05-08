function Show() {
 let pop=document.getElementById("modal_main");
 let sucBtn=document.querySelector(".show-success");
 let sucPop=document.querySelector("#modal_success");
 pop.classList.add("modal_active");
 let closeBtn=document.querySelectorAll(".modal__close");
 for (let btns of closeBtn) {
    btns.onclick=() => {
        pop.style.display="none";
        sucPop.style.display="none";
    };
 };
 sucBtn.onclick=() => {
    pop.classList.remove("modal_active");
    sucPop.classList.add("modal_active");
};   
}
setTimeout(Show,1000);