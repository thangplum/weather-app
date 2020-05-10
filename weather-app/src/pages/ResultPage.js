import React from "react";
import DayCard from '../Components/DayCard';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';

function ResultPage({ city, dailyData }) {
    let history = useHistory();
    return (
        <Container>
          <Jumbotron fluid>
            <Container>
              <h4>5-Day Forecast.</h4>
            </Container> 
          </Jumbotron>
          <Row>
            {dailyData.map((data, index) => <Col><DayCard reading={data} key={index} /></Col>)}
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={() => history.push('/')}>
                Back
              </Button>
            </Col>
            
          </Row>
          
        </Container>
        
    );
}

export default withRouter(ResultPage);