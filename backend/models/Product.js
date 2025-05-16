// Simple Product Model
class Product {
  constructor(id, name, sku, quantity, price) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.quantity = quantity;
    this.price = price;
  }
}

module.exports = Product;
