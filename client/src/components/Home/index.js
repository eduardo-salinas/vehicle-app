import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getVehicles());
    },[dispatch]);

    return (
        <div>
            <h1>{store.vehicles[0].name}</h1>
        </div>
    )
};

export default Home;