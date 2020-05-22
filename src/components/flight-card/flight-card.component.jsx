import React from 'react';
import './flight-card.styles.scss';
import ButtonDark from '../button-dark/button-dark'
import Col from 'react-bootstrap/Col'

const FlightCard = ({name,image,link}) =>{


    return (
        <Col  lg={6} md={6} sm={12} >
            <div className="flight_details">
                <div className="aviacompany_details">
                    <div><img src={image} /></div>
                    <div><h4>{name}</h4></div>
                </div>
                <div className="buttons">
                    <a href={link}><ButtonDark name="Buy ticket" /></a>
                </div>
            </div>
        </Col>
    )
}

export default FlightCard;