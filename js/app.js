const searchInput = document.querySelector(".searchInput");
const priceSelect = document.querySelector("#price");
const maleSelect = document.querySelector(".male");
const femaleSelect = document.querySelector(".female");
const brandSelect = document.querySelector("#brand");
const amountSelect = document.querySelector("#itemAmount");
const newsSelect = document.querySelector("#news");
const saleSelect = [...document.querySelectorAll(".sale")];
const productsContainer = document.querySelector("#productContainer");
const products = [...document.querySelectorAll(".card")];
let task = [];
let saleArr = [];

products.filter(el => task.push(el.dataset.name));

const searchProduct = e => {
    let searchText = e.target.value.toLowerCase();
    task = task.filter(product => product.toLowerCase().includes(searchText));

    productsContainer.innerHTML = '';
    products.forEach(element => {
        if(element.dataset.name === task[0]){
            productContainer.appendChild(element)

        }
        // else {
        //     products.forEach(element =>{
        //         productContainer.appendChild(element)
        //     })
        // }
    })
    console.log(task);
}

const sortPrice = (e) => {
    let priceValue = e.target.value;
    productsContainer.innerHTML = '';
    if(priceValue === "cheap"){
        function comparePrice(a, b) {
            return a.dataset.price - b.dataset.price
        }
        const cheapPrice = products.sort(comparePrice);
        cheapPrice.forEach(function(cheapElement){
            productsContainer.appendChild(cheapElement);
        })
    }
    else if (priceValue === "expensive"){
        function comparePrice(a, b) {
            return  b.dataset.price - a.dataset.price
        }
        const expensivePrice = products.sort(comparePrice);
        expensivePrice.forEach(function(element){
            productsContainer.appendChild(element);
        })
    } else if (priceValue === "empty") {
        products.forEach(element => {
            productContainer.appendChild(element)
        })
    }
}

const amountProducts = e =>{
    let amountValue = e.target.value;
    let counter = 0;
    products.forEach(function(el){
        counter++
        el.dataset.counter = counter;
    })
    if (amountValue === "10"){
        products.forEach(el =>{
            if(el.dataset.counter > 10){
                el.style.display = "none"
            }
        })
    }
    else {
        products.forEach(function(el){
            el.style.display = "block"
        })
    }
}

const sortNews = (e) => {
    let newsValue = e.target.value;
    productsContainer.innerHTML = '';
    if(newsValue === "new"){
        function compareNews(a, b) {
            return a.dataset.position - b.dataset.position
        }
        const newProduct = products.sort(compareNews);
        newProduct.forEach(element => {
            productsContainer.appendChild(element);
        })
    }
    else if (newsValue === "old"){
        function compareNews(a, b) {
            return  b.dataset.position - a.dataset.position
        }
        const oldProduct = products.sort(compareNews);
        oldProduct.forEach(element =>{
            productsContainer.appendChild(element);
        })
    }  
}

const maleFilter = e => {
    const checked = e.target.checked;
    productsContainer.innerHTML = '';
    if (checked === true){
        const maleProducts = products.filter(product => {
            if(product.dataset.sex === "male"){
                return product
            }
        })
        maleProducts.forEach(element => {
            productsContainer.appendChild(element);
        })
    }
    else if(checked === false){
        products.forEach(element => {
            productsContainer.appendChild(element);
        })
    }  
}

const femaleFilter = e => {
    const checked = e.target.checked;
    productsContainer.innerHTML = '';
    if (checked === true){
        const femaleProducts = products.filter(product => {
            if(product.dataset.sex === "female"){
                return product
            }
        })
        femaleProducts.forEach(element => {
            productsContainer.appendChild(element);
        })
    }
    else if(checked === false){
        products.forEach(element => {
            productsContainer.appendChild(element);
        })
    }  
}

const brandFilter = e =>{
    let select = e.target.value.toLowerCase();
    switch(select) {
        case "adidas":
            products.forEach(element => {
                if(element.dataset.brand !== "adidas"){
                    element.style.display = "none"
                }  
                else{
                    element.style.display = "block"
                }
            })
            break;
        case "nike":
            products.forEach(element => {
                if(element.dataset.brand !== "nike"){
                    element.style.display = "none"
                }  
                else{
                    element.style.display = "block"
                }
            })
            break;
        case "reebok":
            products.forEach(element => {
                if(element.dataset.brand !== "reebok"){
                    element.style.display = "none"
                }  
                else{
                    element.style.display = "block"
                }
            })
            break;    
        case "puma":
            products.forEach(element => {
                if(element.dataset.brand !== "puma"){
                    element.style.display = "none"
                }  
                else{
                    element.style.display = "block"
                }
            })
        break;
        case "empty":
            products.forEach(element => {
                element.style.display = "block"
            })
        break;
    }
}

const saleFilter = e => {
    productsContainer.innerHTML = '';
    saleArr = products.filter(element =>{
            if(e.target.value === element.dataset.sale){
                return element
            }
    })
    saleArr.forEach(element => {
        productsContainer.appendChild(element)
    })   
}



searchInput.addEventListener("input", searchProduct);
priceSelect.addEventListener("change", sortPrice);
amountSelect.addEventListener("input", amountProducts);
maleSelect.addEventListener("change", maleFilter);
femaleSelect.addEventListener("change",femaleFilter);
brandSelect.addEventListener("change", brandFilter);
newsSelect.addEventListener("change", sortNews);
saleSelect.forEach(input => input.addEventListener("change", saleFilter));


