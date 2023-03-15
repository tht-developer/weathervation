const weatherApi = "http://api.weatherapi.com/v1/current.json?key=632ded524aa0408cb45181516231503&q="

function getWeather(location) {
    fetch(weatherApi + location)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(`The current weather condition in ${data.location.name}, ${data.location.region} is ${data.current.condition.text} and feels like ${data.current.feelslike_f} degrees fahrenheit`)
            console.log(`The actual temperature is ${data.current.temp_f} degrees fahrenheit with wind from the ${data.current.wind_dir} at ${data.current.wind_mph} MPH`)
        })
}

getWeather("29687");