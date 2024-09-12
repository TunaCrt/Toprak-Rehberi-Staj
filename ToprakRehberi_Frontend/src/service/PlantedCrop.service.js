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

class PlantedCropService {

    savePlantedCrop(plantedCrop) {
        return axios.post(API_URL + "/savePlantedCrop", plantedCrop);
    }

    getAllPlantedCrop() {
        return axios.get(API_URL + "/plantedCrop");
    }

    getPlantedCropById(id) {
        return axios.get(API_URL + "/plantedCrop" + id);
    }
    getPlantedCropsByTerrainId(id) {
        return axios.get(API_URL + "/getPlantedCropsByTerrainId2/" + id);
    }

    deletePlantedCrop(id) {
        return axios.get(API_URL + "/deletePlantedCrop/" + id);
    }

    editPlantedCrop(product) {
        return axios.post(API_URL + "/editPlantedCropt/" + product.id, product);
    }

}

export default new PlantedCropService;