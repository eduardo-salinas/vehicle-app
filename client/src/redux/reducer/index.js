import { GET_VEHICLES, GET_VEHICLE_ALL_DATA, LOADING } from "../actions";

const initialState = {
    vehicles: [],
    vehicleAllDate: {},
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
                vehicleAllDate: payload,
                loading: false
            };
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