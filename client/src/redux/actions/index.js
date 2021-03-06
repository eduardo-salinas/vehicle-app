import axios from "axios";

export const GET_VEHICLES = "GET_VEHICLES";
export const GET_VEHICLE_ALL_DATA = "GET_VEHICLE_ALL_DATA";
export const UPDATE_VALUE="UPDATE_VALUE";
export const LOADING = "LOADING";

export const getVehicles = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const vehicles = await axios.get(`https://vehicles-properties.herokuapp.com/vehicles`);
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
            const vehicle = await axios.get(`https://vehicles-properties.herokuapp.com/vehicles/${id}`);
            return dispatch({ type: GET_VEHICLE_ALL_DATA, payload: vehicle.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_VEHICLE_ALL_DATA, payload: {} });
        };
    };
};

export const updateValue = (values) => {
    return async (dispatch) => {
        try {
            await axios.put(`https://vehicles-properties.herokuapp.com/property-value`, values);
            return dispatch({ type: UPDATE_VALUE })
        } catch (e) {
            console.log(e)
        }
    };
};