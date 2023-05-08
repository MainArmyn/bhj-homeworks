


function Slider() {
    let next = document.getElementsByClassName("slider__arrow_next")[0];
    let prev = document.getElementsByClassName("slider__arrow_prev")[0];
    let sliders = [...document.getElementsByClassName("slider__item")];
    let dots = [...document.getElementsByClassName("slider__dot")];
    let i = sliders.findIndex(item => item.classList.contains("slider__item_active"));
    let j = sliders.length-1;
    dots[i].style.backgroundColor = "#fff";

    function Activate(number) {
        sliders[number].classList.add("slider__item_active");
        dots[number].style.backgroundColor = "#fff";
    }

    function Deactivate(number) {
        sliders[number].classList.remove("slider__item_active");
        dots[number].style.backgroundColor = "#000";
    }

    for (let k=0;k<dots.length;k++) {
        dots[k].onclick = function() {
            Deactivate(i);
            Activate(k);
            i=k;
        }
    }
    next.onclick = function() {
        if (i===j) {
            Deactivate(i);
            i=0;
            Activate(i);
            return;
        }
        Deactivate(i);
        i+=1;
        Activate(i);
    }
    prev.onclick = function() {
        if (i===0) {
            Deactivate(i);
            i=j;
            Activate(i);
            return;
        }
        Deactivate(i);
        i-=1;
        Activate(i);

    }
}
 Slider();