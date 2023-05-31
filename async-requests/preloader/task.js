class Animation {
    constructor() {
        this.items = document.querySelector("#items");
        this.xhr = new XMLHttpRequest();
        this.ring = document.querySelector(".loader");
        this.Storage = window.localStorage;
        this.arrValue = [];
        this.InitStart();
        this.GetItemsFromStorage();
    }


    GetItemsFromStorage() {
        const value = this.Storage.getItem("Valute");
        if (value != null ) {
            this.ring.classList.remove("loader_active");
            const valutes = JSON.parse(value);
            for (let item of valutes) {
                this.CreateItem(item);
            }
        }
    }

    InitStart() {
        this.xhr.open("GET","https://students.netoservices.ru/nestjs-backend/slow-get-courses");
        this.xhr.send();
        this.xhr.addEventListener("readystatechange" , () => {
            if (this.xhr.readyState === this.xhr.DONE) {
                this.DestroyLoader();
                const obj = JSON.parse(this.xhr.response);
                const valueArr = obj.response["Valute"];
                for (let key in valueArr) {
                    this.arrValue.push(valueArr[key]);
                    this.CreateItem(valueArr[key]);
                }
                this.Storage.setItem("Valute",JSON.stringify(this.arrValue))
            }
        })
    }

    CreateItem(el) {
        const item  = document.createElement("div");
        item.className = "item";
        item.innerHTML = `<div class="item__code">
        ${el["CharCode"]}
    </div>
    <div class="item__value">
        ${el["Value"]}
    </div>
    <div class="item__currency">
        руб.
    </div>`;
    this.items.appendChild(item);
    }

    DestroyLoader() {
        for (let child of this.items.children) {
            this.items.removeChild(child);
        }
    }
}
new Animation();