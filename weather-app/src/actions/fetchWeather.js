export function fetchWeather(city) {
    
    return function(dispatch) {
        const weatherURL =
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
        fetch(weatherURL)
        .then(res => res.json())
        .then(result => {
            dispatch({type:"FETCH_WEATHER", payload:result});
        })
        .catch(err => {
            console.log(err);
        })
    }
}