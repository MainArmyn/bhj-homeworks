

function Auth2() {
    function Check() {
        for (let key in localStorage) {
            if (key.startsWith("user" + "-")) {
                return JSON.parse(localStorage.getItem(key))
            }
        }
        return null;
    }

    function Incorrect(form) {
        alert("Неверный логин/пароль");
                        Array.from(form.children).forEach(element => {
                            for (let child of element.children) {
                                child.value = '';
                            }
                        });
    }
    const xhr = new XMLHttpRequest();
    const authForm = document.getElementById("signin__form");
    const welcome  = document.getElementById("welcome");
    const logOutBtn = document.querySelector(".log-out");
        if (!Check()) {
            authForm.addEventListener("submit" ,  function(e) {
                e.preventDefault();
                let newForm = new FormData(authForm);
                xhr.open("POST","https://students.netoservices.ru/nestjs-backend/auth");
                xhr.responseType = "json";
                xhr.send(newForm);
                xhr.addEventListener("readystatechange" , () => {
                    if (xhr.readyState === xhr.DONE) {
                       if (xhr.response.success) {
                            authForm.parentElement.classList.remove("signin_active");
                            welcome.textContent = "Добро пожаловать : "+xhr.response["user_id"];
                            welcome.classList.add("welcome_active");
                            localStorage.setItem("user-"+xhr.response["user_id"],xhr.response["user_id"]);
                       } else {
                        Incorrect(authForm);
                       }
                    }
                })
    
            });
        } else {
            let id = Check();
            authForm.parentElement.classList.remove("signin_active");
            welcome.textContent = "Добро пожаловать : "+ id;
            welcome.classList.add("welcome_active");
        }
}
Auth2();