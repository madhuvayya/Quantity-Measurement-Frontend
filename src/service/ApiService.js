import axios from 'axios'

class ApiService {
    constructor(){

    }
    
    getMainUnits = () => {
        return axios.get("http://localhost:8080/quantity-measurement/measurements")
        .then(response=> {
            return response.data;
        })
        .catch(err => console.log(err));
    }    

    getSubUnits = (mainUnit) => {
        return axios.get("http://localhost:8080/quantity-measurement/measurements/"+mainUnit,{})
        .then(response=> {
            return response.data;
        })
        .catch(err => console.log(err));
    }
}

export default new ApiService();