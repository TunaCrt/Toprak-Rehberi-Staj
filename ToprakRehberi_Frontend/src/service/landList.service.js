import axios from "axios";

const API_URL = "http://localhost:8080"; 

class landListservice {

    /*savePlantedCrop(plantedCrop) {
        return axios.post(API_URL + "/savePlantedCrop", plantedCrop);
    }

    getAllPlantedCrop() {
        return axios.get(API_URL + "/plantedCrop");
    }  */

    /*getPlantedCropById(id) {
        return axios.get(API_URL + "/plantedCrop" + id);
    }
    getPlantedCropByTerrainId(id) {
        return axios.get(API_URL + "/plantedCrop2" + id);
    }

    deletePlantedCrop(id) {
        return axios.get(API_URL + "/deletePlantedCrop/" + id);
    }

    editPlantedCrop(product) {
        return axios.post(API_URL + "/editPlantedCropt/" + product.id, product);
    }*/

}

export default new landListservice;  