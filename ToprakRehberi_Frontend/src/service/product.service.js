import axios from "axios";

const API_URL = "http://localhost:8080"; 

// Axios instance oluşturuluyor
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// İstek öncesi interceptor ekleniyor
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/saveProduct", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/product2");
    }

    getProductById(id) {
        return axios.get(API_URL + "/product2" + id);
    }

    deleteProduct(id) {
        return axios.get(API_URL + "/deleteProduct/" + id);
    }

    editProduct(product) {
        return axios.post(API_URL + "/editProduct/" + product.id, product);
    }

}

export default new ProductService;