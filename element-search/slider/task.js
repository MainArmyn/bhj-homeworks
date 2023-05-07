function Slider() {
    let next = document.getElementsByClassName("slider__arrow_next")[0];
    let prev = document.getElementsByClassName("slider__arrow_prev")[0];
    let sliders = [...document.getElementsByClassName("slider__item")];
    let dots = [...document.getElementsByClassName("slider__dot")];
    let i = 0;
    dots[i].style.backgroundColor = "#fff";
    for (let k=0;k<dots.length;k++) {
        dots[k].onclick = function() {
            sliders[i].classList.remove("slider__item_active");
            dots[i].style.backgroundColor = "#000";
            this.style.backgroundColor = "#fff";
            sliders[k].classList.add("slider__item_active");
            i=k;
        }
    }
    let j = sliders.length-1;
    next.onclick = function() {
        if (i===j) {
            dots[i].style.backgroundColor = "#000";
            sliders[i].classList.remove("slider__item_active");
            i=0;
            dots[i].style.backgroundColor = "#fff";
            sliders[i].classList.add("slider__item_active");
            return;
        }
        dots[i].style.backgroundColor = "#000";
        sliders[i].classList.remove("slider__item_active");
        i+=1;
        dots[i].style.backgroundColor = "#fff";
        sliders[i].classList.add("slider__item_active");
    }
    prev.onclick = function() {
        if (i===0) {
            dots[i].style.backgroundColor = "#000";
            sliders[i].classList.remove("slider__item_active");
            i=j;
            dots[i].style.backgroundColor = "#fff";
            sliders[i].classList.add("slider__item_active");
            return;
        }
        dots[i].style.backgroundColor = "#000";
        sliders[i].classList.remove("slider__item_active");
        i-=1;
        dots[i].style.backgroundColor = "#fff";
        sliders[i].classList.add("slider__item_active");

    }
}
 Slider();