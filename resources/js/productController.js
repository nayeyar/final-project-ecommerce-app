class ProductController {
    constructor (currentId = 0) {
        this.currentId = currentId
        this.products = []
    }

    addItem (productName, productDescription, productImg, productCreatedAt) {
        this.currentId += 1    
        const newProduct = {
                product_id: this.currentId,
                product_name: productName,
                product_description: productDescription,
                product_img: productImg,
                product_createAt: productCreatedAt
            }
        this.products.push(newProduct)
    }
}

function loadProductFromLocalStorage(){
    const storageProducts = localStorage.getItem("products")
    if (storageProducts){
        const products = JSON.parse(storageProducts)
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            this.products.push(product);
        }
    }
}
const product_list = new ProductController()
product_list.addItem("New arrival girl dress", "Tiny flower on a super cute cotton dress", "resources\images\little flower girl dress.jpg", "06/27/2022")
product_list.addItem("New arrival women T-shirt", "Tiana shirt", "resources\images\tiana shirt women.jpg", "06/27/2022")
console.log(product_list)



