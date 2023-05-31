function Auth() {

    function Check() {
        for (let key in localStorage) {
            if (key.startsWith("user" + "-")) {
                return JSON.parse(localStorage.getItem(key))
            }
        }
        return null;
    }
        if (!Check()) {
            const authForm = document.getElementById("signin__form");
            authForm.addEventListener("submit" ,  function(e) {
                e.preventDefault();
                let newForm = new FormData(authForm);
                fetch("https://students.netoservices.ru/nestjs-backend/auth", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                      },
                    body: JSON.stringify(newForm)
                    }).then(response => response.json()).then(result => {
                        console.table(result)
                    });
    
            });
        }

}
Auth();