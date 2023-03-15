const weatherApi = "http://api.weatherapi.com/v1/current.json?key=632ded524aa0408cb45181516231503&q="
const forecastApi = "http://api.weatherapi.com/v1/forecast.json?key=632ded524aa0408cb45181516231503&q="

const currentDay = new Date();

function getWeek() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = new Date().getDay();
    let newDays = [];
    for (let i = 0; i < days.length; i++) {
        newDays.push(days[day])
        if (day == 6) day = 0;
        else day++;
    }
    return newDays;
}

function formatDate(date) {
    let month = date.split('-')[1];
    let day = date.split('-')[2];
    let year = date.split('-')[0];
    
    return `${month}/${day}/${year}`
}

function currentWeather(location) {
    fetch(weatherApi + location)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            console.log(`The current weather condition in ${data.location.name}, ${data.location.region} is ${data.current.condition.text} and feels like ${data.current.feelslike_f} degrees fahrenheit`)
            console.log(`The actual temperature is ${data.current.temp_f} degrees fahrenheit with wind from the ${data.current.wind_dir} at ${data.current.wind_mph} MPH`)
        })
}

function sevenDayWeather(location, days) {
    fetch(forecastApi + location + '&days=' + days)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            console.log(`The seven day forecast is as follows:

            DATE:      ${getWeek()[0]} - ${formatDate(data.forecast.forecastday[0].date)}
            Condition: ${data.forecast.forecastday[0].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[0].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[0].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[0].day.maxwind_mph} mph
            
            DATE:      ${getWeek()[1]} - ${formatDate(data.forecast.forecastday[1].date)}
            Condition: ${data.forecast.forecastday[1].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[1].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[1].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[1].day.maxwind_mph} mph
            
            DATE:      ${getWeek()[2]} - ${formatDate(data.forecast.forecastday[2].date)}
            Condition: ${data.forecast.forecastday[2].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[2].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[2].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[2].day.maxwind_mph} mph
            
            DATE:      ${getWeek()[3]} - ${formatDate(data.forecast.forecastday[3].date)}
            Condition: ${data.forecast.forecastday[3].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[3].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[3].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[3].day.maxwind_mph} mph
            
            DATE:      ${getWeek()[4]} - ${formatDate(data.forecast.forecastday[4].date)}
            Condition: ${data.forecast.forecastday[4].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[4].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[4].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[4].day.maxwind_mph} mph
            
            DATE:      ${getWeek()[5]} - ${formatDate(data.forecast.forecastday[5].date)}
            Condition: ${data.forecast.forecastday[5].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[5].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[5].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[5].day.maxwind_mph} mph
            
            DATE:      ${getWeek()[6]} - ${formatDate(data.forecast.forecastday[6].date)}
            Condition: ${data.forecast.forecastday[6].day.condition.text}
            MIN temp:  ${data.forecast.forecastday[6].day.mintemp_f}f
            MAX temp:  ${data.forecast.forecastday[6].day.maxtemp_f}f
            MAX wind:  ${data.forecast.forecastday[6].day.maxwind_mph} mph`)
        })
}

currentWeather("29687");
sevenDayWeather("29687", 7);