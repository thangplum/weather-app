import React from 'react';
import {Card} from 'react-bootstrap';

var moment = require('moment');


const DayCard = ({ reading }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);
    
    const imgURL = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`
    return (
        
        <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={imgURL} />
            <Card.Body>
            <Card.Title>{moment(newDate).format('dddd')}</Card.Title>
            <Card.Title>{moment(newDate).format('MMMM Do, h:mm a')}</Card.Title>
            <h2>{Math.round(reading.main.temp)} °F</h2>
            <Card.Text>
                {reading.weather[0].description}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DayCard;