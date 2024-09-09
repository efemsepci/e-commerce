import axios from "axios";

const PRODUCTS_API = "https://fakestoreapi.com/products";

class ProductService {
  getProducts() {
    return axios.get(PRODUCTS_API);
  }
  getProductById(id) {
    return axios.get(PRODUCTS_API + "/" + id);
  }
}

export default new ProductService();
