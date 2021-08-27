import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../redux/actions';
import VehicleCard from '../VehicleCard';
import StyledHome from './styled';

const Home = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch]);

    return (
        <StyledHome>
            <div className="cards">
                {store.vehicles.length && store.vehicles.map(vehicle =>
                    <VehicleCard vehicle={vehicle} key={`vehicle-${vehicle.id}`} />)}
            </div>
        </StyledHome>
    )
};

export default Home;