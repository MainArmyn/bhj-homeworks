function CheckBoxes() {
    function Go(el,status) {
        el.checked = status;
        Check(el);
       if (el.children != undefined) {
        for (let child of el.children) {
            child.checked = el.checked;
            Go(child,status);
        }
       }
    }

    function Up(elem) {
       if (elem.children != undefined) {
        for (let child of elem.children) {
            child.addEventListener("change", (e) => {
                Check(e.currentTarget);
            })
            Up(child);
        }

       }
    }
    function Check(element) {
        if (element.closest(".interests").closest(".interest")!=null) {
            let array = [...element.closest(".interests").querySelectorAll(".interest__check")];
            if (array.every(item => item.checked===true) || array.every(item => item.checked===false)) {
                element.closest(".interests").closest('.interest').querySelector(".interest__check").checked = array[0].checked;
                element.closest(".interests").closest('.interest').querySelector(".interest__check").indeterminate = false;
            } else {
                element.closest(".interests").closest('.interest').querySelector(".interest__check").indeterminate = true;
            }

        }
    }

    const mainCheckBoxes = [...document.querySelectorAll(".interest")];
    mainCheckBoxes.forEach(item => {
        let flag = false;
        Up(item);
        item.addEventListener("change" , (e) => {
            if (e.currentTarget.checked) {
                Go(e.currentTarget,false);
                e.stopPropagation();
                flag = false;
                return;
            }
            Go(e.currentTarget,true);
            e.stopPropagation();
            flag = true;
        })
    });
}
CheckBoxes();