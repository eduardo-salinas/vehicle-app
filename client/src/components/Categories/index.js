import React, { useEffect } from 'react';
import { Card, Spinner, Tab, Tabs } from 'react-bootstrap';
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
        <>
            {store.loading ?
                <div className="spinner">
                    <Spinner animation="border" variant="light" />
                </div>
                :
                <StyledCategory>
                        <Card.Title variant="ligth" className="prop">
                            {store.vehicleAllData.vehicle &&
                                <>
                                    <Card.Text>{store.vehicleAllData.vehicle[0].name}</Card.Text>
                                    <Card.Text>{store.vehicleAllData.vehicle[0].patent}</Card.Text>
                                </>
                            }
                        </Card.Title>
                    <div className="categ">
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
                                            img={category.icon}
                                        />
                                    )}
                                </Tab>
                            )}
                        </Tabs>
                    </div>
                </StyledCategory>
            }
        </>
    )
};

export default Categories;