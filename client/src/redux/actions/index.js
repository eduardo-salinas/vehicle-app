import axios from "axios";

export const GET_VEHICLES = "GET_VEHICLES";
export const GET_VEHICLE_ALL_DATA = "GET_VEHICLE_ALL_DATA";
export const LOADING = "LOADING";

export const getVehicles = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const vehicles = await axios.get(`http://localhost:3001/vehicles`);
            return dispatch({ type: GET_VEHICLES, payload: vehicles.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_VEHICLES, payload: [] });
        };
    };
};

export const getVehicleAllData = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const vehicle = await axios.get(`http://localhost:3001/vehicles/${id}`);
            console.log("******veiALll", vehicle);
            return dispatch({ type: GET_VEHICLES, payload: vehicle.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_VEHICLES, payload: [] });
        };
    };
};