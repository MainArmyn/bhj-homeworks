function Active(menu) {
    let items = menu.getElementsByClassName("menu__link");
    for (let item of items) {
        item.onclick = function() {document.location.replace(this.href)};
    }
}

function Menu() {
    let menu=document.getElementsByClassName("menu__item");
    let flag = false;
    for (let el of menu) {
        let extraMenu=el.getElementsByClassName("menu_sub")[0];
        if (extraMenu!=null) {
            el.onclick = function(){
                Close();
                if (flag===false) {
                    extraMenu.classList.add("menu_active");
                    flag=true;
                    return false;
                } else {
                    extraMenu.classList.remove("menu_active");
                    flag=false;
                    return false;
                }
            };
            Active(extraMenu);
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