import axios from 'axios'

class ApiService {
    
    getMainUnits = async () => {
        try {
            const response = await axios.get("http://localhost:8080/quantity-measurement/measurements");
            return response.data;
        }
        catch (err) {
            return console.log(err);
        }
    }    

    getSubUnits = async (mainUnit) => {
        try {
            const response = await axios.get("http://localhost:8080/quantity-measurement/measurements/" + mainUnit, {});
            return response.data;
        }
        catch (err) {
            return console.log(err);
        }
    }


    getConvertedValue = async (mainUnit,fromUnit,fromUnitValue,toUnit) => {
        console.log("Inside api call");
        console.log("mainUnit: "+mainUnit);
        console.log("fromUnit: "+fromUnit);
        console.log("fromUnitValue: "+fromUnitValue);
        console.log("toUnit: "+toUnit);
        try {
            const response = await axios.post("http://localhost:8080/quantity-measurement/measurements/" + mainUnit + "/convert", {
                "firstUnit": fromUnit,
                "firstUnitValue": fromUnitValue,
                "secondUnit": toUnit
            });
            console.log("converted value:" + response.data);
            return response.data;
        }
        catch (err) {
            return console.log(err);
        }
    }
}

export default new ApiService();