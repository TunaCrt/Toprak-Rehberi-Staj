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

class SowingService {

    saveSowing(Sowing) {
        return axios.post(API_URL + "/saveSowing", Sowing);
    }

    getAllSowing() {
        return axios.get(API_URL + "/Sowing");
    }

    getSowingById(id) {
        return axios.get(API_URL + "/Sowing/" + id);
    }

    deleteSowing(id) {
        return axios.get(API_URL + "/deleteSowing/" + id);
    }

    editSowing(Sowing) {
        return axios.post(API_URL + "/editSowing/" + Sowing.id, Sowing);
    }

}

export default new SowingService;