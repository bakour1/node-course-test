const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save() {
    return db.execute(
      'INSERT INTO products (title,imageUrl,description,price) VALUES (?, ?, ?, ?)',
      [this.title, this.imageUrl, this.description, this.price]
    );
  }
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {}

  static deleteById(id) {}
};
