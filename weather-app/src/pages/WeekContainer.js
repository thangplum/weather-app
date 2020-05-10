import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import {fetchWeather} from "../actions/fetchWeather";
import { Redirect } from 'react-router-dom';
import ResultPage from './ResultPage';

function WeekContainer({ dailyData }) {
  const [city, setCity] = useState("");

  const dispatch = useDispatch()
  const getWeatherInfo =  (city) => dispatch(fetchWeather(city))
  const weather = useSelector(state => state.dailyData);
  

  const weatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("No city");
      
    } else {
      getWeatherInfo(city);
    }
  }

  if (weather.length === 0 || dailyData == weather) {
    return (
      <Form onSubmit={weatherInfo}>
        <Form.Group controlId="cityNameInfo" >
          <Form.Label>Your city</Form.Label>
          <Form.Control type="text" placeholder="Enter your city's name" onChange={(e) => setCity(e.target.value.toLowerCase())} />
        </Form.Group>
        <Button type="submit" >
          Submit
        </Button>
      </Form>
    );
  } else {
    console.log(weather);
    return (
      <Redirect to={{ pathname:`/result?city=${city}` }} component={ResultPage} />
    );
  }
} 


export default WeekContainer;