function Menu() {
    let menu=document.getElementsByClassName("menu__item");
    for (let el of menu) {
        let extraMenu=el.getElementsByClassName("menu_sub")[0];
        if (extraMenu!=null) {
            el.onclick = function(){
                Close();
                extraMenu.classList.add("menu_active");
                return false;
            };
        }
    };
}
function Close() {
    let items = document.getElementsByClassName("menu_sub");
    for (let i of items) {
        i.classList.remove("menu_active");
    }
}

Menu();