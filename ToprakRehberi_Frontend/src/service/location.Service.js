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

class locationService {
    getAllCities() {
        return axios.get(API_URL + "/cities");
    }

    getDistrictsByCity(id) {
        return axios.get(API_URL + "/districts/" + id);
    }

    getNeighborhoodsByDistrict(id) {
        return axios.get(API_URL + "/neighborhoods/" + id);
    }
}

export default new locationService();
