import React, {useState, useEffect} from 'react';
import './App.css';
import WeekContainer from "./WeekContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'



function App() {
  return (
      <div className="App">
        <WeekContainer />
        
      </div>
    
  );
}

export default connect()(App);
