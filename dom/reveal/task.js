function Appear() {
    function isvisibleEl(item) {
        let {top,bottom} = item.getBoundingClientRect();
        if (bottom < 0) {
            return false;
        } 
        if (top > window.innerHeight) {
            return false;
        }
        return true;
    }
    const elements = document.querySelectorAll(".reveal");
    for (let el of elements) {
        window.addEventListener("scroll", function() {
            if (isvisibleEl(el)) {
                el.classList.add("reveal_active");
            }
        });
    }
}
Appear();
