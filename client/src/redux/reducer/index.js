import { GET_VEHICLES, GET_VEHICLE_ALL_DATA, LOADING, UPDATE_VALUE } from "../actions";

const initialState = {
    vehicles: [],
    vehicleAllData: {},
    loading: false
};

const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: payload,
                loading: false
            };
        case GET_VEHICLE_ALL_DATA:
            return {
                ...state,
                vehicleAllData: payload,
                loading: false
            };
        case UPDATE_VALUE:
            return state;
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    };
};

export default reducer;