import React from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import DayCard from './Components/DayCard';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }
  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=61401&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
  }

  formatDaycard = () =>{
    return this.state.dailyData.map((data, index) => <Col><DayCard reading={data} key={index} /></Col>)
  }

  render() {
    return (
      <Container>
        <Jumbotron fluid>
          <Container>
            <h4>5-Day Forecast.</h4>
          </Container> 
        </Jumbotron>
        
        <h5 className="display-5 text-muted">Galesburg, US</h5>
        
        <Row>
          {this.formatDaycard()}
        </Row>
      </Container>
      
    )
  }
}

export default WeekContainer;