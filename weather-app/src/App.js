import React from 'react';
import './App.css';
import WeekContainer from "./pages/WeekContainer";
import { useSelector } from 'react-redux';
import ResultPage from './pages/ResultPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import store from "./store";


function App() {
  const cityProp = store.getState() ? store.getState().weatherinfo.city : [];
  const dailyData = store.getState() ? store.getState().dailyData : [];
 
  let resultPath = "/result"
  if (cityProp) {
    resultPath += "?city=" + cityProp.name;
  }
  
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <WeekContainer dailyData={dailyData} />} />
          {/* {cityProp.length > 0 ? <Route to={{pathname: `/result?sort=${cityProp.name}`}} component={ResultPage} /> : null} */}
          <Route path={resultPath} component={() => <ResultPage city={cityProp.name} dailyData={dailyData} />} />
        </Switch>
      </div> 
  );
}

export default connect()(withRouter(App));
