function setCookie(name, value) {
    document.cookie = name +  "=" + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split("; ");
    const cookie = pairs.find(p => p.startsWith(name + "="));
   try {
    return cookie.substring(name.length + 1)
   }
   catch {
    return null;
    }
        
}


function Popup() {
    const popup = document.querySelector(".modal");
    const open = (modal) => { modal.classList.add("modal_active")};
    if (getCookie("button") === 'closed') {
        return;
    } else {
        setTimeout(open,2000,popup);
        const closeBtn = document.querySelector(".modal__close");
        closeBtn.onclick = function() {
            setCookie("button", "closed")
            popup.classList.remove("modal_active");
        };
    }
}
Popup();
