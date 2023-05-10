function DropDownVal(value,el) {
    let label = el.querySelector(".dropdown__value");
    let list = el.querySelector(".dropdown__list");
    label.textContent = value;
    list.classList.remove("dropdown__list_active");
}/* туда будем передовать
 значение которое надо поставить главным*/
 
function Initlist() { /* будет проходить и искать все такие элементы */
    let flag;
    let list;
    let items;
    let dropBtns = document.getElementsByClassName("dropdown");
    for (let btn of dropBtns) {
        flag = false;
        list = btn.querySelector(".dropdown__list"); 
        btn.addEventListener("click", function() {
            if (flag) {
                list.classList.remove("dropdown__list_active");
                flag = false;
                return;
            } 
            list.classList.add("dropdown__list_active");
            flag = true;
        });
        items = [...list.querySelectorAll(".dropdown__link")];
        items.forEach(element => {
            element.onclick = function() {
                DropDownVal(this.textContent,btn);
                return false;
            }
        });

    }
}
Initlist();
