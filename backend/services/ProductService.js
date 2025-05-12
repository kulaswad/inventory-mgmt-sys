// In-memory product storage for demo
const products = [];
const Product = require('../models/Product');

class ProductService {
  getAllProducts() {
    return products;
  }
  
  addProduct(name, sku, quantity, price) {
    const id = products.length + 1;
    const product = new Product(id, name, sku, quantity, price);
    products.push(product);
    return product;
  }
}

module.exports = new ProductService();
