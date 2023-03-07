const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');
const fs = require('fs');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    let products;
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
