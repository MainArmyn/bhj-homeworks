function TextArea() {
    let lcValue = localStorage.getItem("text"); 
    const textArea = document.querySelector("#editor");
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Отсчистить";
    clearBtn.className = "clear-btn";
    clearBtn.onclick = () => {
        textArea.value = '';
        localStorage.setItem("text",textArea.value);
    };
    document.querySelector(".content").appendChild(clearBtn);
    if (lcValue) {
        textArea.value = lcValue;
    }
    textArea.addEventListener("keydown", (e) => {
        localStorage.setItem("text", e.currentTarget.value);
    }); 
}
TextArea();