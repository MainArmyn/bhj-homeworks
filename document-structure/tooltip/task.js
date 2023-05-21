function ToolTip() {
    let tolTp;
    let coord = [];
    function CreateToolTip(el) {
        if (isvisibleEl(el)) {
            let position = el.getBoundingClientRect();
            let tip = document.createElement("div");
            tip.className = "tooltip";
            tip.textContent = el.title;
            let where = el.dataset.position;
            tip.style.top = position.top+"px";
            tip.style.bottom = position.bottom+"px";
            tip.style.right = position.right+"px";
            tip.style.left = position.left+"px";
            tip.width = position.width+"px";
            tip.height = position.height+"px";
            let book = {top: function() {
                tip.style.top = (parseInt(tip.style.top,10) - 40)+"px"; 
            },bottom: function() {
                tip.style.bottom = (parseInt(tip.style.bottom,10) - 40)+"px"; 
            },right: function() {
                tip.style.left = (parseInt(tip.style.right,10) - 170)+"px";
            },left: function() {
                tip.style.left = (parseInt(tip.style.left,10) - 170)+"px";
            }};
            book[where]();
            el.parentElement.insertBefore(tip,el);
        } else {
            coord.push(el);
        }
    }

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

    function Close() {
        const items = document.querySelectorAll(".tooltip");
        for (let item of items) {
            item.classList.remove("tooltip_active");
        }
    }
    const aTags =[...document.querySelectorAll(".has-tooltip")];
    let aTips;
    aTags.forEach((item,idx) => {
        let flag = false;
        CreateToolTip(item);
        item.onclick = function() {
            aTips = [...document.getElementsByClassName("tooltip")];
            tolTp = aTips[idx];
            if (flag) {
                Close();
                tolTp.classList.remove("tooltip_active");
                flag = false;
                return false;
            } 
            Close();
            tolTp.classList.add("tooltip_active");
            flag = true;
            return false;
        }
    })
    coord.forEach(element => {
        window.addEventListener("scroll",function(e) {
            if (isvisibleEl(element)) {
                CreateToolTip(element);
            }
        });
    })

}
ToolTip();