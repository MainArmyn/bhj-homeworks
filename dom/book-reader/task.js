function Book() {
    function ClearFonts(...args) {/* убирает все активные эелменты что нам нужно*/
        for (let el of args) {
            el.classList.remove("font-size_active");
        }
    }

    function ClearColors(ar,classToRemove) {
        for (let color of ar) {
            color.classList.remove(classToRemove);
        }
    }

    const text = document.querySelector(".book__content");
    const colorControl = document.querySelector(".book__control_color");
    const backControl = document.querySelector(".book__control_background");
    const [small,normal,big] = [...document.querySelectorAll(".font-size")];
    const backColors = [...backControl.querySelectorAll(".color")];
    const textColors = [...colorControl.querySelectorAll(".color")];
    const colorClasses = ["book_color-black","book_color-gray","book_color-whitesmoke"];
    const backClasses = ["book_bg-black","book_bg-gray","book_bg-white"];
    backColors.forEach((el,i) => {
        el.onclick = function() {
            ClearColors(backColors,"color_active");
            this.classList.add("color_active");
            text.classList.remove(...backClasses);
            text.classList.add(backClasses[i]);
            return false;
        };
    });
    textColors.forEach((item,idx) => {
        item.onclick = function() {
            ClearColors(textColors,"color_active");
            this.classList.add("color_active");
            text.classList.remove(...colorClasses);
            text.classList.add(colorClasses[idx]);
            return false;
        };
    });
    small.onclick = function() {
        ClearFonts(big,normal);
        this.classList.add("font-size_active");
        text.classList.remove("book_fs-big");
        text.classList.add("book_fs-small");
        return false;
    };
    big.onclick = function() {
        ClearFonts(small,normal);
        this.classList.add("font-size_active");
        text.classList.remove("book_fs-small");
        text.classList.add("book_fs-big");
        return false;
    };
    normal.onclick = function() {
        ClearFonts(small,big);
        this.classList.add("font-size_active");
        text.classList.remove("book_fs-small");
        text.classList.remove("book_fs-big");
        return false;
    };
}
Book();