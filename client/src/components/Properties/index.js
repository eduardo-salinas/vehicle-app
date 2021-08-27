import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-stars'
import { updateValue } from '../../redux/actions';

const Properties = ({ name, value, propertyId, vehicleId, img }) => {
    const dispatch = useDispatch();

    const ratingChanged = (value) => {
        const newRating = {
            newValue: value,
            vehicleId,
            propertyId
        }
        dispatch(updateValue(newRating));
    };

    return (
        <Card variant="ligth" className="prop">
            <img src={img} alt="" />
            <Card.Text>{name}</Card.Text>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                value={value}
                color2={'#ffd700'}
                half={false}
            />
        </Card>
    )
};

export default Properties;