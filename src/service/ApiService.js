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
        const requestObject = {
            "firstUnit": fromUnit,
            "firstUnitValue": fromUnitValue,
            "secondUnit": toUnit
        }

        try {
            const response = await axios.post("http://localhost:8080/quantity-measurement/measurements/" + mainUnit + "/convert", 
                    requestObject);
            console.log("converted value:" + response.data);
            if(fromUnitValue !== 1)
                this.updateHistory(mainUnit,fromUnit,fromUnitValue,toUnit,response.data);
            return response.data;
        }
        catch (err) {
            return console.log(err);
        }
    }

    updateHistory(mainUnit,fromUnit,fromUnitValue,toUnit,result){ 
        let responseObject = {
            measurement : mainUnit,
            firstUnit : fromUnit,
            firstUnitValue: fromUnitValue,
            secondUnit: toUnit,
            convertedValue: result
        }

        localStorage.setItem(Date.now(),JSON.stringify(responseObject));
    }

}

export default new ApiService();