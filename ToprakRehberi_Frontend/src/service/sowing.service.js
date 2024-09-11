import axios from "axios";

const API_URL = "http://localhost:8080"; 

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