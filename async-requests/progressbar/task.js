function ProgressBar() {
    const progBar = document.getElementById("progress");
    
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress" , (e) => {
        progBar.value = e.loaded / e.total;
    })
    document.forms.form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newForm = new FormData(document.forms.form);
        xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(newForm);
        xhr.addEventListener("readystatechange" , () => {
            if (xhr.readyState === xhr.DONE) {
                return;
            }
        })
        

    });

}
ProgressBar();