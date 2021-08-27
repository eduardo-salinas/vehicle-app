import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import img from '../../assets/vehicle.png'
import { Link } from "react-router-dom";


const VehicleCard = ({ vehicle }) => {


    return (
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Card.Text>  {vehicle.patent} </Card.Text>
                <Link to={`/categories/${vehicle.id}`}>
                    <Button variant="light"> VER / MODIFICAR</Button>
                </Link>
            </Card.Body>
        </Card >
    )
};

export default VehicleCard;