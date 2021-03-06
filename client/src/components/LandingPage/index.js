import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { GiCarWheel } from 'react-icons/gi';
import StyledLandingPage from './styled';

const LandingPage = () => {

    return (
        <StyledLandingPage>
                <Link to='/home'>
                    <Button variant='light' size="lg"><GiCarWheel />  START</Button>
                </Link>
        </StyledLandingPage>
    )
};

export default LandingPage;