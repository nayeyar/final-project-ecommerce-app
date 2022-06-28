
class ProductsController {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this._products = [];
    }

    // Function that stores products as objects in a product array
    addProduct(name, description, img, createdAt) {
        const productObj = {
            _name: name,
            _description: description,
            _img: img,
            _createdAt: createdAt,
            _id: this.currentId++
        };
        this._products.push(productObj);

        // Add/Update this._products array of objects as products in localStorage
        localStorage.setItem("products", JSON.stringify(this._products));
    
    }

    get products() {
        return this._products;
    }

    // Load localStorage and store it in this object's property _product's array
    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products");
        if (storageProducts) {
            const storedProducts = JSON.parse(storageProducts);
            for(let i = 0; i < storedProducts.length; i++) {
                this._products.push(storedProducts[i]);
            }
            console.log(this._products);
        }
    }

}

export default ProductsController;
