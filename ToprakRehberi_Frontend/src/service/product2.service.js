import axios from "axios";

const API_URL = "http://localhost:8080"; 

class ProductService2 {

    saveProduct2(product) {
        return axios.post(API_URL + "/saveProduct2", product);
    }

    getAllProduct2() {
        return axios.get(API_URL + "/product2");
    }

    getProductById2(id) {
        return axios.get(API_URL + "/product2" + id);
    }

    deleteProduct2(id) {
        return axios.get(API_URL + "/deleteProduct2/" + id);
    }

    editProduct2(product) {
        return axios.post(API_URL + "/editProduct2/" + product.id, product);
    }
    addSowing(sowing,productId){
        return axios.post(API_URL + "/"+productId+"/" + sowing);
    }
    addSowing2(productId, rating) {
        // Değerlendirme için gerekli parametrelerle POST isteği
        return axios.post(`${API_URL}/${productId}/sowing`, {  rating });
    }

}

export default new ProductService2;