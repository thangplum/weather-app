const weatherReducer = (state = {
    weatherinfo: [],
    fullData: [],
    dailyData: []
}, action) => {
    //check the action type
    if (action.type === "FETCH_WEATHER") {
        const dailyData = action.payload.list.filter(reading => reading.dt_txt.includes("18:00:00"));
        
        state = {...state, weatherinfo: action.payload, fullData: action.payload.list, dailyData: dailyData};   
    }
    return state;
}

export default weatherReducer;