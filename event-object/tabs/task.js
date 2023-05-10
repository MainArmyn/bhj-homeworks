function InitTabs() {
    function CloseOthers(labls,conts) {
        labls.forEach((element,idx) => {
            element.classList.remove("tab_active");
            conts[idx].classList.remove("tab__content_active");
        })
    }

    
    let tabs = [...document.getElementsByClassName("tabs")];
    tabs.forEach(item => {
        let labels = [...item.querySelectorAll(".tab")];
        let contents = [...item.querySelectorAll(".tab__content")];
        labels.forEach((el,idx) => {
            el.onclick = function() {
                CloseOthers(labels,contents);
                this.classList.add("tab_active");
                contents[idx].classList.add("tab__content_active");
            }
        })
        
    })

}
InitTabs();