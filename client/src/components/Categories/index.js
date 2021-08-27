import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicleAllData } from '../../redux/actions';
import Properties from '../Properties';
import StyledCategory from './styled';

const Categories = ({ match }) => {

    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getVehicleAllData(match.params.id));
    }, [dispatch, match.params.id]);

    return (
        <StyledCategory>
            <div>
                <Tabs defaultActiveKey="profile" className="mb-3">
                    {store.vehicleAllData.categories && store.vehicleAllData.categories.map(category =>
                        <Tab
                            eventKey={category.name}
                            title={category.name}
                            key={`category-${category.id}-${store.vehicleAllData.vehicle[0].id}`}
                        >
                            {category.properties.map(property =>
                                <Properties
                                    key={`primerty-${property.id}-${store.vehicleAllData.vehicle[0].id}`}
                                    name={property.name}
                                    value={property.value[0].value}
                                    propertyId={property.id}
                                    vehicleId={store.vehicleAllData.vehicle[0].id}
                                />
                            )}
                        </Tab>
                    )}
                </Tabs>
            </div>
        </StyledCategory>
    )
};

export default Categories;