




function ChangeFast() { 
    function Change(el,index) {
        if (el.previousElementSibling!=null) {
            el.previousElementSibling.classList.remove("rotator__case_active");
        }
        el.classList.add("rotator__case_active");
        el.style.color = el.dataset.color;
        index+=1;
        return index;
    }
    const rotates = [...document.querySelectorAll(".rotator")];
    rotates.forEach(rotator => {
        let texts = [...rotator.querySelectorAll(".rotator__case")];
        let f = true;
        let previous;
        let index = texts.findIndex(item => item.classList.contains("rotator__case_active"));
        setInterval(()=>{
            setTimeout(function(){
                if (index===0) {
                    texts[index].style.color = texts[index].dataset.color;
                    texts[index].classList.remove("rotator__case_active");
                    index+=1;
                    texts[index].classList.add("rotator__case_active");
                    texts[index].style.color = texts[index].dataset.color;
                    return;
                }
                if (index===texts.length-1) {
                    texts[index].classList.remove("rotator__case_active");
                    index=0;
                    texts[index].classList.add("rotator__case_active");
                    texts[index].style.color = texts[index].dataset.color;
                    return;
                }
                texts[index].classList.remove("rotator__case_active");
                index+=1;
                texts[index].classList.add("rotator__case_active");
                texts[index].style.color = texts[index].dataset.color;
            },Number(texts[index].dataset.speed));
        },Number(texts[index].dataset.speed))
});
}
ChangeFast();