class Cart {
    constructor(cartClass,prodcutClass) {
        this.cart = document.querySelector(cartClass);
        this.productsNames = [];
        this.products = [...document.querySelectorAll(prodcutClass)];
        this.products.forEach(item => {this.productsNames.push(item.dataset.id)});
        this.Storage = window.localStorage;
        this.number = 1;
        this.InitiProducts();
        this.GetItemsFromStorage();
    }


    GetItemsFromStorage() {
        for (let key of this.productsNames) {
            let el = this.Storage.getItem(String(key));
            if (el != null) {
                let newProduct = document.createElement("div");
                newProduct.className = "cart__product";
                newProduct.dataset.id = key;
                newProduct.innerHTML = el;
                this.cart.appendChild(newProduct);
            }
        }
    }

MoveProduct(element) {
    let number = () => { return this.number};
    function Go(startEl,endEl) {
        startEl.style.position = "absolute";
        let end  = endEl.getBoundingClientRect();
        let topEl = end.top;
        let leftEl  = end.left;
        if (parseInt(startEl.style.top,10)>=topEl  && parseInt(startEl.style.left,10)>=leftEl) {
            startEl.style.top = stopCoord.top + "px";
            startEl.style.bottom = stopCoord.bottom + "px";
            startEl.style.left = stopCoord.left + "px";
            startEl.style.right = stopCoord.right + "px";
            startEl.style.position = "static";
            startEl.style.display = "none";
        } else if (count===0) {
            startEl.style.top = stopCoord.top + "px";
            startEl.style.left = stopCoord.left + "px";
            startEl.style.right = stopCoord.right + "px";
            startEl.style.bottom = stopCoord.bottom + "px";
            count+=1;
            Go(startEl,endEl);
        } else {
            startEl.style.top = (parseInt(startEl.style.top,10) - number()) + "px";
            startEl.style.left = (parseInt(startEl.style.left,10) + 5) + "px";
            setTimeout(Go,1,startEl,endEl);
        }
    }

    let count = 0;
    let coordElement = element.querySelector(".product__image");
    let copyElement = coordElement.cloneNode(true);
    element.appendChild(copyElement);
    let stopCoord = coordElement.getBoundingClientRect();
    let childCoord;
    for (let child of this.cart.children) {
        if (child.dataset.id === element.dataset.id) {
            childCoord = child;
        }
    }
    Go(copyElement,childCoord);
}

CheckCopyElements(item) {
    for(let el  of this.cart.children) {
        if (el.dataset.id  === item.dataset.id) {
            let value = el.querySelector(".cart__product-count");
            let newVal = item.querySelector(".cart__product-count");
            value.textContent = Number(value.textContent) + Number(newVal.textContent);
            return [true,el];
        }
    }
}

    InitiProducts() {
        this.products.forEach((item,idx) => {
            let plusButton = item.querySelector(".product__quantity-control_inc");
            let minusButton = item.querySelector(".product__quantity-control_dec");
            let addButton = item.querySelector(".product__add");
            let value = item.querySelector(".product__quantity-value");
            plusButton.onclick = function() {
                value.textContent = Number(value.textContent) + 1;
            };

            minusButton.onclick  = function() {
                if (value.textContent == 0) {
                    return;
                }
                value.textContent = Number(value.textContent) - 1;
            };

            addButton.addEventListener('click' , e => {
                this.addProduct(item);
                this.number = idx + 1;
            });

        });
    }

    addProduct(el) {
        let value = el.querySelector(".product__quantity-value").textContent;
        let image = el.querySelector(".product__image");
        let arcticul = el.dataset.id;
        let newProduct = document.createElement("div");
        newProduct.className = "cart__product";
        newProduct.dataset.id = arcticul;
        newProduct.innerHTML = `
        <img class="cart__product-image" src="${image.src}">
        <div class="cart__product-count">${value}</div>`;
        let flag = this.CheckCopyElements(newProduct);
        if (flag != undefined) {
            this.MoveProduct(el);
            this.number+=1;
            this.Storage.setItem(flag[1].dataset.id,flag[1].innerHTML);
            return;
        } 
        this.Storage.setItem(newProduct.dataset.id,newProduct.innerHTML);
        this.cart.appendChild(newProduct);
        this.MoveProduct(el);
        this.number+=1;
    }
}
new Cart(".cart__products",".product");
