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

class TerrainService {
    saveTerrain(terrain) {
        return axiosInstance.post("/saveTerrain", terrain);
    }

    getAllTerrain() {
        return axiosInstance.get("/terrain");
    }

    getTerrainById(id) {
        return axiosInstance.get(`/terrain/${id}`);
    }

    deleteTerrain(id) {
        return axiosInstance.delete(`/deleteTerrain/${id}`);
    }

    editTerrain(terrain) {
        return axiosInstance.post(`/editTerrain/${terrain.id}`, terrain);
    }
}

export default new TerrainService();







/*import axios from "axios";

const API_URL = "http://localhost:8080"; 

class TerrainService {

    saveTerrain(terrain) {
        return axios.post(API_URL + "/saveTerrain", terrain);
    }

    getAllTerrain() {
        return axios.get(API_URL + "/terrain");
    }

    getTerrainById(id) {
        return axios.get(API_URL + "/terrain/" + id);
    }

    deleteTerrain(id) {
        return axios.get(API_URL + "/deleteTerrain/" + id);
    }

    editTerrain(terrain) {
        return axios.post(API_URL + "/editTerrain/" + terrain.id, terrain);
    }

}

export default new TerrainService;*/