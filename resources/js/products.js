const productsController = new ProductsController(0);
let addProductCard = (product) => {
    let cardContainer;

    function createProductCard (product) {
        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';
    
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        let productName = document.createElement('h5');
        productName.innerText = product.name;
        productName.className = 'card-productName';
    
        let productDescription = document.createElement('div');
        productDescription.innerText = product.description;
        productDescription.className = 'card-productDescription';
    
        // let productImg = document.createElement('div');
        // productImg.innerText = product.img;
        // productImg.className = 'card-img';
    
        // let productCreatedAt = document.createElement('div');
        // productCreatedAt.innerText = product.createdAt;
        // productCreatedAt.className = 'card-createdAt';
    
        cardBody.appendChild(productName);
        cardBody.appendChild(productDescription);
        // cardBody.appendChild(productImg);
        // cardBody.appendChild(productCreatedAt);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
    }
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }
    cardContainer = document.getElementById('card-container');
    // products.forEach((product) => {
    createProductCard(product);
    // });    
};
addProductCard({
    "name": "dddd",
    "description": "dddd",
    // "img": "",
    // "createdAt": ""
})

function setLocalStorage () {
    const sampleProducts = [
        {productName : "kid clothes 1", productDescription: "", productImg: "", productCreatedAt: ""},
        {productName : "kid clothes 2", productDescription: "", productImg: "", productCreatedAt: ""},
        {productName : "kid clothes 3", productDescription: "", productImg: "", productCreatedAt: ""},
        {productName : "kid clothes 4", productDescription: "", productImg: "", productCreatedAt: ""}
    ]
    localStorage.setItem("products", JSON.stringify(sampleProducts))
}

function loadProductFromProductsController () {
    for (let i = 0; i < productsController.products.length; i++){
        const product = productsController.products[i];
        addProductCard(product);

        
    }
}

const products = []
products.push()
localStorage.setItem("products", JSON.stringify())