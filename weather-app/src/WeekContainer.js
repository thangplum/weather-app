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



  const weatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("No city");
    } else {
      getWeatherInfo(city);
    }
  }

  const weather = useSelector(state => state.dailyData);
  console.log(weather);
  
  
  // const formatDaycard = () =>{
  //   if (weather) {
  //     return weather.map((data, index) => <Col><DayCard reading={data} key={index} /></Col>);
  //   }
  //   else {
  //     return <p>You need to type in a city</p>
  //   }
  // };

  
    return (
      <>
        <Form onSubmit={weatherInfo}>
          <Form.Group controlId="cityNameInfo">
            <Form.Label>Your city</Form.Label>
            <Form.Control type="text" placeholder="Enter your city's name" onChange={(e) => setCity(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => renderForm(true)}>
            Submit
          </Button>
        </Form>
        {form 
        ? <Container>
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
            <Button variant="primary" type="submit" onClick={() => renderForm(true)}>
              Back
            </Button>
          </Row>
        </Container>
        : null
        }
        </>
        
    );
  } 


export default WeekContainer;