import React from 'react';
import {Card} from 'react-bootstrap';

var moment = require('moment');


const DayCard = ({ reading }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);
    
    const imgURL = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`
    return (
        // <div className="col-sm-2">
        //   <div className="card">
        //     <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        //     <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        //     <i className={imgURL}></i>
        //     <h2>{Math.round(reading.main.temp)} °F</h2>
        //     <div className="card-body">
        //       <p className="card-text">{reading.weather[0].description}</p>
        //     </div>
        //   </div>
        // </div>
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