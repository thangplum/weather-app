import React, { useState } from 'react';
import { Container, Row, Col, Jumbotron, Form, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import {fetchWeather} from "./actions/fetchWeather";
import DayCard from './Components/DayCard';

function WeekContainer() {
  const [city, setCity] = useState("");
  const [form, renderForm] = useState(false);

  const dispatch = useDispatch()
  const getWeatherInfo = (city) => dispatch(fetchWeather(city))
  const weather = useSelector(state => state.dailyData);

  const weatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("No city");
    } else {
      getWeatherInfo(city);
    }
  }

  if (!form) {
    return (
      <Form onSubmit={weatherInfo}>
        <Form.Group controlId="cityNameInfo" >
          <Form.Label>Your city</Form.Label>
          <Form.Control type="text" placeholder="Enter your city's name" onChange={(e) => setCity(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={() => weather.length ? renderForm(true) : null}>
          Submit
        </Button>
      </Form>
      
    );
  } else {
    if (weather.length) {
      console.log(weather);
      return (
        <Container>
          <Jumbotron fluid>
            <Container>
              <h4>5-Day Forecast.</h4>
            </Container> 
          </Jumbotron>
          
          <h5 className="display-5 text-muted">{city.toUpperCase()}</h5>
          <Row>
            {weather.map((data, index) => <Col><DayCard reading={data} key={index} /></Col>)}
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" onClick={() => renderForm(false)}>
                Back
              </Button>
            </Col>
            
          </Row>
          
        </Container>
      );
      
    } else {
      return (
        <span>Loading weather...</span>
      );
    }
  }
} 


export default WeekContainer;