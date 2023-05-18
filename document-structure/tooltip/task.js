function ToolTip() {
    let tolTp;
    function CreateToolTip(el) {
        const tip = document.createElement("div");
        tip.className = "tooltip";
        tip.textContent = el.title;
        tip.style[el.dataset.position] = 0;
        el.appendChild(tip);
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
}
ToolTip();